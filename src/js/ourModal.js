(() => {
  const refs = {
    openModalBtn: document.querySelector('button[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    body: document.querySelector('body'),
    modal: document.querySelector('[data-modal]'),
    backdrop: document.querySelector('.footer_backdrop'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.backdrop.addEventListener('click', onBackdropClick);

  // refs.modalFooter.addEventListener('keydown', onCloseEscape);
  function onBackdropClick(e) {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      refs.modal.classList.toggle('is-hidden');
      refs.body.classList.toggle('no-scroll');
      document.removeEventListener('keydown', closeModal);
    }
  }
  function toggleModal(e) {
    e.preventDefault();

    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
    document.addEventListener('keydown', closeModal);
  }
  function closeModal(e) {
    if (e.code === 'Escape') {
      refs.backdrop.classList.add('is-hidden');
      document.removeEventListener('keydown', closeModal);
    }
  }
})();
