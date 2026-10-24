import { publicUrl } from '~/publicUrl';

import { CHARACTER_IMAGE } from './sources';

// The start screen waits for the photo: 0 until it is in the browser's cache, then 1.
let started = false;
let loaded = false;

export const preloadCharacter = () => {
  if (started) return;
  started = true;
  const image = new Image();
  // Whatever happens, the start screen must not wait on it forever.
  image.onload = image.onerror = () => {
    loaded = true;
  };
  image.src = publicUrl(CHARACTER_IMAGE);
};

export const clipsProgress = () => (loaded ? 1 : 0);
