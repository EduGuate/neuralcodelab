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
    const agentId = process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID || "agent_2001kh5e1shye4g9s9c2cean35k6";

    return (
        <div className="fixed bottom-8 right-8 z-50">
            <elevenlabs-convai agent-id={agentId}></elevenlabs-convai>
            <Script src="https://unpkg.com/@elevenlabs/convai-widget-embed" async strategy="afterInteractive" />
        </div>
    );
}
