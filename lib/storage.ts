import { env } from 'cloudflare:workers';
export function database(){if(!env.DB)throw new Error('Biblioteca no disponible');return env.DB;}
export function bucket(){if(!env.BUCKET)throw new Error('Archivos no disponibles');return env.BUCKET;}
