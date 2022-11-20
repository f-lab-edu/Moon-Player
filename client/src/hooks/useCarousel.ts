import { useState, useRef, useEffect } from 'react';

// 반응형적용?
export const useCarousel = <RefType extends HTMLElement>() => {
  const TOTAL_SLIDES = 1;
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slideRef = useRef<RefType | null>(null);
  useEffect(() => {
    if (!slideRef.current) return;
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  const handleNextSlide = () =>
    currentSlide === TOTAL_SLIDES ? setCurrentSlide(0) : setCurrentSlide(currentSlide + 1);
  const handlePrevSlide = () =>
    currentSlide === 0 ? setCurrentSlide(TOTAL_SLIDES) : setCurrentSlide(currentSlide - 1);

  return { handleNextSlide, handlePrevSlide, TOTAL_SLIDES, slideRef, currentSlide };
};

export default useCarousel;
