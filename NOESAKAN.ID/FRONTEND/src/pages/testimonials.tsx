import { Avatar, Box, chakra, Flex, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const testimonials = [
  {
    name: 'Bae suzy',
    role: 'Ceo',
    content: 'Sangat puas sekali berbelanja di Noesakan. Ikan yang dikirim segar, bisa pesan dalam jumlah banyak dan banyak pilihan supplier nya.',
    avatar: 'https://lh3.googleusercontent.com/4jOgJB7PXG_YessUX2SKL8EGoTq8o9hiVs5rQXCWf_tS10ikRuXH282gOw95Om2ze1yleHUTIhtn0iJNPEfDKBYQ1BJn84ozZA=w1600-rj',
    rating: 5,
  },
  {
    name: 'Laura',
    role: 'Entrepreneur',
    content: 'Website cocok untuk mencari supplier ikan tangan pertama.',
    avatar: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    rating: 4,
  },
  {
    name: 'Cristine',
    role: 'Pengusaha',
    content: 'Sangat senang berbelanja di sini, tetapi lebih bagus lagi nantinya bisa dilakukan pembayaran lewat web nya. Jadi customer merasa aman apabila berbelanja dalam skala yang lebih banyak.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80',
    rating: 3,
  },
  {
    name: 'Daniel T.',
    role: 'Marketing',
    content: 'Lumayan bagus untuk rekomendasi mencari supplier ikan.',
    avatar: 'https://images.unsplash.com/photo-1606513542745-97629752a13b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    rating: 5,
  },
];

const backgrounds = [
  `url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'102.633\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23ED64A6\' /%3E%3Cellipse cx=\'399.573\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23F56565\' /%3E%3Cellipse cx=\'366.192\' cy=\'73.2292\' rx=\'193.808\' ry=\'73.2292\' fill=\'%2338B2AC\' /%3E%3Cellipse cx=\'222.705\' cy=\'110.585\' rx=\'193.808\' ry=\'73.2292\' fill=\'%23ED8936\' /%3E%3C/svg%3E")`,
  // ...Tambahkan gambar latar belakang lainnya di sini
];

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
  index: number;
  rating: number;
}

function TestimonialCard(props: TestimonialCardProps) {
  const { name, role, content, avatar, index, rating } = props;
  return (
    <Flex
      boxShadow="lg"
      maxW="640px"
      direction={{ base: 'column-reverse', md: 'row' }}
      width="full"
      rounded="xl"
      p={10}
      justifyContent="space-between"
      position="relative"
      bg={useColorModeValue('white', 'gray.800')}
      _after={{
        content: '""',
        // ...
      }}
      _before={{
        content: '""',
        // ...
      }}
    >
      <Avatar
        src={avatar}
        height="80px"
        width="80px"
        alignSelf="center"
        m={{ base: '0 0 20px 0', md: '0 0 0 50px' }}
      />
      <Flex
        direction="column"
        textAlign="left"
        justifyContent="space-between"
        alignItems="flex-start"
        ml={{ base: 0, md: 4 }} // Tambahkan margin kiri pada tampilan desktop (md)
      >
        <Flex alignItems="center">
          <chakra.p
            fontFamily="Work Sans"
            fontWeight="bold"
            fontSize={14}
          >
            {name}
            <chakra.span
              fontFamily="Inter"
              fontWeight="medium"
              color="gray.500"
            >
              {' '}
              - {role}
            </chakra.span>
          </chakra.p>
          {/* Tambahkan elemen untuk menampilkan rating */}
          <Box ml={2}>
            {[...Array(rating)].map((_, i) => (
              <StarIcon key={i} color="yellow.500" />
            ))}
          </Box>
        </Flex>
        <chakra.p
          fontFamily="Inter"
          fontWeight="medium"
          fontSize="15px"
          pb={4}
        >
          {content}
        </chakra.p>
      </Flex>
    </Flex>
  );
}

export default function Testimonials() {
  return (
    <Flex
      textAlign="center"
      mt={5}
      pt={10}
      px={10}
      justifyContent="center"
      direction="column"
      width="full"
      overflow="hidden"
    >
      <Box
        width={{ base: 'full', sm: 'lg', lg: 'xl' }}
        margin="auto"
      >
        <chakra.h1
          py={2}
          fontSize={48}
          fontFamily="Work Sans"
          fontWeight="bold"
          color={useColorModeValue('gray.700', 'gray.50')}
        >
          Review Para Pecinta Ikan
        </chakra.h1>
        <chakra.h2
          margin="auto"
          width="70%"
          fontFamily="Inter"
          fontWeight="medium"
          color={useColorModeValue('gray.500', 'gray.400')}
        >
          Sudah lebih dari <chakra.strong color={useColorModeValue('gray.700', 'gray.50')}>10,000+</chakra.strong> pecinta ikan memilih ikan segarnya di <chakra.strong color={useColorModeValue('gray.700', 'gray.50')}>Noesakan</chakra.strong>.
        </chakra.h2>
      </Box>
      <SimpleGrid
        columns={{ base: 1, xl: 2 }} // Menggunakan 2 kolom pada tampilan ekstra large (xl)
        spacing={20}
        mt={16}
        mb={16}
        mx="auto"
      >
        {testimonials.map((cardInfo, index) => (
          <TestimonialCard
            key={index}
            {...cardInfo}
            index={index}
          />
        ))}
      </SimpleGrid>
    </Flex>
  );
}
