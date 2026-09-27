import { FloatingComponent } from "./Components/Component";

export default function FloatingFoodHeroDemo() {
  const heroImages = [
    {
      src: 'https://cdn.21st.dev/assets/mirror/cc/cc7d7fbb538d93322e189b55ae4c6eed95aab7da267a9a095b39216070ef65b0.png',
      alt: 'A delicious cheeseburger',
      className: 'w-40 sm:w-56 md:w-64 lg:w-72 top-10 left-4 sm:left-10 md:top-20 md:left-20 animate-float',
    },
    {
      src: 'https://cdn.21st.dev/assets/mirror/95/95bc0d9d69e76d3729ca42f9525bafd449fd27fa41c9393d1deccb85d79b0639.png',
      alt: 'A bamboo steamer with dumplings',
      className: 'w-28 sm:w-36 md:w-48 top-10 right-4 sm:right-10 md:top-16 md:right-16 animate-float',
    },
    {
      src: 'https://cdn.21st.dev/assets/mirror/6e/6e4600ac05444d9dc0396906da4174dcfe42a64c14082d939f0f57cb2ed8113d.png',
      alt: 'A slice of pizza',
      className: 'w-32 sm:w-40 md:w-56 bottom-8 right-5 sm:right-10 md:bottom-16 md:right-20 animate-float',
    },
     {
      src: 'https://cdn.21st.dev/assets/mirror/8e/8ec4fbab8445c1769d3200d674cd3731a0550b21c87bb8bc6938cb3a05932e5b.png',
      alt: 'A basil leaf',
      className: 'w-8 sm:w-12 top-1/4 left-1/3 animate-float',
    },
    {
      src: 'https://cdn.21st.dev/assets/mirror/e7/e758e9c35a8360f201c40d0bf3e3433c2b6ff3f759763eb697cbc3803af80e18.png',
      alt: 'A slice of tomato',
      className: 'w-8 sm:w-10 top-1/2 right-1/4 animate-float',
    },
    {
      src: 'https://cdn.21st.dev/assets/mirror/e7/e758e9c35a8360f201c40d0bf3e3433c2b6ff3f759763eb697cbc3803af80e18.png',
      alt: 'A slice of tomato',
      className: 'w-8 sm:w-10 top-3/4 left-1/4 animate-float',
    },
  ];

  return (
    <div className="w-full">
      <FloatingComponent
        title="Better food for more people"
        description="For over a decade, we've enabled our customers to discover new tastes, delivered right to their doorstep."
        images={heroImages}
      />
    </div>
  );
}