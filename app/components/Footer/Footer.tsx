import Link from 'next/link';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Footer.css';

export function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="icons">
        <Link
          href="https://www.linkedin.com/in/noelia-abascal-cabrera/"
          target="blank"
        >
          <LinkedInIcon />
        </Link>
        <Link href="https://github.com/elialcodes" target="blank">
          <GitHubIcon />
        </Link>
      </div>
      <div className="heart">
        <p>Noelia Abascal 2024, hecho con</p>
        <p>
          <FavoriteIcon className="heart-icon" />
        </p>
      </div>
    </footer>
  );
}
