import '../styles/index.css'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata = {
  title: {
    default: 'BEST - Health & Safety Services',
    template: 'BEST - Health & Safety Services | %s',
  },
  description: 'Leading health and safety services company providing safe, compliant, and sustainable event solutions across the UK, UAE, and India. Expert consultation and comprehensive safety management.',
  keywords: 'health safety services, event safety, compliance, UK UAE India, safety consultation, risk management, sustainable events',

  openGraph: {
    type: 'website',
    title: {
      default: 'BEST - Health & Safety Services',
      template: 'BEST - Health & Safety Services | %s',
    },
    description: 'Professional health and safety services for events and businesses. Get expert consultation and compliance solutions across UK, UAE, and India.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fbesthealt4300back.builtwithrocket.new&_be=https%3A%2F%2Fapplication.rocket.new&_v=0.1.10" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.1" /></body>
    </html>
  )
}