import styles from './SoundBoard.module.scss';
import SoundButton, { Player } from './SoundButton';
import useMultiAudio from './useMultiAudio';

const sounds = [
  { id: '1', name: 'applause', src: 'src/assets/sounds/applause.mp3' },
  { id: '2', name: 'boo', src: 'src/assets/sounds/boo.mp3' },
  { id: '3', name: 'gasp', src: 'src/assets/sounds/gasp.mp3' },
  { id: '4', name: 'tada', src: 'src/assets/sounds/tada.mp3' },
  { id: '5', name: 'victory', src: 'src/assets/sounds/victory.mp3' },
  { id: '6', name: 'wrong', src: 'src/assets/sounds/wrong.mp3' },
];

export default function SoundBoard() {
  const soundsSrc: string[] = [];
  sounds.map((sound) => soundsSrc.push(sound.src));
  const [players, toggleAudio] = useMultiAudio(soundsSrc);

  return (
    <div className={styles.container}>
      {Array.isArray(players) &&
        typeof toggleAudio === 'function' &&
        players.map((player: Player, index: number) => (
          <SoundButton
            player={player}
            toggleAudio={toggleAudio(index)}
            key={sounds[index].id}
            name={sounds[index].name}
          />
        ))}
    </div>
  );
}
