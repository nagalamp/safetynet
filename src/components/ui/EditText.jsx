'use client';

import React, { useState } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const inputClasses = cva(
  'transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default: 'focus:ring-blue-500',
        error: 'border-red-500 focus:ring-red-500',
        success: 'border-green-500 focus:ring-green-500',
      },
      size: {
        small: 'text-sm px-2 py-1',
        medium: 'text-base px-3 py-2',
        large: 'text-lg px-4 py-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);

const EditText = ({
  // Required parameters with defaults
  placeholder = "Inquiry Type*",
  text_font_size = "16",
  text_font_family = "Outfit",
  text_font_weight = "400",
  text_line_height = "21px",
  text_text_align = "left",
  text_color = "#ffffff7f",
  border_border = "1 solid #ffffff4c",
  border_border_radius = "4px",
  
  // Optional parameters (no defaults)
  layout_width,
  padding,
  position,
  
  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  value,
  onChange,
  onFocus,
  onBlur,
  type = "text",
  name,
  id,
  required = false,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Parse border string
  const parseBorder = (borderStr) => {
    if (!borderStr) return {};
    const parts = borderStr?.split(' ');
    if (parts?.length >= 3) {
      return {
        borderWidth: parts?.[0] + 'px',
        borderStyle: parts?.[1],
        borderColor: parts?.[2],
      };
    }
    return {};
  };

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : 'w-full',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  // Build inline styles for required parameters
  const borderStyles = parseBorder(border_border);
  const inputStyles = {
    fontSize: text_font_size ? `${text_font_size}px` : '16px',
    fontFamily: text_font_family || 'Outfit',
    fontWeight: text_font_weight || '400',
    lineHeight: text_line_height || '21px',
    textAlign: text_text_align || 'left',
    color: text_color || '#ffffff7f',
    borderRadius: border_border_radius || '4px',
    backgroundColor: 'transparent',
    ...borderStyles,
  };

  // Handle focus events
  const handleFocus = (event) => {
    setIsFocused(true);
    if (typeof onFocus === 'function') {
      onFocus(event);
    }
  };

  const handleBlur = (event) => {
    setIsFocused(false);
    if (typeof onBlur === 'function') {
      onBlur(event);
    }
  };

  // Handle change events
  const handleChange = (event) => {
    if (typeof onChange === 'function') {
      onChange(event);
    }
  };

  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      required={required}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      style={inputStyles}
      className={twMerge(
        inputClasses({ variant, size }),
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      aria-required={required}
      {...props}
    />
  );
};

export default EditText;