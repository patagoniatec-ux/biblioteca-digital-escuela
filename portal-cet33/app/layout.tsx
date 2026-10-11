import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'CET Nº33 · Aprender haciendo',description:'Portal institucional: biblioteca, aulas, documentación docente y comunidad.',icons:{icon:'/media/escudo.png'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body>{children}</body></html>}
