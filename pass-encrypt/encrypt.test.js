/* Regression tests for the legacy Pass Encrypt algorithm.
 * Run: node pass-encrypt/encrypt.test.js
 * Vectors verified against the original C++ implementation.
 */
'use strict';
const { generatePassword } = require('./encrypt.js');

const vectors = [
  // [input, expected] — acronym+seed combos from real usage
  ['fb1234', 'YfvMyr@0616'],
  ['dis9876', 'ySqoLbw@0616'],
  ['msteamsX1', 'cglBhfJgw@0616'],
  ['abcdef', 'RymBlc@0616'],
  ['igABCD', 'RdjQsb@0616'],
  ['ggXYZ12', 'xPmqVfw@0616'],
  ['tas00', 'iuYhw@0616'],
  ['erp2024', 'xAvmBmf@0616'],
  ['kgpmail99', 'iabZfzWom@0616'],
  ['yono12345', 'ssrRbsKxr@0616'],
  // short-string edge cases (uppercase positions are len-6 and len-3)
  ['a', 'm@0616'],        // n=1: no uppercase slot
  ['ab', 'na@0616'],      // n=2: no uppercase slot
  ['abcde', 'qdRaq@0616'],// n=5: only index 2
  ['', ''],               // empty: guarded, no crash (C++ would UB)
];

let failed = 0;
for (const [input, expected] of vectors) {
  const got = generatePassword(input);
  const ok = got === expected;
  if (!ok) failed++;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${JSON.stringify(input)} -> ${JSON.stringify(got)}${ok ? '' : ` (expected ${JSON.stringify(expected)})`}`);
}

// structural invariants on random-ish inputs
const samples = ['fb', 'gitlongseedSeed99', 'YONOprofile007', 'msteams hello', 'a1!@#'];
for (const s of samples) {
  const out = generatePassword(s);
  const body = out.slice(0, -5);
  const okSuffix = out.endsWith('@0616');
  const okLen = body.length === s.length;
  const okAlpha = /^[A-Za-z]*$/.test(body);
  const ok = okSuffix && okLen && okAlpha;
  if (!ok) failed++;
  console.log(`${ok ? 'PASS' : 'FAIL'}  invariant ${JSON.stringify(s)} -> len/suffix/alpha ${okSuffix && okLen && okAlpha}`);
}

if (failed) {
  console.error(`\n${failed} failure(s)`);
  process.exit(1);
} else {
  console.log('\nAll tests passed.');
}
