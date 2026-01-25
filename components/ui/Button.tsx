import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold tracking-tight transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95";
  
  const variants = {
    // Liquid Mercury (Dark) / Obsidian (Light)
    primary: `
      bg-black text-white dark:bg-white dark:text-black 
      border border-transparent 
      shadow-[0_4px_14px_0_rgba(0,0,0,0.39)] dark:shadow-[0_0_20px_rgba(255,255,255,0.3)]
      hover:shadow-[0_6px_20px_rgba(0,0,0,0.23)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]
      hover:bg-gray-800 dark:hover:bg-gray-100
      hover:-translate-y-0.5
    `,
    // Frosted Glass
    secondary: `
      bg-white/10 dark:bg-white/5 
      backdrop-blur-md 
      text-gray-900 dark:text-white 
      border border-black/10 dark:border-white/10
      hover:bg-black/5 dark:hover:bg-white/10
      hover:border-black/20 dark:hover:border-white/30
      shadow-sm
    `,
    // Clean Outline
    outline: `
      bg-transparent 
      text-gray-900 dark:text-white 
      border border-gray-300 dark:border-white/20 
      hover:border-gray-900 dark:hover:border-white 
      hover:bg-gray-50 dark:hover:bg-white/5
    `,
    // Ghost
    ghost: `
      bg-transparent 
      text-gray-600 dark:text-gray-400 
      hover:text-black dark:hover:text-white 
      hover:bg-black/5 dark:hover:bg-white/5
    `,
  };

  const sizes = {
    sm: "text-xs px-4 py-2",
    md: "text-sm px-6 py-2.5",
    lg: "text-base px-8 py-3.5",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};