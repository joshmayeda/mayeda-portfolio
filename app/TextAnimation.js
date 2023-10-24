import React, { useEffect, useState } from 'react';
import './TextAnimation.css';

const TextAnimation = () => {
  const texts = [
    'Wear Face Mask',
    'Cover Face When Coughing',
    'Wash Your Hands Frequently',
    'Stay At Home',
    'Avoid Close Contact',
  ];
  const textInTimer = 3000;
  const textOutTimer = 2800;

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const animateText = () => {
      setTimeout(() => {
        setIndex((index) => (index === texts.length - 1 ? 0 : index + 1));
      }, textInTimer + textOutTimer);
    };

    animateText();
  });

  return (
        <div className="home-text">
            <h1>How can I protect myself from Covid-19?</h1>
            <p className="animate-text">
                {texts.map((text, i) => (
                <span
                    key={i}
                    className={`${
                    index === i ? 'text-in' : ''
                    } ${index === (i - 1 + texts.length) % texts.length ? 'text-out' : ''}`}
                >
                    {text}
                </span>
                ))}
            </p>
        </div>
  );
};

export default TextAnimation;