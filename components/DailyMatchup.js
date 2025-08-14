'use client';

import { useState, useEffect } from 'react';
import { cn, formatNumber } from '../lib/utils';

// Trophy icon component
const Trophy = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20.5C20.78 4 21 4.22 21 4.5S20.78 5 20.5 5H19V8C19 10.21 17.21 12 15 12H14V14.5H16C16.55 14.5 17 14.95 17 15.5S16.55 16.5 16 16.5H8C7.45 16.5 7 16.05 7 15.5S7.45 14.5 8 14.5H10V12H9C6.79 12 5 10.21 5 8V5H3.5C3.22 5 3 4.78 3 4.5S3.22 4 3.5 4H7ZM9 5V10H15V5H9Z"/>
  </svg>
);

export function DailyMatchup({ matchup, className }) {
  const [mounted, setMounted] = useState(false);
  const [formattedDate, setFormattedDate] = useState('');

  const winner = matchup.winner;
  const isTeam1Winner = winner === matchup.team1User.id;
  const isTeam2Winner = winner === matchup.team2User.id;
  const isTie = matchup.team1Steps === matchup.team2Steps;

  useEffect(() => {
    setMounted(true);
    setFormattedDate(new Date(matchup.date).toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    }));
  }, [matchup.date]);

  return (
    <div className={cn(
      'relative rounded-3xl bg-card-80 backdrop-blur-sm border border-border-50 p-6 overflow-hidden',
      className
    )}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric/5 to-purple-400/5"></div>
      <div className="absolute top-4 right-4 opacity-10">
        <span className="text-6xl animate-sparkle">⚡</span>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-xl sm:text-2xl font-black bg-gradient-to-r from-electric to-purple-400 bg-clip-text text-transparent mb-2">
            TODAY'S MATCHUP
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm">
            {mounted ? formattedDate : 'Loading...'}
          </p>
        </div>

        {/* VS Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
          {/* Team 1 User */}
          <div className="flex-1 text-center">
            <div className="relative group">
              {/* Large Team Member Image */}
              <div className={cn(
                'relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 group-hover:scale-105',
                isTeam1Winner && 'ring-4 ring-team-red ring-offset-4 ring-offset-background'
              )}>
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-red-600 to-orange-600"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl sm:text-5xl font-black text-white text-shadow">
                    {matchup.team1User.avatar || matchup.team1User.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                {/* Flame Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-red-500/30 to-transparent animate-battle-pulse"></div>
              </div>
              
              {isTeam1Winner && (
                <div className="absolute -top-2 -right-2 bg-team-red text-team-red-foreground rounded-full p-2 shadow-lg animate-bounce">
                  <Trophy className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              )}
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2">{matchup.team1User.name}</h3>
            <div className="inline-block px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold bg-team-red-light/10 text-team-red border border-team-red/20">
              🔥 Fire Walkers
            </div>
            <div className="mt-3">
              <div className="text-2xl font-bold text-team-red">
                {formatNumber(matchup.team1Steps)}
              </div>
              <div className="text-sm text-muted-foreground font-medium mt-1">
                Steps Today
              </div>
            </div>
          </div>

          {/* VS Badge */}
          <div className="px-4 lg:px-8 order-first lg:order-none">
            <div className="bg-gradient-to-r from-electric to-purple-400 text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center font-black text-xl sm:text-2xl shadow-lg animate-pulse">
              ⚡
            </div>
          </div>

          {/* Team 2 User */}
          <div className="flex-1 text-center">
            <div className="relative group">
              {/* Large Team Member Image */}
              <div className={cn(
                'relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 group-hover:scale-105',
                isTeam2Winner && 'ring-4 ring-team-blue ring-offset-4 ring-offset-background'
              )}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-600"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl sm:text-5xl font-black text-white text-shadow">
                    {matchup.team2User.avatar || matchup.team2User.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                {/* Lightning Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 to-transparent animate-battle-pulse"></div>
              </div>
              
              {isTeam2Winner && (
                <div className="absolute -top-2 -right-2 bg-team-blue text-team-blue-foreground rounded-full p-2 shadow-lg animate-bounce">
                  <Trophy className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              )}
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2">{matchup.team2User.name}</h3>
            <div className="inline-block px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold bg-team-blue-light/10 text-team-blue border border-team-blue/20">
              ⛈️ Storm Striders
            </div>
            <div className="mt-3">
              <div className="text-2xl font-bold text-team-blue">
                {formatNumber(matchup.team2Steps)}
              </div>
              <div className="text-sm text-muted-foreground font-medium mt-1">
                Steps Today
              </div>
            </div>
          </div>
        </div>

        {/* Winner announcement */}
        {winner && !isTie && (
          <div className="text-center mt-8 p-4 rounded-2xl bg-gradient-to-r from-electric/20 to-purple-400/20 border border-electric/30">
            <div className="flex items-center justify-center space-x-2 text-electric font-bold text-lg">
              <Trophy className="w-6 h-6" />
              <span>
                {isTeam1Winner ? matchup.team1User.name : matchup.team2User.name} wins today!
              </span>
            </div>
          </div>
        )}

        {isTie && (
          <div className="text-center mt-8 p-4 rounded-2xl bg-muted/50 border border-muted">
            <div className="text-muted-foreground font-medium">
              It's a tie! Both champions crushed it today 🔥
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
