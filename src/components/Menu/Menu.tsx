import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Avatar, Box, Container, NavLink } from 'theme-ui';
import useScrollListener from 'src/hooks/useScrollListener';
import { useUser } from '../../context/context';

import { Logo } from '../Icons/Logo';

export const Menu = () => {
  const [navClassList, setNavClassList] = useState<string[]>([]);
  const scroll = useScrollListener();
  const { user, setUserDetail } = useUser();

  // update classList of nav on scroll
  useEffect(() => {
    const _classList = [];

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
      _classList.push('menu--hidden');

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  useEffect(() => {
    fetch('/api/user')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setUserDetail(data);
      });
  }, []);

  return (
    <Box
      as="menu"
      className={navClassList.join(' ')}
      sx={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        background: 'rgb(255, 255, 255)',
        boxShadow: 'rgba(0, 0, 0, 0.4) 0 0 10px',
        transition: 'transform 150ms ease-in-out',
        display: 'flex',
        ...(navClassList.length > 0 &&
          navClassList[0] === 'menu--hidden' && {
            transform: 'translateY(-100%)',
          }),
      }}
    >
      <Container p={10} sx={{ flex: '1 auto' }}>
        <NavLink as={Link} href="/en/US">
          <Logo />
        </NavLink>
        <NavLink as={Link} href="/en/US/product" pl={20}>
          Product
        </NavLink>
        <NavLink as={Link} href="/en/US/about" pl={20}>
          About
        </NavLink>
      </Container>
      <Avatar
        data-testid="usericon"
        src={user.avatar}
        sx={{
          margin: 10,
          width: 48,
          height: 48,
          padding: 1,
          backgroundColor: '#d8d8d8',
        }}
      />
    </Box>
  );
};
