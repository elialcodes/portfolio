'use client';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useMediaQuery } from '@mui/material';
import { type ProjectCard } from '@/constants';
import Link from 'next/link';

type ProjectCardProps = { project: ProjectCard };

export default function CardProject({
  project,
}: ProjectCardProps): JSX.Element {
  const isMediumScreen = useMediaQuery('(max-width:1023px)');
  const isSmallScreen = useMediaQuery('(max-width:767px)');

  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: 'white',
        paddingBottom: '0.5rem',
      }}
    >
      <CardMedia
        component="img"
        alt={project.alt}
        height="180"
        image={project.src}
        style={{ borderBottom: '0.2px solid lightseagreen' }}
      />
      <CardContent
        style={{
          textAlign: 'center',
          paddingBottom: '0',
          color: 'lightseagreen',
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ fontSize: isMediumScreen ? '1.3rem' : '1.5rem' }}
        >
          {project.title}
        </Typography>
      </CardContent>
      <CardActions
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: isSmallScreen ? '0' : '1rem',
        }}
      >
        <Link href={project.linkVercel} target="blank">
          <Button
            size="small"
            variant="contained"
            style={{
              borderColor: 'darkorange',
              color: 'rgb(255,132,0)',
              backgroundColor: 'white',
              borderRadius: '1rem',
              width: isMediumScreen ? '4rem' : '5rem',
              fontSize: isMediumScreen ? '0.7rem' : '1rem',
            }}
          >
            Demo
          </Button>
        </Link>
        <Link color="primary" href={project.linkGitHub} target="blank">
          <Button
            size="small"
            variant="contained"
            style={{
              borderColor: 'darkorange',
              color: 'rgb(255,132,0)',
              backgroundColor: 'white',
              borderRadius: '1rem',
              width: isMediumScreen ? '4rem' : '5rem',
              fontSize: isMediumScreen ? '0.7rem' : '1rem',
            }}
          >
            <GitHubIcon />
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
