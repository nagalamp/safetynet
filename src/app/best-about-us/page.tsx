import { Metadata } from 'next';
 import AboutPage from'./AboutPage';

export const metadata: Metadata = {
  title: 'About Us - Expert Team & Corporate Leadership',
  description: 'Meet BEST B4-Global expert team of safety professionals, engineers, and industry leaders. Learn about our 30+ years of experience, corporate governance, qualifications, and commitment to excellence in event safety solutions.',
  keywords: 'about us, expert team, safety professionals, corporate leadership, company ownership, team qualifications, event safety experts, BEST B4-Global leadership, corporate governance',
  
  openGraph: {
    title: 'About Us - Expert Team & Corporate Leadership',
    description: 'Meet BEST B4-Global expert team of safety professionals, engineers, and industry leaders. Learn about our 30+ years of experience, corporate governance, qualifications, and commitment to excellence in event safety solutions.',
  }
}

export default function Page() {
  return <AboutPage />
}