import { FaGoogle, FaFacebookF, FaStar } from 'react-icons/fa';
import { SiYelp } from 'react-icons/si'; // Optional: for Yelp icon if needed, or use a custom element
import Navbar from '../Components/ui/navbar';
import Footer from '../Components/ui/footer';
import FeaturedReview from '../Components/ui/featured-review';

const testimonialsData = [
    {
        id: 1,
        name: 'JULIA MOORE',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
        text: '"Vestibulum vel tincidunt tincidunt ut nullam commodo faucibus velit viverra lobortis sed phasellus parturient ullamcorper non at libero bibendum hac lectus ullamcorper rhoncus commodo."',
    },
    {
        id: 2,
        name: 'KIM HANA',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        text: '"Magna pellentesque mi, nunc proin donec tempor eu consequat tortor etiam pharetra cras id pretium maecenas aliquet ultrices odio integer laoreet porttitor ornare interdum eget nunc gravida arcu aliquam integer non."',
    },
    {
        id: 3,
        name: 'ERICK DOE',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
        text: '"Magna pellentesque mi, nunc proin donec tempor eu consequat tortor etiam pharetra cras id pretium maecenas aliquet ultrices odio integer laoreet porttitor ornare interdum eget nunc gravida arcu aliquam integer non."',
    },
    {
        id: 4,
        name: 'MARIA EVE',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
        text: '"Vestibulum vel tincidunt tincidunt ut nullam commodo faucibus velit viverra lobortis sed phasellus parturient ullamcorper non at libero bibendum hac lectus ullamcorper rhoncus commodo."',
    },
    {
        id: 5,
        name: 'JULIA ROBERTSON',
        image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80',
        text: '"Vestibulum vel tincidunt tincidunt ut nullam commodo faucibus velit viverra lobortis sed phasellus parturient ullamcorper non at libero bibendum hac lectus ullamcorper rhoncus commodo."',
    },
    {
        id: 6,
        name: 'DONNY CHAN',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
        text: '"Magna pellentesque mi, nunc proin donec tempor eu consequat tortor etiam pharetra cras id pretium maecenas aliquet ultrices odio integer laoreet porttitor ornare interdum eget nunc gravida arcu aliquam integer non."',
    },
];

export default function Testimonials() {
    return (
        <>
            <Navbar />
            <section className="w-full shadow-md font-sans">
                {/* Top Hero Banner */}
                <div className="relative bg-yoga-tropical-teal py-24 px-6 md:px-12 text-center overflow-hidden flex items-center justify-center">
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-10">
                        <img src="/mandala-right.png" alt="" aria-hidden="true"
                            className="h-auto w-[320px] max-w-[90%] object-contain sm:w-112.5 md:w-137.5 lg:w-180"
                        />
                    </div>

                    <h1 className="relative z-10 font-serif text-5xl md:text-7xl text-yoga-olive-dark font-normal tracking-wide">
                        Testimonials
                    </h1>
                </div>

                {/* Stats and Ratings Bar */}
                <div className="bg-yoga-frosted-mint py-6 px-6 md:px-12">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-around gap-8 lg:gap-4">

                        {/* Overall Rating Section */}
                        <div className="flex items-center gap-4">
                            <span className="text-4xl md:text-5xl font-serif font-bold text-yoga-olive-dark">
                                4.7
                            </span>
                            <div className="flex flex-col">
                                <div className="flex text-yoga-sea-green gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className="w-4 h-4" />
                                    ))}
                                </div>
                                <span className="text-sm text-yoga-olive-dark/80 mt-1 font-medium">
                                    567 reviews
                                </span>
                            </div>
                        </div>

                        {/* Divider (Hidden on mobile) */}
                        <div className="hidden lg:block h-12 w-px bg-yoga-sea-green/30"></div>

                        {/* Google Rating */}
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-yoga-sea-green flex items-center justify-center text-white shadow-sm">
                                <FaGoogle className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-lg md:text-xl font-serif font-bold text-yoga-olive-dark">
                                    4.8<span className="text-sm font-normal text-yoga-olive-dark/70">/5</span>
                                </div>
                                <p className="text-xs text-yoga-olive-dark/80">123 reviews</p>
                            </div>
                        </div>

                        {/* Divider (Hidden on mobile) */}
                        <div className="hidden lg:block h-12 w-px bg-yoga-sea-green/30"></div>

                        {/* Facebook Rating */}
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-yoga-sea-green flex items-center justify-center text-white shadow-sm">
                                <FaFacebookF className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-lg md:text-xl font-serif font-bold text-yoga-olive-dark">
                                    4.7<span className="text-sm font-normal text-yoga-olive-dark/70">/5</span>
                                </div>
                                <p className="text-xs text-yoga-olive-dark/80">256 reviews</p>
                            </div>
                        </div>

                        {/* Divider (Hidden on mobile) */}
                        <div className="hidden lg:block h-12 w-px bg-yoga-sea-green/30"></div>

                        {/* Yelp Rating */}
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-yoga-sea-green flex items-center justify-center text-white shadow-sm">
                                <SiYelp className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-lg md:text-xl font-serif font-bold text-yoga-olive-dark">
                                    4.6<span className="text-sm font-normal text-yoga-olive-dark/70">/5</span>
                                </div>
                                <p className="text-xs text-yoga-olive-dark/80">144 reviews</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <FeaturedReview />

            <section className="bg-[#eaf4ec] px-6 py-20 md:px-12 lg:px-24 lg:py-24">
                <div className="mx-auto grid w-full max-w-[90%] grid-cols-1 gap-x-12 gap-y-20 md:grid-cols-2 lg:gap-x-4 lg:gap-y-12">
                    {testimonialsData.map((item) => (
                        <div key={item.id}
                            className="relative border border-white px-7 pb-8 pt-12 sm:px-9 sm:pb-9 sm:pt-14
                                transition-all duration-300 hover:border-white/40 hover:shadow-sm
                            "
                        >
                            <div className="absolute left-7 top-0 -translate-y-6 sm:left-9">
                                <div className="h-16 w-16 overflow-hidden rounded-full bg-white shadow-sm sm:h-20 sm:w-20">
                                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                                </div>
                            </div>

                            <div className="flex flex-row justify-between items-center mt-7">
                                <div className="flex gap-1 text-yoga-ochre">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                    ))}
                                </div>
                                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-yoga-olive-dark"> {item.name} </h4>
                            </div>

                            <p className="mt-5 font-serif text-base leading-relaxed text-yoga-olive-dark/75 sm:text-md"> {item.text} </p>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </>
    );
}