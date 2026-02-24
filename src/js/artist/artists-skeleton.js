const SKELETON_SELECTOR = '[data-skeleton="true"]';

function skeletonCardMarkup() {
  return `
    <li class="artist-card artist-card--skeleton" data-skeleton="true">
      <div class="artist-card-img artist-card-img--skeleton sk"></div>

      <div class="artist-card-body">
        <ul class="tag-list" aria-hidden="true">
          <li class="tags tags--skeleton sk"></li>
          <li class="tags tags--skeleton sk"></li>
          <li class="tags tags--skeleton sk"></li>
        </ul>

        <div class="artist-card-name artist-card-name--skeleton sk sk-line sk-w-60"></div>

        <div class="artist-card-desc artist-card-desc--skeleton" aria-hidden="true">
          <div class="sk sk-line sk-w-100"></div>
          <div class="sk sk-line sk-w-90"></div>
        </div>

        <div class="artist-card-link artist-card-link--skeleton sk sk-line sk-w-35" aria-hidden="true"></div>
      </div>
    </li>
  `;
}

export function showArtistsSkeleton(
  listEl,
  { count = 4, mode = 'replace' } = {}
) {
  if (!listEl) return;

  const markup = Array.from({ length: count }, skeletonCardMarkup).join('');

  if (mode === 'append') {
    listEl.insertAdjacentHTML('beforeend', markup);
    return;
  }

  listEl.innerHTML = markup;
}

export function removeArtistsSkeleton(listEl) {
  if (!listEl) return;
  listEl.querySelectorAll(SKELETON_SELECTOR).forEach(el => el.remove());
}
