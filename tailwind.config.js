module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      // Figma Design Fonts
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'bruno-ace': ['Bruno Ace', 'cursive'],
        'open-sans': ['Open Sans', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      // Animation configurations
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-left': 'fadeInLeft 0.7s ease-out',
        'fade-in-right': 'fadeInRight 0.7s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'bounce-in': 'bounceIn 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'rotate-in': 'rotateIn 0.7s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        rotateIn: {
          '0%': { transform: 'rotate(-360deg) scale(0)', opacity: '0' },
          '100%': { transform: 'rotate(0deg) scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { 
            boxShadow: '0 0 5px rgba(71, 212, 170, 0.5), 0 0 10px rgba(71, 212, 170, 0.3), 0 0 15px rgba(71, 212, 170, 0.2)',
          },
          '100%': { 
            boxShadow: '0 0 10px rgba(71, 212, 170, 0.8), 0 0 20px rgba(71, 212, 170, 0.6), 0 0 30px rgba(71, 212, 170, 0.4)',
          },
        },
      },
      colors: {
        /* Primary Colors */
        primary: {
          background: "var(--primary-background)",
          foreground: "var(--primary-foreground)",
          light: "var(--primary-light)",
          dark: "var(--primary-dark)"
        },
        /* Secondary Colors */
        secondary: {
          background: "var(--secondary-background)",
          foreground: "var(--secondary-foreground)",
          light: "var(--secondary-light)",
          dark: "var(--secondary-dark)"
        },
        /* Accent Colors */
        accent: {
          color: "var(--accent-color)",
          foreground: "var(--accent-foreground)",
          light: "var(--accent-light)",
          dark: "var(--accent-dark)"
        },
        /* Border Colors */
        border: {
          primary: "var(--border-primary)",
          secondary: "var(--border-secondary)",
          light: "var(--border-light)",
          muted: "var(--border-muted)",
          subtle: "var(--border-subtle)"
        },
        /* Text Colors */
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          accent: "var(--text-accent)",
          neutral: "var(--text-neutral)",
          dark: "var(--text-dark)"
        },
        /* Background Colors */
        background: {
          main: "var(--bg-main)",
          card: "var(--bg-card)",
          overlay: "var(--bg-overlay)",
          light: "var(--bg-light)",
          subtle: "var(--bg-subtle)"
        },
        /* Component-specific Colors */
        header: {
          background: "var(--header-bg)",
          text: "var(--header-text)"
        },
        button: {
          background: "var(--button-bg)",
          text: "var(--button-text)"
        },
        footer: {
          background: "var(--footer-bg)",
          border: "var(--footer-border)"
        }
      },
      fontSize: {
        'xs': 'var(--font-size-xs)',
        'sm': 'var(--font-size-sm)',
        'base': 'var(--font-size-base)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
        '4xl': 'var(--font-size-4xl)',
        '5xl': 'var(--font-size-5xl)',
        '6xl': 'var(--font-size-6xl)',
        'hero': 'var(--font-size-hero)'
      },
      fontWeight: {
        'normal': 'var(--font-weight-normal)',
        'medium': 'var(--font-weight-medium)',
        'semibold': 'var(--font-weight-semibold)',
        'bold': 'var(--font-weight-bold)'
      },
      lineHeight: {
        'tight': 'var(--line-height-tight)',
        'normal': 'var(--line-height-normal)',
        'relaxed': 'var(--line-height-relaxed)',
        'loose': 'var(--line-height-loose)',
        'hero': 'var(--line-height-hero)'
      },
      spacing: {
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'base': 'var(--spacing-base)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
        '4xl': 'var(--spacing-4xl)',
        '5xl': 'var(--spacing-5xl)',
        '6xl': 'var(--spacing-6xl)'
      },
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'base': 'var(--radius-base)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        'full': 'var(--radius-full)'
      },
      width: {
        'auto': 'var(--width-auto)',
        'full': 'var(--width-full)',
        'container': 'var(--width-container)'
      },
      height: {
        'auto': 'var(--height-auto)',
        'full': 'var(--height-full)'
      }
    }
  },
  plugins: []
};