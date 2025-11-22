import React, { useState } from 'react';

interface SimpleCarouselProps {
    items: React.ReactNode[];
}

const SimpleCarousel: React.FC<SimpleCarouselProps> = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    return (
        <div className="relative w-full overflow-hidden rounded-xl my-12">
            <div className="relative h-64">
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        className="absolute top-0 w-full h-full transition-all duration-500 transform"
                        style={{
                            opacity: idx === currentIndex ? 1 : 0,
                            zIndex: idx === currentIndex ? 10 : 0,
                            transform: `translateX(${(idx - currentIndex) * 100}%)`
                        }}
                    >
                        {item}
                    </div>
                ))}
            </div>

            <button
                onClick={prev}
                className="absolute top-1/2 left-4 z-20 w-10 h-10 rounded-full bg-black/30 text-white flex items-center justify-center transform -translate-y-1/2 hover:bg-black/50 transition-all"
            >
                ←
            </button>

            <button
                onClick={next}
                className="absolute top-1/2 right-4 z-20 w-10 h-10 rounded-full bg-black/30 text-white flex items-center justify-center transform -translate-y-1/2 hover:bg-black/50 transition-all"
            >
                →
            </button>

            <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center space-x-2">
                {items.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentIndex ? 'bg-white' : 'bg-white/40'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default SimpleCarousel;
