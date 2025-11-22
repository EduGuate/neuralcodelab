'use client';
import Script from 'next/script';

// Add proper typing for the custom element
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { 'agent-id': string }, HTMLElement>;
        }
    }
}

export default function FloatingWidget() {
    return (
        <div className="fixed bottom-8 right-8 z-50">
            <elevenlabs-convai agent-id="2mKOFs3BwEKoBUfPUTgb"></elevenlabs-convai>
            <Script src="https://elevenlabs.io/convai-widget/index.js" strategy="afterInteractive" />
        </div>
    );
}
