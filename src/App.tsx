import React, { useState, useEffect } from 'react';
import { chapters } from './data/chapters';
import type { Chapter } from './data/chapters';
import { ChapterCard } from './components/ChapterCard';
import { BookMarked, MessageSquareText, Sparkles, Languages, X, Trophy, CheckCircle2, XCircle, Moon, Sun } from 'lucide-react';
import questionsData from './data/question.json';

interface Question {
  Kabanata: number;
  Question: string;
  Choices: Record<string, string>;
  Answer: string;
}

const App: React.FC = () => {
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Global Tooltip Logic
  useEffect(() => {
    const tooltip = document.createElement('div');
    tooltip.id = 'custom-tooltip';
    document.body.appendChild(tooltip);

    const handleMouseMove = (e: MouseEvent) => {
      if (selectedChapter) {
        tooltip.classList.remove('visible');
        return;
      }

      const target = e.target as HTMLElement;
      const tooltipText = target.closest('[data-tooltip]')?.getAttribute('data-tooltip');

      if (tooltipText) {
        tooltip.innerHTML = tooltipText;
        tooltip.style.left = `${e.clientX}px`;
        tooltip.style.top = `${e.clientY}px`;
        tooltip.classList.add('visible');
      } else {
        tooltip.classList.remove('visible');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeChild(tooltip);
    };
  }, [selectedChapter]);

  const questions = questionsData as Question[];

  const handleAnswer = (chapterId: number, answer: string) => {
    setUserAnswers(prev => ({
      ...prev,
      [chapterId]: answer
    }));
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach(q => {
      if (userAnswers[q.Kabanata] === q.Answer) {
        score += 10;
      }
    });
    return score;
  };

  const totalPossibleScore = questions.length * 10;

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-primary)' }}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setSelectedChapter(null)}>
            <div className="bg-black dark:bg-white text-white dark:text-black p-2 rounded-xl transition-colors">
              <BookMarked className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight leading-none text-black dark:text-white transition-colors">EL FILI</h1>
              <p className="text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-[0.2em] mt-1">EDISYONG <i>GEN-Z</i></p>
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-8">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:scale-110 transition-all"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                KABANATA 1-10
              </a>
            </div>

            <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full transition-colors shadow-sm">
              <Trophy className="w-4 h-4 text-yellow-400" />
              <span className="text-[10px] font-black uppercase tracking-widest">
                Puntos: {calculateScore()} / {totalPossibleScore}
              </span>
            </div>

            <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-full border border-gray-100 dark:border-gray-800 transition-colors">
              <Languages className="w-4 h-4" />
              <span className="text-[10px] font-black uppercase tracking-widest">WIKANG FILIPINO</span>
            </div>
          </div>
        </div>
      </header>

      {!selectedChapter ? (
        <>
          {/* Hero Section */}
          <section className="pt-24 pb-12 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1 bg-black dark:bg-white text-white dark:text-black text-[10px] font-black rounded-full uppercase tracking-widest mb-6 transition-colors">
                <Sparkles className="w-3 h-3 fill-current" />
                ANG PINAKAMALUPIT NA RECAP
              </div>
              <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-[0.9]">
                El Filibusterismo
              </h1>
              <p style={{ color: 'var(--text-secondary)' }} className="text-xl md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto">
                Ang kuwento ni Ibarra at ang kanyang pagbabalik bilang Simoun. Kabanata 1 hanggang 10, ginawang <i>modern</i> para sa bagong henerasyon.
              </p>

              <div className="mt-12 flex flex-wrap justify-center gap-4">
                <div style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)' }} className="flex items-center gap-2 px-6 py-3 border rounded-2xl elegant-shadow text-sm font-bold">
                  <MessageSquareText className="w-5 h-5" />
                  GEN-Z
                </div>
                <div style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)' }} className="flex items-center gap-2 px-6 py-3 border rounded-2xl elegant-shadow text-sm font-bold">
                  <Languages className="w-5 h-5" />
                  MAY AUDIO RECORDING
                </div>
              </div>
            </div>
          </section>

          {/* Chapters Content */}
          <main className="pb-32 px-6">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {chapters.map((chapter) => (
                <div key={chapter.id} className="relative">
                  {userAnswers[chapter.id] && (
                    <div className="absolute top-4 right-4 z-10">
                      {userAnswers[chapter.id] === questions.find(q => q.Kabanata === chapter.id)?.Answer ? (
                        <div className="bg-green-500 text-white p-1 rounded-full shadow-lg">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                      ) : (
                        <div className="bg-red-500 text-white p-1 rounded-full shadow-lg">
                          <XCircle className="w-5 h-5" />
                        </div>
                      )}
                    </div>
                  )}
                  <ChapterCard
                    chapter={chapter}
                    onClick={() => setSelectedChapter(chapter)}
                  />
                </div>
              ))}
            </div>

            {/* Final Score Card */}
            <div className="max-w-3xl mx-auto mt-20 p-12 rounded-[40px] bg-black dark:bg-gray-900 text-white text-center shadow-2xl overflow-hidden relative group transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-50"></div>
              <div className="relative z-10">
                <Trophy className="w-20 h-20 text-yellow-400 mx-auto mb-6 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
                <h2 className="text-4xl font-serif font-bold mb-4">Tapos na ang <i>Assessment</i>!</h2>
                <p className="text-gray-400 dark:text-gray-500 text-lg mb-8 uppercase tracking-[0.2em] font-black">Puntos</p>
                <div className="text-8xl font-black mb-8 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600">
                  {calculateScore()} <span className="text-3xl text-gray-500">/ {totalPossibleScore}</span>
                </div>
                <p className="text-gray-400 dark:text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
                  {calculateScore() === totalPossibleScore 
                    ? <>{<i>Absolute Legend!</i>} Master na master mo na ang {<i>lore</i>} ng El Fili gaya ng isang tunay na {<i>Rizalista Gen-Z</i>}.</> 
                    : <>{<i>Keep on grinding</i>} lang! Balikan ang mga {<i>summaries</i>} para maabot ang {<i>Ultimate Lore Master status</i>}.</>}
                </p>
              </div>
            </div>          </main>
        </>
      ) : (
        <main style={{ backgroundColor: 'var(--bg-color)' }} className="fixed inset-0 top-20 z-40 overflow-y-auto transition-colors">
          <div className="max-w-[1400px] mx-auto min-h-full flex flex-col md:flex-row">
            {/* Q&A Side */}
            <div style={{  }} className="w-full md:w-1/2 p-8 md:p-12 flex flex-col items-center justify-center transition-colors">
              <div className="w-full max-w-lg">
                <div className="mb-8">
                  <span className="inline-block px-3 py-1 bg-black dark:bg-white text-white dark:text-black text-[10px] font-black uppercase tracking-widest rounded-full mb-4 transition-colors">
                    Maikling Pagsusulit
                  </span>
                  <h3 className="text-3xl font-serif font-bold leading-tight">
                    {questions.find(q => q.Kabanata === selectedChapter.id)?.Question}
                  </h3>
                </div>

                <div className="space-y-4">
                  {Object.entries(questions.find(q => q.Kabanata === selectedChapter.id)?.Choices || {}).map(([key, value]) => {
                    const isSelected = userAnswers[selectedChapter.id] === key;
                    const isCorrect = questions.find(q => q.Kabanata === selectedChapter.id)?.Answer === key;
                    const hasAnswered = !!userAnswers[selectedChapter.id];

                    let buttonClass = "w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 text-lg font-medium ";
                    let style: React.CSSProperties = { backgroundColor: 'var(--card-bg)', color: 'var(--text-primary)', borderColor: 'transparent' };

                    if (!hasAnswered) {
                      // Normal state
                    } else if (isSelected) {
                      if (isCorrect) {
                        style.backgroundColor = '#22c55e';
                        style.borderColor = '#22c55e';
                        style.color = 'white';
                      } else {
                        style.backgroundColor = '#ef4444';
                        style.borderColor = '#ef4444';
                        style.color = 'white';
                      }
                    } else if (isCorrect && hasAnswered) {
                      style.backgroundColor = 'rgba(34, 197, 94, 0.1)';
                      style.borderColor = '#22c55e';
                      style.color = '#22c55e';
                    } else {
                      style.opacity = '0.5';
                    }

                    return (
                      <button
                        key={key}
                        disabled={hasAnswered}
                        onClick={() => handleAnswer(selectedChapter.id, key)}
                        style={style}
                        className={buttonClass + (hasAnswered ? "" : "hover:border-black dark:hover:border-white hover:scale-[1.02] elegant-shadow")}
                      >
                        <div className="flex items-center gap-4">
                          <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-black ${isSelected ? "bg-white/20" : "bg-gray-100 dark:bg-gray-800 text-gray-400"
                            }`}>
                            {key}
                          </span>
                          {value}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {userAnswers[selectedChapter.id] && (
                  <div className={`mt-8 p-6 rounded-2xl border flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500 transition-colors ${userAnswers[selectedChapter.id] === questions.find(q => q.Kabanata === selectedChapter.id)?.Answer
                      ? "bg-green-900 text-white border-green-800 dark:bg-green-100 dark:text-green-900 dark:border-green-200"
                      : "bg-red-50 dark:bg-red-900/20 border-red-100 dark:border-red-900/30 text-red-700 dark:text-red-400"
                    }`}>
                    {userAnswers[selectedChapter.id] === questions.find(q => q.Kabanata === selectedChapter.id)?.Answer ? (
                      <>
                        <CheckCircle2 className="w-6 h-6" />
                        <span className="font-bold uppercase tracking-wider text-xs"><i>Tumpak!</i> Gawan ng rebulto iyan.</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-6 h-6" />
                        <span className="font-bold uppercase tracking-wider text-xs"><i>Aray mo sah</i>...</span>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div style={{ backgroundColor: 'var(--bg-color)' }} className="w-full md:w-1/2 p-8 md:p-12 relative transition-colors">
              <div className="absolute top-8 right-8 flex items-center">
                <div className="close-hint hidden md:flex">
                  <span>I-click ito para bumalik sa listahan</span>
                  <span className="close-hint-arrow">➔</span>
                </div>
                <button 
                  onClick={() => setSelectedChapter(null)}
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all z-10"
                  data-tooltip="Bumalik sa listahan"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="max-w-2xl mx-auto">                <ChapterCard
                  chapter={selectedChapter}
                  isSelected={true}
                />
              </div>
            </div>
          </div>
        </main>
      )}

      {/* Footer */}
      {!selectedChapter && (
        <footer style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)' }} className="py-12 border-t transition-colors">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.3em]">
              Para sa kinabukasan ng bayan
            </p>
            <p className="mt-4 text-xs text-gray-300 dark:text-gray-700">
              &copy; 2026 El Fili Proyektong <i>Gen-Z</i>. <i>Nakalaan ang lahat ng karapatan</i>.
            </p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default App;
