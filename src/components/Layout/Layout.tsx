import { FC } from 'react';
import { Global, css } from '@emotion/react';
import { Container } from 'theme-ui';
import { UserContextProvider } from '../../context/context';

import { Menu } from '../Menu';

type Props = {
  children?: React.ReactNode;
};
export const Layout: FC<Props> = ({ children }) => {
  return (
    <UserContextProvider>
      <Global
        styles={css`
          html,
          body {
            padding: 0;
            margin: 0;
          }
        `}
      />
      <Container
        sx={{
          background: 'rgb(240, 240, 240)',
          minHeight: 'calc(100vh - 70px)',
        }}
      >
        <Menu />
        <Container
          sx={{
            padding: '25px',
            marginTop: '70px',
          }}
        >
          {children}
        </Container>
      </Container>
    </UserContextProvider>
  );
};
