import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const storedThemeValue: string | undefined = browser
  ? localStorage.theme
  : undefined;

/**
 * ## theme
 *
 * @name theme
 * @description A Svelte writable store that holds the current theme and updates localStorage when changed.
 * @param {string | undefined} storedThemeValue
 *
 * ### Usage:
 * ```ts
 * import { theme } from '$lib/stores';
 * ```
 */
export const theme = writable(storedThemeValue);
theme.subscribe(value => {
  if (browser) {
    localStorage.theme = value;
  }
});

/**
 * ## prefersReducedMotion
 *
 * @name prefersReducedMotion
 * @description A Svelte readable store that holds the current window prefers-reduced-motion query.
 *
 * ### Usage:
 * ```ts
 * import { prefersReducedMotion } from '$lib/stores';
 * ```
 */
// export const prefersReducedMotion = readable(true, function (set) {
//     // No behavior unless we're in a browser.
//     let destroy = () => {};

//     if (browser) {
//         let mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
//         // Define a function that sets the store to match the media query
//         const setMatches = () => set(mediaQuery.matches);
//         // Call it once now
//         setMatches();
//         // Call it on changes
//         mediaQuery.addEventListener('change', setMatches);
//         // Set the destroy function which will be returned
//         destroy = () => mediaQuery.removeEventListener('change', setMatches);
//     }
//     return destroy;
// });

// let mediaQuery;
// if (browser) mediaQuery =
//   window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// export const userMotionPreference = writable(mediaQuery);

// userMotionPreference.subscribe(value => {
//   if (browser) {
//       localStorage.motion = value;
//   }
// });

/**
 * ## isGreaterThanMediumWidth
 * @name isGreaterThanMediumWidth
 * @description A Svelte readable store that holds the current window '(min-width: 720px)' query.
 *
 * ### Usage:
 * ```ts
 * import { isGreaterThanMediumWidth } from '$lib/stores';
 * ```
 */
// export const isGreaterThanMediumWidth = readable(true, function (set) {
//     // No behavior unless we're in a browser.
//     let destroy = () => {};

//     if (browser) {
//         let mediaQuery = window.matchMedia('(min-width: 720px)');
//         // Define a function that sets the store to match the media query
//         const setMatches = () => set(mediaQuery.matches);
//         // Call it once now
//         setMatches();
//         // Call it on changes
//         mediaQuery.addEventListener('change', setMatches);
//         // Set the destroy function which will be returned
//         destroy = () => mediaQuery.removeEventListener('change', setMatches);
//     }
//     return destroy;
// });
