import refs from '../../utills/refs';

refs.artistList.addEventListener('click', onArtistListClick);
refs.artistModal.addEventListener('click', onArtistModalClick);
refs.artistModal.addEventListener('cancel', onArtistModalCancel);

const ANIMATION_DURATION = 300;

function onArtistListClick(event) {
  const btn = event.target.closest('.js-learn-more-btn');
  if (!btn) return;
  refs.artistModal.classList.remove('closing');
  refs.artistModal.showModal();
}

function onArtistModalClick(event) {
  const isCloseBtn = event.target.closest('.js-modal-btn-close');
  const isBackdrop = event.target === refs.artistModal;

  if (!isCloseBtn && !isBackdrop) return;

  closeModal();
}

function onArtistModalCancel(event) {
  event.preventDefault();
  closeModal();
}

function closeModal() {
  if (refs.artistModal.classList.contains('closing')) return;

  refs.artistModal.classList.add('closing');

  setTimeout(() => {
    refs.artistModal.close();
    refs.artistModal.classList.remove('closing');
  }, ANIMATION_DURATION);
}
