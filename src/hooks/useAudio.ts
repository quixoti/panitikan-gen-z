import { useState, useEffect, useRef, useCallback } from 'react';

export const useAudio = (src: string) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(src);
    audioRef.current = audio;

    const setPlaying = () => setIsPlaying(true);
    const setNotPlaying = () => setIsPlaying(false);

    audio.addEventListener('play', setPlaying);
    audio.addEventListener('pause', setNotPlaying);
    audio.addEventListener('ended', setNotPlaying);

    return () => {
      audio.removeEventListener('play', setPlaying);
      audio.removeEventListener('pause', setNotPlaying);
      audio.removeEventListener('ended', setNotPlaying);
      audio.pause();
      audioRef.current = null;
    };
  }, [src]);

  const toggle = useCallback(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Rewind for "stop" behavior
    } else {
      audioRef.current.play().catch(error => {
        console.error("Audio playback failed:", error);
      });
    }
  }, [isPlaying]);

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, []);

  return { toggle, stop, isPlaying };
};
