import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

const data = {
  isNew: true,
  imageURL: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
  name: 'Wayfarer Classic',
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

interface RatingProps {
  rating: number;
  numReviews: number;
}

export function Rating({ rating, numReviews }: RatingProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
    >
      {Array(5)
        .fill('')
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: '1' }}
                color={i < rating ? 'teal.500' : 'gray.300'}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return (
              <BsStarHalf
                key={i}
                style={{ marginLeft: '1' }}
              />
            );
          }
          return (
            <BsStar
              key={i}
              style={{ marginLeft: '1' }}
            />
          );
        })}
      <Box
        as="span"
        ml="2"
        color="gray.600"
        fontSize="sm"
      >
        {numReviews} review{numReviews > 1 && 's'}
      </Box>
    </Box>
  );
}

export default function StoreProductInStore() {
  return (
    <>
      <Box pb={20}>
        <Text
          fontSize={'30px'}
          fontWeight={'bold'}
          color="blue.900"
          pl={10}
          mb={5}
        >
          Produk Saya
        </Text>
        <Grid
          templateColumns="repeat(4, 1fr)"
          gap={6}
          px={10}
        >
          <Box
            boxShadow="2px 2px 4px rgba(0, 0, 0, 0.4)"
            h={'350px'}
            borderRadius={10}
          >
            <Flex flexDirection={'column'}>
              <Box
                width={'280px'}
                height={'250px'}
              >
                <Image
                  borderTopRightRadius={10}
                  borderTopLeftRadius={10}
                  objectFit={'cover'}
                  h={'100%'}
                  w={'100%'}
                  src="https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmlzaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
                />
              </Box>
              <Flex
                p={2}
                flexDirection={'column'}
              >
                <Flex
                  flexDirection={'row'}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                >
                  <Text
                    fontSize={'23px'}
                    fontWeight="bold"
                    color={'blue.900'}
                  >
                    Ikan Cupang
                  </Text>
                  <Text>Rp.39.000/kg</Text>
                </Flex>
                <Text>Depok, Jawa Barat</Text>
                <Rating
                  rating={data.rating}
                  numReviews={data.numReviews}
                />
              </Flex>
            </Flex>
          </Box>
        </Grid>
      </Box>
    </>
  );
}
