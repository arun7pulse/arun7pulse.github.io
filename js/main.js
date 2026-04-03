/* ── Tab switching ──────────────────────────────────────────── */
function showTab(id, btn) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-tabs button').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
  if (btn) btn.classList.add('active');
  // close mobile menu
  document.getElementById('navTabs').classList.remove('open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMenu() {
  document.getElementById('navTabs').classList.toggle('open');
}
