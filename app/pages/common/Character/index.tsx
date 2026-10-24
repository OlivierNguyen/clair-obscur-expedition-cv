import { useEffect } from 'react';

import { publicUrl } from '~/publicUrl';

import { preloadCharacter } from './clips';
import { CHARACTER_IMAGE, CHARACTER_SIZE, PLACEMENTS, type Shot } from './sources';
import './style.scss';

export type { Shot } from './sources';

// The photo moves and scales to each screen's place; the transition (style.scss) replaces the game's camera moves.
const Character = ({ shot }: { shot: Shot }) => {
  useEffect(() => {
    preloadCharacter();
  }, []);
  const { x, y, size } = PLACEMENTS[shot];
  return (
    <img
      className="Character"
      src={publicUrl(CHARACTER_IMAGE)}
      width={CHARACTER_SIZE}
      height={CHARACTER_SIZE}
      style={{ transform: `translate(${x}px, ${y}px) scale(${size / CHARACTER_SIZE})` }}
      alt=""
      aria-hidden
    />
  );
};

export default Character;
