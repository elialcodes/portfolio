import { type Icon } from '@/constants';
import Image from 'next/image';
import './TechIcon.css';

type TechIconProps = {
  icon: Icon;
};

export default function TechIcon({ icon }: TechIconProps) {
  return (
    <div className="icon-tech">
      <Image src={icon.logo} width={30} height={30} alt="logo CSS" />
      <span>{icon.name}</span>
    </div>
  );
}
