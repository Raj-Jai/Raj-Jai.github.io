(() => {
  const toggle = document.querySelector('.nav-toggle');
  const list = document.getElementById('nav-list');
  if (toggle && list) {
    toggle.addEventListener('click', () => {
      const open = list.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    list.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        list.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        list.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const archBtn = document.getElementById('archive-toggle');
  const archBody = document.getElementById('archive-body');
  if (archBtn && archBody) {
    archBtn.addEventListener('click', () => {
      const hidden = archBody.style.display === 'none';
      archBody.style.display = hidden ? '' : 'none';
      archBtn.textContent = hidden ? 'Collapse' : 'Expand';
      archBtn.setAttribute('aria-expanded', String(hidden));
    });
  }
})();
