// The character is one still photo, moved and scaled to a place of its own on each screen (the stage is 2510 × 1380).
export type Shot = 'overview' | 'experience' | 'pictos' | 'skills' | 'luminas' | 'skilltree';

// Path of the photo in public/.
export const CHARACTER_IMAGE = 'ui/character/me.webp';
// The photo's side in pixels: placements below are scaled from it.
export const CHARACTER_SIZE = 880;

// Top-left corner and side of the photo on the stage, by screen.
export const PLACEMENTS: Record<Shot, { x: number; y: number; size: number }> = {
  overview: { x: 700, y: 60, size: 940 },
  experience: { x: 1000, y: 80, size: 860 },
  pictos: { x: 1320, y: 0, size: 820 },
  skills: { x: 930, y: 40, size: 860 },
  luminas: { x: 1180, y: 140, size: 760 },
  skilltree: { x: 1250, y: 280, size: 640 }
};

export const SHOTS = Object.keys(PLACEMENTS) as Shot[];
