import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'liquid' | 'primary' | 'ghost';
  size?: 'sm' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'liquid', size = 'sm', children, ...props }, ref) => {
    const baseClasses =
      'inline-flex items-center justify-center rounded-full transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 cursor-pointer whitespace-nowrap shrink-0';

    const variantClasses =
      variant === 'liquid'
        ? 'liquid-glass text-foreground hover:scale-[1.03]'
        : variant === 'primary'
          ? 'bg-primary text-primary-foreground font-medium hover:opacity-90'
          : 'text-muted-foreground hover:text-foreground';

    const sizeClasses =
      size === 'lg' ? 'px-14 py-5 text-base' : 'px-6 py-2.5 text-sm';

    return (
      <button
        ref={ref}
        className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`.trim()}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
