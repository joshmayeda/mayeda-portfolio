'use client';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from 'react';
import Image from 'next/image';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

type HorizontalCarouselProps = {
    images: React.JSX.Element[];
};

const HorizontalCarousel: React.FC<HorizontalCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Carousel responsive={responsive} containerClass={'w-full'}>
      <Image src="/dsep.png" width={200} height={200} alt="DSEP" title="DSEP" className="rounded-2xl" />
      <Image src="/fh-bane-condition.png" width={200} height={200} alt="DSEP" title="DSEP" className="rounded-2xl" />
      <Image src="/frosthaven-helper.png" width={200} height={200} alt="DSEP" title="DSEP" className="rounded-2xl" />
      <Image src="/gymnotebook.png" width={200} height={200} alt="DSEP" title="DSEP" className="rounded-2xl" />
      <Image src="/memoji.png" width={200} height={200} alt="DSEP" title="DSEP" className="rounded-2xl" />
    </Carousel>
  );
};

export default HorizontalCarousel;