import React from 'react';
import { Play, Square, Sparkles, BookOpen } from 'lucide-react';
import type { Chapter } from '../data/chapters';
import { useAudio } from '../hooks/useAudio';

interface ChapterCardProps {
  chapter: Chapter;
  onClick?: () => void;
  isSelected?: boolean;
}

export const ChapterCard: React.FC<ChapterCardProps> = ({ chapter, onClick, isSelected }) => {
  const { toggle, isPlaying } = useAudio(`/audio/${chapter.id}.wav`);

  return (
    <div 
      onClick={onClick}
      style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-primary)' }}
      data-tooltip="I-click para mag-quiz"
      className={`max-w-3xl mx-auto my-8 p-8 rounded-3xl elegant-shadow transition-all duration-500 cursor-pointer border-2 ${
        isSelected ? 'border-black dark:border-white scale-[1.02]' : 'border-transparent hover:scale-[1.01] hover:border-gray-200 dark:hover:border-gray-800'
      }`}
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 style={{ color: 'var(--text-muted)' }} className="font-medium mb-1 tracking-widest uppercase text-xs">
            {chapter.originalTitle}
          </h3>
          <h2 className="text-4xl font-serif font-bold leading-tight">
            {chapter.title}
          </h2>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggle();
          }}
          className={`p-4 rounded-2xl transition-all duration-300 ${
            isPlaying ? 'bg-red-50 text-red-500 scale-95 dark:bg-red-900/20' : 'bg-gray-50 text-gray-900 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700'
          }`}
          data-tooltip="I-play ang audio"
        >
          {isPlaying ? <Square className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current" />}
        </button>
      </div>

      <div style={{ backgroundColor: 'var(--accent-bg)', color: 'var(--text-secondary)' }} className="mb-10 p-6 rounded-2xl border-l-4 border-gray-300 dark:border-gray-700 italic leading-relaxed text-lg">
        <div style={{ color: 'var(--text-muted)' }} className="flex items-center gap-2 mb-3">
          <BookOpen className="w-4 h-4" />
          <span className="text-xs font-bold uppercase tracking-widest">Buod</span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: chapter.summary }} />
      </div>

      <div className="relative p-8 bg-black text-white dark:bg-white dark:text-black rounded-3xl overflow-hidden group transition-colors duration-300">
        <div className="absolute top-0 right-0 p-6 opacity-10 transform translate-x-4 -translate-y-4 transition-transform group-hover:translate-x-0 group-hover:translate-y-0">
          <Sparkles className="w-24 h-24" />
        </div>
        
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 bg-white text-black dark:bg-black dark:text-white text-[10px] font-black uppercase tracking-widest rounded-full">
            Bersyong <i>Gen-Z</i>
          </span>
        </div>
        
        <div className="text-xl font-medium leading-relaxed tracking-tight" dangerouslySetInnerHTML={{ __html: chapter.genZSummary }} />
        
        <div className="mt-6 pt-6 border-t border-white/10 dark:border-black/10 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] opacity-50">
          <span className="flex items-center gap-2">
            <Play className="w-3 h-3" /> Pindutin ang play para sa audio
          </span>
          <span className="flex items-center gap-2">
            I-click ang card para sa quiz <Sparkles className="w-3 h-3" />
          </span>
        </div>
      </div>
    </div>
  );
};
