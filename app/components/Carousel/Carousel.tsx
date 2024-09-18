'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { type Picture } from '@/constants';
import './Carousel.css';

type CarouselProps = { pictures: Picture[] };

const Carousel = ({ pictures }: CarouselProps) => {
  return (
    <div className="carousel">
      <motion.div
        className="marquee-carousel"
        animate={{ x: ['0%', '-100%'] }}
        transition={{
          duration: 30, // Duración en segundos del desplazamiento completo
          ease: 'linear', // Movimiento lineal para simular un marquee continuo
          repeat: Infinity, // Repetición infinita
        }}
      >
        {pictures.concat(pictures).map((picture, index) => (
          <Image
            key={index}
            src={picture.src}
            alt={picture.alt}
            width={picture.width}
            height={picture.height}
            className={picture.className}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;
