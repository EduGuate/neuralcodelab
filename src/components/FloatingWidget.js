// app/components/FloatingWidget.js
'use client';
import Script from 'next/script';

export default function FloatingWidget() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <elevenlabs-convai agent-id="2mKOFs3BwEKoBUfPUTgb"></elevenlabs-convai>
      <Script src="https://elevenlabs.io/convai-widget/index.js" strategy="afterInteractive" />
    </div>
  );
}