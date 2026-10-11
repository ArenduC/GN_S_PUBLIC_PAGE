import React, { useState } from 'react';
import { BookOpen, CheckCircle, AlertTriangle, Lightbulb, RotateCcw, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';

interface CellState {
  val: number | null;
  isClue: boolean;
  hasError?: boolean;
}

// Initial 4x4 puzzle
// Solution:
// [1, 2, 3, 4]
// [3, 4, 1, 2]
// [2, 1, 4, 3]
// [4, 3, 2, 1]
const initialPuzzle: CellState[][] = [
  [{ val: 1, isClue: true }, { val: null, isClue: false }, { val: 3, isClue: true }, { val: null, isClue: false }],
  [{ val: null, isClue: false }, { val: 4, isClue: true }, { val: null, isClue: false }, { val: 2, isClue: true }],
  [{ val: 2, isClue: true }, { val: null, isClue: false }, { val: null, isClue: false }, { val: 3, isClue: true }],
  [{ val: null, isClue: false }, { val: 3, isClue: true }, { val: 2, isClue: true }, { val: null, isClue: false }],
];

const solution: number[][] = [
  [1, 2, 3, 4],
  [3, 4, 1, 2],
  [2, 1, 4, 3],
  [4, 3, 2, 1],
];

export const RulesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'basics' | 'variants' | 'strategies' | 'interactive'>('basics');
  const [board, setBoard] = useState<CellState[][]>(JSON.parse(JSON.stringify(initialPuzzle)));
  const [selectedCell, setSelectedCell] = useState<[number, number] | null>([0, 1]);
  const [statusMsg, setStatusMsg] = useState<string>('Click a cell, then select a number (1-4) below to practice the rules!');

  // Handle cell click
  const handleCellClick = (r: number, c: number) => {
    setSelectedCell([r, c]);
  };

  // Handle number input
  const handleNumberInput = (num: number | null) => {
    if (!selectedCell) return;
    const [r, c] = selectedCell;
    if (board[r][c].isClue) {
      setStatusMsg('Cannot change locked starting clues!');
      return;
    }

    const nextBoard = JSON.parse(JSON.stringify(board));
    nextBoard[r][c].val = num;

    // Check for conflicts
    validateBoard(nextBoard);
    setBoard(nextBoard);
  };

  const validateBoard = (b: CellState[][]) => {
    let hasConflict = false;
    let isComplete = true;

    // Reset errors
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) {
        b[r][c].hasError = false;
        if (b[r][c].val === null) isComplete = false;
      }
    }

    // Check rows
    for (let r = 0; r < 4; r++) {
      const seen = new Map<number, number[]>();
      for (let c = 0; c < 4; c++) {
        const v = b[r][c].val;
        if (v !== null) {
          if (!seen.has(v)) seen.set(v, []);
          seen.get(v)!.push(c);
        }
      }
      seen.forEach((cols) => {
        if (cols.length > 1) {
          hasConflict = true;
          cols.forEach((col) => {
            b[r][col].hasError = true;
          });
        }
      });
    }

    // Check columns
    for (let c = 0; c < 4; c++) {
      const seen = new Map<number, number[]>();
      for (let r = 0; r < 4; r++) {
        const v = b[r][c].val;
        if (v !== null) {
          if (!seen.has(v)) seen.set(v, []);
          seen.get(v)!.push(r);
        }
      }
      seen.forEach((rows) => {
        if (rows.length > 1) {
          hasConflict = true;
          rows.forEach((row) => {
            b[row][c].hasError = true;
          });
        }
      });
    }

    // Check 2x2 boxes
    for (let boxR = 0; boxR < 4; boxR += 2) {
      for (let boxC = 0; boxC < 4; boxC += 2) {
        const seen = new Map<number, [number, number][]>();
        for (let r = 0; r < 2; r++) {
          for (let c = 0; c < 2; c++) {
            const row = boxR + r;
            const col = boxC + c;
            const v = b[row][col].val;
            if (v !== null) {
              if (!seen.has(v)) seen.set(v, []);
              seen.get(v)!.push([row, col]);
            }
          }
        }
        seen.forEach((coords) => {
          if (coords.length > 1) {
            hasConflict = true;
            coords.forEach(([row, col]) => {
              b[row][col].hasError = true;
            });
          }
        });
      }
    }

    if (hasConflict) {
      setStatusMsg('Duplicate detected! Two identical numbers share the same row, column, or 2x2 box.');
    } else if (isComplete) {
      setStatusMsg('🎉 Puzzle successfully solved! All Sudoku rules satisfied.');
    } else {
      setStatusMsg('Valid placement! Continue filling remaining cells.');
    }
  };

  const handleResetBoard = () => {
    setBoard(JSON.parse(JSON.stringify(initialPuzzle)));
    setSelectedCell([0, 1]);
    setStatusMsg('Board reset to original clues.');
  };

  const handleSolveBoard = () => {
    const solvedBoard: CellState[][] = [];
    for (let r = 0; r < 4; r++) {
      const row: CellState[] = [];
      for (let c = 0; c < 4; c++) {
        row.push({
          val: solution[r][c],
          isClue: initialPuzzle[r][c].isClue,
          hasError: false,
        });
      }
      solvedBoard.push(row);
    }
    setBoard(solvedBoard);
    setStatusMsg('Auto-solved! Notice every row, column, and 2x2 box has unique numbers 1 through 4.');
  };

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/60 border border-rose-500/40 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Comprehensive Guide</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          How to Play Sudoku in Sudora
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
          Master classic 9x9 grids or dive into Sudora's specialized 4x4 Mini and 6x6 formats.
          Here is everything you need to know from the 3 Golden Rules to pro solving strategies.
        </p>
      </div>

      {/* Navigation Pills */}
      <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
        {[
          { id: 'basics', label: '1. The 3 Golden Rules' },
          { id: 'variants', label: '2. 4x4, 6x6 & 9x9 Grids' },
          { id: 'strategies', label: '3. Pro Strategies' },
          { id: 'interactive', label: '4. Interactive Mini Trainer' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === tab.id
                ? 'bg-rose-600 text-white shadow-[0_0_15px_rgba(244,63,94,0.35)]'
                : 'bg-[#151620] text-neutral-400 hover:text-white hover:bg-[#1f202e] border border-neutral-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab 1: The 3 Golden Rules */}
      {activeTab === 'basics' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Rule 1 */}
          <div className="rounded-3xl bg-[#12131a] border border-neutral-800 p-6 flex flex-col justify-between hover:border-rose-500/40 transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 font-bold font-mono mb-4">
                01
              </div>
              <h3 className="text-lg font-bold text-white mb-2">The Row Rule</h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Every horizontal row must contain all numbers without repeating any digit.
              </p>
              <div className="mt-4 p-3 rounded-xl bg-[#181924] border border-neutral-800 font-mono text-xs text-neutral-400 space-y-1">
                <div className="text-rose-400 font-semibold">Row Example (9x9):</div>
                <div className="flex justify-between text-neutral-300 bg-neutral-900/60 p-1.5 rounded border border-neutral-700/50">
                  <span>1</span><span>5</span><span>3</span><span>8</span><span>9</span><span>2</span><span>4</span><span>7</span><span>6</span>
                </div>
                <div className="text-[11px] text-neutral-500 pt-1">✓ No duplicates allowed</div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-neutral-800 text-xs text-rose-400 font-medium">
              Horizontal constraint
            </div>
          </div>

          {/* Rule 2 */}
          <div className="rounded-3xl bg-[#12131a] border border-neutral-800 p-6 flex flex-col justify-between hover:border-rose-500/40 transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 font-bold font-mono mb-4">
                02
              </div>
              <h3 className="text-lg font-bold text-white mb-2">The Column Rule</h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Every vertical column must contain all numbers without repetition from top to bottom.
              </p>
              <div className="mt-4 p-3 rounded-xl bg-[#181924] border border-neutral-800 font-mono text-xs text-neutral-400 space-y-1">
                <div className="text-rose-400 font-semibold">Column Constraint:</div>
                <div className="grid grid-cols-3 gap-2 text-center text-neutral-300 py-1">
                  <span className="bg-neutral-900/60 p-1 rounded border border-neutral-700/50">Col A: 1-9</span>
                  <span className="bg-neutral-900/60 p-1 rounded border border-neutral-700/50">Col B: 1-9</span>
                  <span className="bg-neutral-900/60 p-1 rounded border border-neutral-700/50">Col C: 1-9</span>
                </div>
                <div className="text-[11px] text-neutral-500 pt-1">✓ Each digit appears exactly once</div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-neutral-800 text-xs text-rose-400 font-medium">
              Vertical constraint
            </div>
          </div>

          {/* Rule 3 */}
          <div className="rounded-3xl bg-[#12131a] border border-neutral-800 p-6 flex flex-col justify-between hover:border-rose-500/40 transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 font-bold font-mono mb-4">
                03
              </div>
              <h3 className="text-lg font-bold text-white mb-2">The Subgrid (Box) Rule</h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Each designated subgrid block (2x2 in 4x4, 2x3 in 6x6, or 3x3 in 9x9) must also contain every number.
              </p>
              <div className="mt-4 p-3 rounded-xl bg-[#181924] border border-neutral-800 font-mono text-xs text-neutral-400 space-y-1">
                <div className="text-rose-400 font-semibold">Subgrid Matrix:</div>
                <div className="grid grid-cols-2 gap-1 text-center text-neutral-300 py-1 max-w-[120px] mx-auto">
                  <span className="bg-neutral-900 p-1 rounded border border-neutral-700">1</span>
                  <span className="bg-neutral-900 p-1 rounded border border-neutral-700">4</span>
                  <span className="bg-neutral-900 p-1 rounded border border-neutral-700">3</span>
                  <span className="bg-neutral-900 p-1 rounded border border-neutral-700">2</span>
                </div>
                <div className="text-[11px] text-neutral-500 text-center">✓ 2x2 box holds 1, 2, 3, 4</div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-neutral-800 text-xs text-rose-400 font-medium">
              Subgrid constraint
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Sudora Grid Sizes */}
      {activeTab === 'variants' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 4x4 */}
          <div className="rounded-3xl bg-[#12131a] border border-rose-900/40 p-6">
            <span className="px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-400 text-xs font-semibold font-mono">
              Beginner &amp; Quick Play
            </span>
            <h3 className="text-xl font-bold text-white mt-3 mb-2">4x4 Mini Sudoku</h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Perfect for quick 2-minute sessions, kids, and puzzle warm-ups.
            </p>
            <ul className="mt-4 space-y-2 text-xs text-neutral-400 font-mono">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                Digits: <strong>1, 2, 3, 4</strong>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                Subgrid: <strong>2x2 (4 boxes total)</strong>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                Total cells: <strong>16 cells</strong>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                Featured in Sudora: Auto-gen &amp; Manual
              </li>
            </ul>
          </div>

          {/* 6x6 */}
          <div className="rounded-3xl bg-[#12131a] border border-rose-900/40 p-6">
            <span className="px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-400 text-xs font-semibold font-mono">
              Intermediate Sweet Spot
            </span>
            <h3 className="text-xl font-bold text-white mt-3 mb-2">6x6 Mid Sudoku</h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Provides delightful deductive logic without the time demand of a full 9x9 board.
            </p>
            <ul className="mt-4 space-y-2 text-xs text-neutral-400 font-mono">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                Digits: <strong>1, 2, 3, 4, 5, 6</strong>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                Subgrid: <strong>2x3 (6 boxes total)</strong>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                Total cells: <strong>36 cells</strong>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                Featured in Sudora: Auto-gen &amp; Manual
              </li>
            </ul>
          </div>

          {/* 9x9 */}
          <div className="rounded-3xl bg-[#12131a] border border-rose-900/40 p-6">
            <span className="px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-400 text-xs font-semibold font-mono">
              Classic Masterpiece
            </span>
            <h3 className="text-xl font-bold text-white mt-3 mb-2">9x9 Classic Sudoku</h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              The world-standard tournament board. Deep logical chains, candidate notes, and satisfaction.
            </p>
            <ul className="mt-4 space-y-2 text-xs text-neutral-400 font-mono">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                Digits: <strong>1 through 9</strong>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                Subgrid: <strong>3x3 (9 boxes total)</strong>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                Total cells: <strong>81 cells</strong>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                Featured in Sudora: Easy, Med, Hard, Custom
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Tab 3: Pro Strategies */}
      {activeTab === 'strategies' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-[#12131a] border border-neutral-800 p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400">
                <Lightbulb className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-white">Technique 1: Naked Single</h3>
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed">
              When row, column, and subgrid cross-checking eliminates all candidates except one single number for a cell, that cell is a <strong>Naked Single</strong>. It must immediately be placed.
            </p>
            <div className="mt-3 p-3 rounded-xl bg-[#181924] text-xs text-neutral-400">
              <strong className="text-rose-400">Pro tip:</strong> In Sudora, use the Notes toggle to quickly spot cells with only one candidate remaining.
            </div>
          </div>

          <div className="rounded-3xl bg-[#12131a] border border-neutral-800 p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400">
                <Lightbulb className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-white">Technique 2: Cross-Hatching (Scanning)</h3>
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Look at a specific number (e.g., number 7) and scan along the rows and columns touching a 3x3 block. By drawing mental lines through occupied rows and columns, you instantly isolate the only remaining open spot in that block.
            </p>
            <div className="mt-3 p-3 rounded-xl bg-[#181924] text-xs text-neutral-400">
              <strong className="text-rose-400">Pro tip:</strong> Sudora highlights matching numbers across the board when you tap any filled cell, making cross-hatching effortless.
            </div>
          </div>

          <div className="rounded-3xl bg-[#12131a] border border-neutral-800 p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400">
                <Lightbulb className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-white">Technique 3: Hidden Single</h3>
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Even if a cell has multiple candidate notes, check if a particular digit only has one possible location across that entire row or column. If so, that cell belongs to that digit regardless of other notes!
            </p>
          </div>

          <div className="rounded-3xl bg-[#12131a] border border-neutral-800 p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400">
                <Lightbulb className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-white">Technique 4: Manual Organizer &amp; Duplicate Detection</h3>
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed">
              When entering puzzles from newspapers or books into Sudora's <em>"Create Your Own Sudoku"</em> mode, the organizer validates whether the puzzle has a unique solvable solution and alerts you before you start solving!
            </p>
          </div>
        </div>
      )}

      {/* Tab 4: Interactive Mini Trainer */}
      {activeTab === 'interactive' && (
        <div className="rounded-3xl bg-[#12131a] border border-neutral-800 p-6 sm:p-8 max-w-2xl mx-auto shadow-2xl">
          <div className="text-center mb-6">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-300 uppercase tracking-wider font-mono">
              Live Web Simulator
            </span>
            <h3 className="text-2xl font-bold text-white mt-2">Interactive 4x4 Mini Board</h3>
            <p className="text-xs text-neutral-400 mt-1">
              Select a cell, enter numbers 1 to 4, and see real-time rule enforcement.
            </p>
          </div>

          {/* Status Alert */}
          <div className="mb-5 p-3 rounded-xl bg-[#191a26] border border-neutral-800 text-xs sm:text-sm text-center font-mono">
            <span className={statusMsg.includes('Duplicate') ? 'text-rose-400 font-semibold' : statusMsg.includes('solved') ? 'text-emerald-400 font-bold' : 'text-neutral-300'}>
              {statusMsg}
            </span>
          </div>

          {/* 4x4 Interactive Grid */}
          <div className="max-w-[280px] sm:max-w-[320px] mx-auto bg-neutral-950 p-3 rounded-2xl border-2 border-rose-900/60 shadow-[0_0_25px_rgba(244,63,94,0.2)]">
            <div className="grid grid-cols-4 gap-1.5 aspect-square">
              {board.map((row, r) =>
                row.map((cell, c) => {
                  const isSelected = selectedCell?.[0] === r && selectedCell?.[1] === c;
                  const isRightEdge = c === 1;
                  const isBottomEdge = r === 1;

                  return (
                    <button
                      key={`${r}-${c}`}
                      onClick={() => handleCellClick(r, c)}
                      className={`relative rounded-xl font-mono text-xl sm:text-2xl font-bold flex items-center justify-center transition-all cursor-pointer ${
                        cell.hasError
                          ? 'bg-rose-950/80 border-2 border-rose-500 text-rose-300 shadow-[0_0_10px_rgba(244,63,94,0.5)]'
                          : isSelected
                          ? 'bg-[#25151c] border-2 border-rose-500 text-white shadow-[0_0_15px_rgba(244,63,94,0.35)]'
                          : cell.isClue
                          ? 'bg-[#181924] border border-neutral-800 text-rose-400'
                          : cell.val
                          ? 'bg-[#1a1c29] border border-neutral-700 text-white'
                          : 'bg-[#12131c] border border-neutral-800/80 hover:bg-[#1c1e2b] text-neutral-500'
                      } ${isRightEdge ? 'mr-1' : ''} ${isBottomEdge ? 'mb-1' : ''}`}
                    >
                      {cell.val !== null ? cell.val : ''}
                      {cell.isClue && (
                        <span className="absolute top-1 right-1 w-1 h-1 bg-rose-500 rounded-full" />
                      )}
                    </button>
                  );
                })
              )}
            </div>
          </div>

          {/* Number Pad for entering digits */}
          <div className="mt-6 flex flex-col items-center gap-3">
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4].map((num) => (
                <button
                  key={num}
                  onClick={() => handleNumberInput(num)}
                  className="w-12 h-12 rounded-xl bg-[#1c1d2b] border border-rose-900/50 hover:border-rose-500 hover:bg-rose-950/60 text-white text-lg font-bold font-mono transition-all cursor-pointer shadow-md active:scale-95"
                >
                  {num}
                </button>
              ))}
              <button
                onClick={() => handleNumberInput(null)}
                className="px-3 h-12 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-600 text-neutral-400 text-xs font-mono font-medium transition-all cursor-pointer"
              >
                Clear
              </button>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-3 mt-2">
              <button
                onClick={handleResetBoard}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white text-xs font-mono transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset Clues
              </button>
              <button
                onClick={handleSolveBoard}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-950/40 hover:bg-rose-900/40 border border-rose-500/40 text-rose-300 text-xs font-mono transition-colors cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Auto Solve
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
