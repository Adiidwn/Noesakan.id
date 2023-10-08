import { Image } from '@chakra-ui/image';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { useState } from 'react';
import { Button } from '@chakra-ui/button';
import Navbar from '../features/navbar';
import ProductInDetail from './productInDetail';
import Testimonials from './testimonials';
import Footer from './footer';

function randomColor() {
  return Math.floor(Math.random() * 2);
}

const colorList: string[] = ['#E83636', 'blue.500'];

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

export default function DetailProduct() {
  const [colorCode, setColorCode] = useState(colorList[randomColor()]);
  return (
    <>
      <Box backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 255, 0.2))`}>
        <Navbar />
        <Box pt={10}>
          <Flex
            p={10}
            gap={10}
          >
            <Box
              height={'400px'}
              width={'650px'}
            >
              <Image
                objectFit={'cover'}
                h={'100%'}
                w={'100%'}
                borderRadius={10}
                src="https://images.unsplash.com/photo-1510130387422-82bed34b37e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=8"
              />
            </Box>
            <Box>
              <Flex
                flexDirection={'column'}
                pt={5}
              >
                <Text
                  fontWeight={'bold'}
                  fontSize={'35px'}
                >
                  Ikan Botan
                </Text>
                <Text
                  fontSize={'23px'}
                  fontWeight="bold"
                  color="white"
                >
                  Rp.24.000/Kg
                </Text>
                <Text
                  fontWeight={'500'}
                  mb={2}
                >
                  Fishing Store
                </Text>
                <Rating
                  rating={data.rating}
                  numReviews={data.numReviews}
                />
                <Text mt={5}>Keterangan Produk:</Text>
                <Text
                  w={'390px'}
                  textAlign={'justify'}
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam fugiat quas modi quisquam temporibus quis error, odit voluptatum totam asperiores rem illum natus magnam molestias, aperiam adipisci at, quo soluta?
                </Text>
                <Button
                  w={'50%'}
                  mt={5}
                  bgColor={`${colorCode}`}
                  color={'white'}
                  rounded={'md'}
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}
                  onClick={() => setColorCode(colorList[randomColor()])}
                >
                  Hubungi Pembeli
                </Button>
              </Flex>
            </Box>
          </Flex>
          <ProductInDetail />
          <Testimonials />
          <Footer />
        </Box>
      </Box>
    </>
  );
}
