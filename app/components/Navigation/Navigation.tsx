'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { montserrat } from 'fonts/fonts';
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from '@mui/material';
import { type Page } from '@/constants';
import './Navigation.css';

type NavigationProps = {
  links: Page[];
};

export function Navigation({ links }: NavigationProps): JSX.Element {
  const [anchorElement, setAnchorElement] = React.useState<null | HTMLElement>(
    null,
  );

  const open = Boolean(anchorElement);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElement(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElement(null);
  };

  const pathname = usePathname();

  const isSmallScreen = useMediaQuery('(max-width:767px)');

  return (
    <>
      <ul className="navigation-desktop-tablet">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className={`normal-li ${montserrat.className} ${link.href === pathname ? 'li-focus' : ''}`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          style={{
            display: isSmallScreen ? 'block' : 'none',
          }}
        >
          <MenuIcon style={{ color: 'antiquewhite' }} />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorElement}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {links.map((link, index) => (
            <MenuItem onClick={handleClose} key={index}>
              <Link
                href={link.href}
                className={`normal-li ${montserrat.className} `}
              >
                {link.name}
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </div>
    </>
  );
}
