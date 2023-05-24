import { GrPlayFill, GrStopFill } from 'react-icons/gr';

import styles from './SoundBoard.module.scss';

export interface Player {
  url: string;
  isPlaying: boolean;
}

export interface SoundButtonProps {
  player: Player;
  toggleAudio: () => void;
  name: string;
}

export default function SoundButton({
  player,
  toggleAudio,
  name,
}: SoundButtonProps) {
  return (
    <button className={styles.sound} onClick={toggleAudio} type="button">
      <p>{name}</p>
      {player.isPlaying ? <GrPlayFill /> : <GrStopFill />}
    </button>
  );
}
