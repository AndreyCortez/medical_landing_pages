import React, { useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Carousel({ children, loop = true, autoPlay = false, interval = 5000 }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop, align: 'start' });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi || !autoPlay) return;
        const timer = setInterval(() => {
            emblaApi.scrollNext();
        }, interval);
        return () => clearInterval(timer);
    }, [emblaApi, autoPlay, interval]);

    return (
        <div className="relative group px-0 md:px-12">
            <div className="overflow-hidden py-10 px-4 -mx-4" ref={emblaRef}>
                <div className="flex gap-8">
                    {React.Children.map(children, (child) => (
                        <div className="flex-[0_0_100%] sm:flex-[0_0_calc(50%-1rem)] lg:flex-[0_0_calc(33.333333%-1.333333rem)] min-w-0">
                            <div className="h-full">
                                {child}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={scrollPrev}
                className="absolute left-0 lg:-left-4 top-1/2 -translate-y-1/2 bg-brand-light hover:bg-brand-mid text-brand-dark hover:text-brand-light p-4 rounded-full transition-all duration-300 z-10 shadow-xl border border-brand-dark/10 hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 disabled:opacity-0"
                aria-label="Anterior"
            >
                <ChevronLeft size={28} />
            </button>

            <button
                onClick={scrollNext}
                className="absolute right-0 lg:-right-4 top-1/2 -translate-y-1/2 bg-brand-light hover:bg-brand-mid text-brand-dark hover:text-brand-light p-4 rounded-full transition-all duration-300 z-10 shadow-xl border border-brand-dark/10 hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 disabled:opacity-0"
                aria-label="Próximo"
            >
                <ChevronRight size={28} />
            </button>
        </div>
    );
}
