/* Pass Encrypt UI: site select + seed input + masked result + copy. */
(function () {
  'use strict';
  var sites = Array.prototype.slice.call(document.querySelectorAll('.site'));
  var seedEl = document.getElementById('seed');
  var previewEl = document.getElementById('preview');
  var resultEl = document.getElementById('result');
  var copyBtn = document.getElementById('copy');
  var revealBtn = document.getElementById('reveal');
  var statusEl = document.getElementById('site-status');
  var warnEl = document.getElementById('seed-warn');
  var selected = '';

  function current() {
    if (!selected) return '';
    return window.PassEncrypt.generatePassword(selected + seedEl.value);
  }

  function refresh() {
    var seed = seedEl.value;
    previewEl.textContent = selected ? selected + ' + ' + (seed || '…') : '—';
    var out = current();
    var ready = Boolean(selected && seed);
    resultEl.value = ready ? out : '';
    resultEl.placeholder = !selected
      ? 'Select a site and enter a seed'
      : (!seed ? 'Enter a seed' : '');
    copyBtn.disabled = !ready;
    revealBtn.disabled = !ready;
    if (ready && (selected + seed).length < 6) {
      warnEl.hidden = false;
    } else {
      warnEl.hidden = true;
    }
    if (copyBtn.dataset.done) {
      copyBtn.dataset.done = '';
      copyBtn.textContent = 'Copy';
    }
  }

  sites.forEach(function (btn) {
    btn.addEventListener('click', function () {
      selected = btn.dataset.acro;
      sites.forEach(function (b) {
        b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
      });
      statusEl.textContent = 'Selected: ' + btn.querySelector('.acro').textContent;
      seedEl.focus();
      refresh();
    });
  });

  seedEl.addEventListener('input', refresh);

  revealBtn.addEventListener('click', function () {
    var show = resultEl.type === 'password';
    resultEl.type = show ? 'text' : 'password';
    revealBtn.textContent = show ? 'Hide' : 'Show';
    revealBtn.setAttribute('aria-pressed', String(show));
  });

  copyBtn.addEventListener('click', function () {
    var val = resultEl.value;
    if (!val) return;
    function done() {
      copyBtn.dataset.done = '1';
      copyBtn.textContent = 'Copied';
      setTimeout(function () {
        if (copyBtn.dataset.done) {
          copyBtn.dataset.done = '';
          copyBtn.textContent = 'Copy';
        }
      }, 1500);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(val).then(done, function () {
        resultEl.select();
        document.execCommand('copy');
        done();
      });
    } else {
      resultEl.select();
      document.execCommand('copy');
      done();
    }
  });

  refresh();
})();
