import React from 'react';

type BentoBoxProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  id?: string;
};

export function BentoBox({ children, className = '', onClick, id }: BentoBoxProps) {
  return (
    <div 
      id={id}
      onClick={onClick}
      className={`bg-base-200 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow ${onClick ? 'hover:cursor-pointer' : ''} ${className}`}
    >
      {children}
    </div>
  );
}