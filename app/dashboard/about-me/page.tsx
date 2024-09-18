import Carousel from 'components/Carousel/Carousel';
import { inria, montserrat } from 'fonts/fonts';
import * as motion from 'framer-motion/client';
import { pictures } from '@/constants';
import './about-me.css';

export default function AboutMe(): JSX.Element {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: '20%' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
        }}
      >
        <h2 className={`${montserrat.className} title`}>SOBRE MÍ</h2>
        <div className={`${inria.className} about-text`}>
          <p>
            He trabajado muchos años en atención al cliente y decidí apostar por
            un cambio profesional. Empecé estudiando programación de forma
            autodidacta y adquirí los conocimientos que me faltaban en un
            bootcamp intensivo.
          </p>
          <p>
            Tengo 46 años, años valiosos que me han aportado una perspectiva
            personal y profesional más madura, creo que ese es mi punto fuerte.
            Quiero seguir creciendo y aprendiendo, es muy satisfactorio
            desarrollar código limpio y eficiente y ofrecer soluciones de
            calidad al cliente.
          </p>
          <p>
            Para que me conozcas un poco más, me encanta leer, la playa, tengo
            mil plantas en casa y me gusta mucho programar con una taza de café
            en la mano. Ah, y lo más importante, soy madre de 2 adolescentes a
            los que adoro (vale, esto no siempre...).
          </p>
          <p>
            Dicen de mi que tengo la habilidad de conectar a la gente entre si y
            que se sienta a gusto trabajando, espero que algún día podamos
            trabajar juntos.
          </p>
        </div>
      </motion.div>
      <Carousel pictures={pictures} />
    </>
  );
}
