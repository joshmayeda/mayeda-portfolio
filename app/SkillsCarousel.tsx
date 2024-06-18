import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaRegCircle, FaRegDotCircle } from "react-icons/fa";

type SkillsCarouselProps = {
    images: React.JSX.Element[];
};

const SkillsCarousel: React.FC<SkillsCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageDots, setImageDots] = useState<React.JSX.Element[]>([<FaRegDotCircle key={0} />,
                                                                   <FaRegCircle key={1} />,
                                                                   <FaRegCircle key={2} />,
                                                                   <FaRegCircle key={3} />]);

  const handleDotChange = (direction: boolean) => {
    console.log("dot clicked");
    let dots = imageDots;
    dots[currentIndex] = <FaRegCircle key={currentIndex} />;
    if(direction) {
      if(currentIndex === images.length - 1)
        dots[0] = <FaRegDotCircle key={0} />;
      else
        dots[currentIndex + 1] = <FaRegDotCircle key={currentIndex + 1} />;
    }
    else {
      if(currentIndex === 0)
        dots[images.length - 1] = <FaRegDotCircle key={images.length - 1} />;
      else
        dots[currentIndex - 1] = <FaRegDotCircle key={currentIndex - 1} />;
    }
    setImageDots(dots);
  }

  const handleLeftArrow = () => {
    console.log("left arrow clicked");
    handleDotChange(false);
    if(currentIndex > 0)
      setCurrentIndex(currentIndex - 1);
    else
      setCurrentIndex(images.length - 1);
  }

  const handleRightArrow = () => {
    console.log("right arrow clicked");
    handleDotChange(true);
    if(currentIndex === images.length - 1)
      setCurrentIndex(0);
    else
      setCurrentIndex(currentIndex + 1);
  }

  return (

    <div className="flex flex-col items-center justify-between gap-5">
      <div className="flex flex-none overflow-auto no-scrollbar gap-10 items-center justify-center mt-5 ring ring-primary rounded-2xl transition-transform ease-in-out" >
        {images[currentIndex]}
      </div>
      <div className="flex gap-5 justify-center">
        {imageDots}
      </div>
      <div className="flex gap-5 pb-5">
        <button onClick={handleLeftArrow}><FaArrowLeft /></button>
        <button onClick={handleRightArrow}><FaArrowRight /></button>
      </div>
    </div>
  );
};

export default SkillsCarousel;