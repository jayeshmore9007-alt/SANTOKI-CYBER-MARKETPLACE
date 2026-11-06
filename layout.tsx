import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'SANTOKI CYBER MARKETPLACE', description: 'Ethical hacking, cybersecurity and electronics lab gear marketplace.' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
