import { ArrowRight } from 'lucide-react';

export default function Card({ image, title, description, icon: Icon, ctaLabel, onClick, onCtaClick, ctaPrimary, ctaIcon: CtaIcon }) {
    return (
        <article
            onClick={onClick}
            className="bg-brand-light rounded-3xl overflow-hidden shadow-lg flex flex-col cursor-pointer hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group h-full h-full"
        >
            <div className="aspect-[4/3] overflow-hidden relative bg-brand-light">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
            </div>

            <div className="p-8 flex flex-col flex-1 relative bg-brand-light">
                {Icon && (
                    <div className="w-14 h-14 rounded-full bg-brand-mid flex items-center justify-center text-brand-light mb-6 shadow-xl absolute -top-7 right-8">
                        <Icon size={24} />
                    </div>
                )}
                <h3 className="font-heading text-2xl text-brand-dark mb-4 font-bold pr-16 mt-2">
                    {title}
                </h3>
                <p className="text-brand-dark/80 text-base leading-relaxed mb-8 flex-1">
                    {description}
                </p>
                <div className="mt-auto">
                    {onCtaClick ? (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onCtaClick(e);
                            }}
                            className={`font-bold text-sm flex items-center justify-center gap-2 uppercase tracking-wide py-4 rounded-xl w-full transition-all shadow-md hover:shadow-lg ${ctaPrimary
                                    ? 'bg-[#25D366] text-white hover:bg-[#20bd5a]'
                                    : 'bg-brand-mid text-brand-light hover:bg-brand-dark'
                                }`}
                        >
                            {CtaIcon && <CtaIcon size={20} className={ctaPrimary ? "text-white" : "text-brand-light"} />}
                            {ctaLabel || 'Saiba Mais'}
                        </button>
                    ) : (
                        <span className="inline-flex items-center justify-between w-full text-base font-bold text-brand-mid group-hover:text-brand-dark transition-colors uppercase tracking-wide pt-2">
                            {ctaLabel || 'Ler Artigo'} <ArrowRight size={20} />
                        </span>
                    )}
                </div>
            </div>
        </article>
    );
}
