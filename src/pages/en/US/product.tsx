import React from 'react';
import { Layout } from 'src/components/Layout';
import products from '../../../../__mocks__/products.json';
import { Box, Button, Card, Image, Text } from 'theme-ui';

const Product = () => {
  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '14px',
        }}
      >
        {products.map(productDetail => (
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              maxWidth: 256,
              minHeight: 350,
              padding: '0 24px 24px 24px',
              borderRadius: '4px',
              backgroundColor: 'white',
              boxShadow:
                '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)',
            }}
            key={productDetail.id}
            data-testid="products"
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Image
                src={productDetail.image}
                sx={{
                  display: 'block',
                  verticalAlign: 'middle',
                  width: '120px',
                }}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <Text
                  sx={{
                    fontSize: '16px',
                    fontWeight: 100,
                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                    display: 'block',
                  }}
                >
                  {productDetail.name}
                </Text>
                <Text
                  sx={{
                    fontSize: '10px',
                    fontWeight: 50,
                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                    display: 'block',
                    textAlign: 'center',
                  }}
                >
                  {productDetail.description}
                </Text>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <Text
                sx={{
                  fontSize: '10px',
                  fontWeight: 50,
                  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                  display: 'block',
                }}
              >
                {productDetail.price.currency === 'USD' ? '$' : ''}
                {Number(productDetail.price.amount) / 100}
              </Text>
              <Button
                sx={{
                  background: '#00a4e9',
                  cursor: 'pointer',
                  fontSize: '10px',
                }}
              >
                Buy now
              </Button>
            </Box>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Product;
