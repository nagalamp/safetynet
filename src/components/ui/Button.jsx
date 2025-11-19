'use client';

import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonClasses = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 active:scale-95',
  {
    variants: {
      variant: {
        primary: 'focus:ring-orange-500',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
        outline: 'border-2 bg-transparent hover:bg-opacity-10 focus:ring-orange-500',
      },
      size: {
        small: 'text-sm px-3 py-1.5',
        medium: 'text-base px-4 py-2',
        large: 'text-lg px-6 py-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

const Button = ({
  // Required parameters with defaults
  text = "DOWNLOAD",
  text_font_size = "20",
  text_font_family = "Outfit",
  text_font_weight = "600",
  text_line_height = "26px",
  text_text_align = "left",
  text_color = "#ffffff",
  fill_background_color = "#f05623",
  border_border_radius = "4px",
  
  // Optional parameters (no defaults)
  layout_align_self,
  text_text_transform,
  layout_width,
  padding,
  position,
  margin,
  
  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  children,
  onClick,
  type = "button",
  ...props
}) => {
  // Safe validation for optional parameters
  const hasValidAlignSelf = layout_align_self && typeof layout_align_self === 'string' && layout_align_self?.trim() !== '';
  const hasValidTextTransform = text_text_transform && typeof text_text_transform === 'string' && text_text_transform?.trim() !== '';
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidMargin = margin && typeof margin === 'string' && margin?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidAlignSelf ? `self-${layout_align_self}` : '',
    hasValidTextTransform ? `${text_text_transform}` : '',
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  // Build inline styles for required parameters
  const buttonStyles = {
    fontSize: text_font_size ? `${text_font_size}px` : '20px',
    fontFamily: text_font_family || 'Outfit',
    fontWeight: text_font_weight || '600',
    lineHeight: text_line_height || '26px',
    textAlign: text_text_align || 'center',
    color: text_color || '#ffffff',
    backgroundColor: fill_background_color || '#f05623',
    borderRadius: border_border_radius || '4px',
  };

  // Safe click handler
  const handleClick = (event) => {
    if (disabled) return;
    if (typeof onClick === 'function') {
      onClick(event);
    }
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      style={buttonStyles}
      className={twMerge(
        buttonClasses({ variant, size }),
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    >
      {children || text}
    </button>
  );
};

export default Button;