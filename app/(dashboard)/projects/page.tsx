import { montserrat } from 'fonts/fonts';
import CardProject from 'components/CardProject';
import TechIcon from 'components/TechIcon/TechIcon';
import * as motion from 'framer-motion/client';
import { projects, icons } from '@/constants';

import './projects.css';

export default function Projects(): JSX.Element {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: '50%' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
        }}
      >
        <h2 className={`${montserrat.className} title`}>PROYECTOS</h2>
      </motion.div>
      <div className="cards-projects">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
            }}
          >
            <CardProject project={project} />
          </motion.div>
        ))}
      </div>
      <div className="icons-tech">
        {icons.map((icon, index) => (
          <TechIcon key={index} icon={icon} />
        ))}
      </div>
    </>
  );
}
