import { Metadata } from 'next';
import BestContactPage from './BestContactPage';

export const metadata: Metadata = {
  title: 'BEST - Contact | Professional Health & Safety Consultation Services',
  description: 'Contact BEST health and safety experts across UK, UAE, and India. Get professional consultation, emergency support, and comprehensive safety services for your events and projects.',
  keywords: 'contact BEST, health safety consultation, UK UAE India offices, emergency contact, safety services inquiry, professional consultation booking',
  
  openGraph: {
    title: 'BEST - Contact | Professional Health & Safety Consultation Services',
    description: 'Contact BEST health and safety experts across UK, UAE, and India. Get professional consultation, emergency support, and comprehensive safety services for your events and projects.',
  }
}

export default function Page() {
  return <BestContactPage />
}