import { Metadata } from 'next';
 import HomePage from'./Home/HomePage';

export const metadata: Metadata = {
  title: 'BEST - Health & Safety Services | Expert Event Safety Solutions',
  description: 'Leading health and safety services company providing safe, compliant, and sustainable event solutions across the UK, UAE, and India. Expert consultation and comprehensive safety management.',
  keywords: 'health safety services, event safety, compliance, UK UAE India, safety consultation, risk management, sustainable events, stand auditing, electrical safety, fire safety',
  
  openGraph: {
    title: 'BEST - Health & Safety Services | Expert Event Safety Solutions',
    description: 'Leading health and safety services company providing safe, compliant, and sustainable event solutions across the UK, UAE, and India. Expert consultation and comprehensive safety management.',
  }
}

export default function Page() {
  return <HomePage />
}