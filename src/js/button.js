const btn = document.querySelector('.arrow');

function magic() {
  if (window.pageYOffset > 600) {
    btn.style.opacity = '1';
  } else {
    btn.style.opacity = '0';
  }
}

btn.onclick = function () {
  window.scrollTo(0, 0);
};
window.onscroll = magic;
