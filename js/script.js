// ===== 1. MENU MOBILE =====
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  const terbuka = menu.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', terbuka);
});
menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', false);
  });
});

// ===== 2. BAYANGAN HEADER SAAT SCROLL =====
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
});

// ===== 3. FILTER ARMADA =====
const chips = document.querySelectorAll('.chip');
const mobil = document.querySelectorAll('.car');

chips.forEach(chip => {
  chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    const filter = chip.dataset.filter;
    mobil.forEach(m => {
      m.classList.toggle('hide', filter !== 'all' && m.dataset.type !== filter);
    });
  });
});

// ===== 4. FORMULIR -> WHATSAPP =====
const NOMOR_WA = '6281234567890'; // ganti dengan nomor WhatsApp Anda (format 62...)
const form = document.querySelector('.booking');

form.addEventListener('submit', e => {
  e.preventDefault();
  const nama = form.nama.value.trim();
  const layanan = form.layanan.value;
  const tanggal = form.tanggal.value;
  const durasi = form.durasi.value;

  const pesan = `Halo Jelajah Nusa, saya ${nama}. Saya ingin pesan: ${layanan}, mulai ${tanggal}, selama ${durasi} hari.`;
  window.open(`https://wa.me/${NOMOR_WA}?text=${encodeURIComponent(pesan)}`, '_blank');
});

// Tanggal minimal = hari ini
form.tanggal.min = new Date().toISOString().split('T')[0];

// ===== 5. TAHUN FOOTER =====
document.getElementById('year').textContent = new Date().getFullYear();
