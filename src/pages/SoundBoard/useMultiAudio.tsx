import { useEffect, useState } from 'react';

const useMultiAudio = (urls: string[]) => {
  const [sources] = useState(
    urls.map((url) => {
      return { url, audio: new Audio(url) };
    })
  );

  const [players, setPlayers] = useState(
    urls.map((url) => {
      return {
        url,
        isPlaying: false,
      };
    })
  );

  const toggleAudio = (targetIndex: number) => () => {
    const newPlayers = [...players];
    const currentIndex = players.findIndex(
      (player) => player.isPlaying === true
    );
    if (currentIndex !== -1 && currentIndex !== targetIndex) {
      newPlayers[currentIndex].isPlaying = false;
      newPlayers[targetIndex].isPlaying = false;
    } else if (currentIndex !== -1) newPlayers[targetIndex].isPlaying = false;
    else newPlayers[targetIndex].isPlaying = true;
    setPlayers(newPlayers);
  };

  useEffect(() => {
    sources.forEach((source, index) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      players[index].isPlaying ? source.audio.play() : source.audio.pause();
    });
  }, [sources, players]);

  useEffect(() => {
    sources.forEach((source, index) => {
      source.audio.addEventListener('ended', () => {
        const newPlayers = [...players];
        newPlayers[index].isPlaying = false;
        setPlayers(newPlayers);
      });
    });
    return () => {
      sources.forEach((source, index) => {
        source.audio.removeEventListener('ended', () => {
          const newPlayers = [...players];
          newPlayers[index].isPlaying = false;
          setPlayers(newPlayers);
        });
      });
    };
  }, [players, sources]);

  return [players, toggleAudio];
};

export default useMultiAudio;
