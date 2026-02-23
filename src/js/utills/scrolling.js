import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbars, SizeObserverPlugin } from 'overlayscrollbars';

// const osBody = OverlayScrollbars(document.body, {
//   scrollbars: {
//     autoHide: 'scroll',
//     autoHideDelay: 600,
//     dragScroll: true,
//   },
//   plugins: {
//     SizeObserverPlugin: true,
//   },
// });

export function lockBodyScroll() {
  osBody.options({
    overflow: { x: 'hidden', y: 'hidden' },
  });
}

export function unlockBodyScroll() {
  osBody.options({
    overflow: { x: 'hidden', y: 'scroll' },
  });
}
export function initScroll(el) {
  if (!el) return null;

  return OverlayScrollbars(el, {
    scrollbars: {
      autoHide: 'scroll',
      autoHideDelay: 300,
      dragScroll: true,
    },
    plugins: {
      SizeObserverPlugin: true,
    },
  });
}

initScroll(document.body);
