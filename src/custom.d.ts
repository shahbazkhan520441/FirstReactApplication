// custom.d.ts or a similar name
declare module 'react-dom/client' {
    import { ReactNode } from 'react';
    export function createRoot(container: HTMLElement): any;
    // You can add more exports if needed based on your usage
  }
  