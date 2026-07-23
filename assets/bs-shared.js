/* ============================================================
   Fundacja Bez Szeptu — wspólny header + nawigacja + stopka
   Edytuj menu/stopkę TYLKO tutaj — zmiana działa na każdej podstronie.
   Wstawianie: umieść na stronie <div id="bs-header"></div> i
   <div id="bs-footer"></div>, a na końcu <script src="assets/bs-shared.js"></script>
   ============================================================ */
(function () {
  // Czy jesteśmy na stronie głównej? (wtedy kotwice bez "index.html")
  var path = location.pathname;
  var isHome = path.endsWith('/') || path.endsWith('/index.html') || path === '' || /\/index\.html$/.test(path);

  // Kotwica do sekcji strony głównej
  function a(anchor) { return (isHome ? '' : 'index.html') + '#' + anchor; }

  /* ---------- MENU (edytuj tutaj) ---------- */
  var menu = [
    { label: 'Co robimy', dropdown: [
      { label: 'Programy', href: 'programy.html', desc: 'Nasze programy i projekty' },
      { label: 'Aktualności', href: a('news'), desc: 'Co się u nas dzieje' },
      { label: 'Kampanie', href: 'kampanie.html', desc: 'Kampanie informacyjne' }
    ]},
    { label: 'Wiedza', dropdown: [
      { label: 'E-learning', href: a('elearning'), desc: 'Kursy online' }
    ]},
    { label: 'Fundacja', dropdown: [
      { label: 'O fundacji', href: a('about'), desc: 'Kim jesteśmy' },
      { label: 'Statut fundacji', href: 'statut.html', desc: 'Dokument statutowy' },
      { label: 'Obszary wsparcia', href: a('areas'), desc: 'Pięć obszarów pomocy' }
    ]},
    { label: 'Kontakt', href: a('footer') }
  ];
  var cta = { label: 'Wesprzyj nas', href: a('support') };

  /* ---------- HEADER ---------- */
  function buildDropdown(items) {
    return '<div class="bs-dropdown">' + items.map(function (it) {
      return '<a href="' + it.href + '">' + it.label +
             (it.desc ? '<small>' + it.desc + '</small>' : '') + '</a>';
    }).join('') + '</div>';
  }

  function buildMenu() {
    var html = menu.map(function (m) {
      if (m.dropdown) {
        return '<div class="bs-nav-item bs-has-dropdown">' +
                 '<button type="button" class="bs-nav-link" aria-haspopup="true">' + m.label +
                   ' <span class="bs-nav-caret">▾</span></button>' +
                 buildDropdown(m.dropdown) +
               '</div>';
      }
      return '<div class="bs-nav-item"><a class="bs-nav-link" href="' + m.href + '">' + m.label + '</a></div>';
    }).join('');
    html += '<a class="bs-btn bs-btn-clay" href="' + cta.href + '" style="margin-left:8px; padding:12px 22px;">' + cta.label + '</a>';
    return html;
  }

  var headerHTML =
    '<div class="bs-topbar">' +
      '<div class="bs-topbar-left">' +
        '<div style="display:flex; align-items:center; gap:10px;">' +
          '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>' +
          '<strong style="font-weight:600;">116 123</strong>' +
          '<span style="opacity:0.7; margin-left:4px;">Telefon zaufania dla dorosłych</span>' +
        '</div>' +
        '<div style="opacity:0.7;">|</div>' +
        '<div style="display:flex; align-items:center; gap:10px;">' +
          '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>' +
          '<span style="opacity:0.7;">Czynne 24/7</span>' +
        '</div>' +
      '</div>' +
      '<div class="bs-topbar-right">' +
        '<a href="' + a('warsztaty') + '" class="bs-blink-btn">✦ Warsztaty „Przerwij ciszę" — zapisz się</a>' +
        '<span style="opacity:0.7; font-size:12px;">W kryzysie?</span>' +
        '<a href="' + a('pomoc') + '" style="color:var(--bs-clay-soft); font-weight:600; border-bottom:1px solid currentColor; padding-bottom:1px;">Pilna pomoc</a>' +
      '</div>' +
    '</div>' +
    '<nav class="bs-nav">' +
      '<a href="index.html" class="bs-logo"><img src="assets/logo.jpg" alt="Fundacja Bez Szeptu"></a>' +
      '<button class="bs-mobile-menu-toggle" aria-label="Menu"><span></span><span></span><span></span></button>' +
      '<div class="bs-nav-menu">' + buildMenu() + '</div>' +
    '</nav>';

  /* ---------- FOOTER ---------- */
  var footerHTML =
    '<footer class="bs-footer" id="footer">' +
      '<div class="bs-footer-grid">' +
        '<div>' +
          '<div style="font-family:var(--font-display); font-size:26px; font-weight:500; margin-bottom:16px; color:var(--bs-cream);"><span style="color:var(--bs-clay);">Bez</span><span>Szeptu</span></div>' +
          '<p style="font-size:14px; line-height:1.6; color:rgba(251,248,243,0.7); max-width:280px; margin-bottom:24px;">Fundacja wspierająca osoby w kryzysie. Pomoc psychologiczna, prawna i mediacyjna. Bezpłatnie i poufnie.</p>' +
          '<div class="bs-footer-social">' +
            '<a href="https://www.facebook.com/people/Fundacja-Bez-Szeptu/61588201358315/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>' +
            '<a href="https://www.instagram.com/fundacja_bez_szeptu/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>' +
          '</div>' +
        '</div>' +
        '<div>' +
          '<div class="bs-footer-col-title">Fundacja</div>' +
          '<div class="bs-footer-links">' +
            '<a href="' + a('about') + '">O nas</a>' +
            '<a href="' + a('areas') + '">Obszary wsparcia</a>' +
            '<a href="programy.html">Programy</a>' +
            '<a href="statut.html">Statut fundacji</a>' +
          '</div>' +
        '</div>' +
        '<div>' +
          '<div class="bs-footer-col-title">Pomoc</div>' +
          '<div class="bs-footer-links">' +
            '<a href="' + a('areas') + '">Obszary wsparcia</a>' +
            '<a href="' + a('support') + '">Wsparcie</a>' +
            '<a href="' + a('elearning') + '">E-learning</a>' +
            '<a href="kampanie.html">Kampanie</a>' +
          '</div>' +
        '</div>' +
        '<div>' +
          '<div class="bs-footer-col-title">Kontakt</div>' +
          '<div class="bs-footer-links">' +
            '<div style="color:rgba(251,248,243,0.8); font-size:15px;">ul. Piwna 8<br>44-100 Gliwice</div>' +
            '<a href="mailto:fundacja@bezszeptu.pl">fundacja@bezszeptu.pl</a>' +
            '<a href="mailto:kontakt@bezszeptu.pl">kontakt@bezszeptu.pl</a>' +
            '<a href="tel:+48600920668">Anna +48 600 920 668</a>' +
            '<a href="tel:+48605057672">Małgorzata +48 605 057 672</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="bs-footer-bottom">' +
        '<div>&copy; 2026 Fundacja Bez Szeptu. Wszystkie prawa zastrzeżone.</div>' +
        '<div class="bs-footer-bottom-links">' +
          '<span>Polityka prywatności</span>' +
          '<span>Regulamin</span>' +
        '</div>' +
      '</div>' +
    '</footer>';

  /* ---------- MOUNT ---------- */
  function mount() {
    var h = document.getElementById('bs-header');
    var f = document.getElementById('bs-footer');
    if (h) h.innerHTML = headerHTML;
    if (f) f.innerHTML = footerHTML;

    // Hamburger
    var toggle = document.querySelector('.bs-mobile-menu-toggle');
    var navMenu = document.querySelector('.bs-nav-menu');
    if (toggle && navMenu) {
      toggle.addEventListener('click', function () {
        toggle.classList.toggle('active');
        navMenu.classList.toggle('active');
      });
    }

    // Mobilny akordeon (rozwijanie grup dotknięciem)
    document.querySelectorAll('.bs-has-dropdown > .bs-nav-link').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          var item = btn.parentElement;
          var wasOpen = item.classList.contains('open');
          document.querySelectorAll('.bs-nav-item.open').forEach(function (o) { o.classList.remove('open'); });
          if (!wasOpen) item.classList.add('open');
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
