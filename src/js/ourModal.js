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

  function onBackdropClick(e) {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      toggleModal();
      document.removeEventListener('keydown', closeModalfromEsc);
    }
  }
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
    document.addEventListener('keydown', closeModalfromEsc);
  }
  function closeModal(e) {
    e.preventDefault();
    toggleModal();
  }
  function closeModalfromEsc(e) {
    if (e.code === 'Escape') {
      refs.backdrop.classList.add('is-hidden');
      document.removeEventListener('keydown', closeModal);
    }
  }
})();
