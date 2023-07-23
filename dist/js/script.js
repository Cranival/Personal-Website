// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#to-top');

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Klik di luar hamburger
window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

// input contact
const scriptURL = 'https://script.google.com/macros/s/AKfycbwk4_bFiBj6V9fX31aFkccSN8oFUOKF0EhqRNTYCLkhfqE96-4Y-VtrTiN-9JXa8XMS/exec'
const form = document.forms['form-contact']
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener('submit', e => {
  e.preventDefault()
    //ketika tombil kirim diklik
    //tampilkan tombil loading, hilangkan tombil kirim
    btnLoading.classList.toggle("hidden");
    btnKirim.classList.toggle("hidden");
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      //tampilkan tombol kirim, hilangkan tombol loading
      btnLoading.classList.toggle("hidden");
      btnKirim.classList.toggle("hidden");
      //tampilkan alert
      myAlert.classList.toggle("hidden");
      //reset formnya
      form.reset();
      console.log('Success!', response);
    })
    .catch(error => console.error('Error!', error.message))
})
// akhir input contact


