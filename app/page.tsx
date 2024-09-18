'use client';

import Image from 'next/image';
import Button from '@mui/material/Button';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { useMediaQuery } from '@mui/material';
import { montserrat, inria } from 'fonts/fonts';
import * as motion from 'framer-motion/client';
import './landing.css';

export default function Home() {
  const isSmallScreen = useMediaQuery('(max-width:767px)');

  return (
    <div className="landing">
      <motion.div
        initial={{ opacity: 0, x: '-20%' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.5,
        }}
      >
        <figure className="figure-landing">
          <Image
            src="/landing.jpg"
            alt="Noelia Abascal Cabrera"
            width={340}
            height={390}
            className="image-landing"
          />
        </figure>
      </motion.div>
      <div className="text-landing">
        <div className={`${montserrat.className} text-landing-titles`}>
          <h1>Noelia Abascal Cabrera</h1>
          <h2>Front-end Developer</h2>
        </div>
        <p className={`${inria.className} text-landing-description`}>
          ¡Bienvenid@ a mi portfolio! Te voy a mostrar un poco sobre mí, mis
          habilidades técnicas y mis proyectos.
        </p>
        <Button
          variant="contained"
          endIcon={<FileDownloadIcon />}
          style={{
            borderColor: 'darkorange',
            color: 'rgb(255,132,0)',
            backgroundColor: 'antiquewhite',
            width: '12rem',
            borderRadius: '1rem',
            marginTop: isSmallScreen ? '2rem' : '',
          }}
        >
          <a href="cv.pdf" download="CV-Noelia-Abascal">
            Descargar C.V.
          </a>
        </Button>
      </div>
    </div>
  );
}
