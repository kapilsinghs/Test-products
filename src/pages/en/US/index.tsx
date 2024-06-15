import { Box, Button, Image, NavLink, Text } from 'theme-ui';
import { Layout } from '../../../components/Layout';
import Link from 'next/link';

const Index = () => (
  <Layout>
    <Box
      data-testid="welcome-message"
      sx={{
        backgroundColor: '#111954',
        height: '78vh',
        borderRadius: '16px',
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '40px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '12px',
          }}
        >
          <Text
            sx={{
              color: 'white',
              fontSize: '32px',
              textTransform: 'uppercase',
              fontWeight: 800,
            }}
          >
            WHICH BLU PRODUCT ARE YOU?
          </Text>
          <Text
            sx={{
              color: 'white',
              fontSize: '12px',
              fontWeight: 500,
            }}
          >
            Let's take two minutes to find the device and flavour that's right
            for you.
          </Text>
        </Box>
        <Box>
          <Button
            sx={{
              cursor: 'pointer',
              fontSize: '10px',
              backgroundColor: '#fbbb29',
            }}
          >
            <NavLink as={Link} href="/en/US/product">
              <Text
                sx={{
                  color: 'black',
                  fontSize: '12px',
                  fontWeight: 900,
                }}
              >
                View Products
              </Text>
            </NavLink>
          </Button>
        </Box>
      </Box>
      <Image
        src="https://www.blu.com/assets/1mmno56mte7k/2Vv7xAVdMNj0QpLDxUdL6t/41674a5a6f87107e483ba7172f7aec34/UK_Onboarding_Hero_1_D_copy.webp?sq=high&im=Resize,width=7680"
        sx={{
          display: 'block',
        }}
      />
    </Box>
  </Layout>
);

export default Index;
