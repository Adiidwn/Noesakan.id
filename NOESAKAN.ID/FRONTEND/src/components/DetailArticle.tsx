import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  HStack,
  useColorModeValue,
  Container,
  Button
} from '@chakra-ui/react';
import React, { useState } from 'react';

interface BlogAuthorProps {
  date: Date;
  name: string;
}

const BlogAuthor = (props: BlogAuthorProps) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      {/* ... (kode lainnya) */}
    </HStack>
  );
}

const Artikel = () => {
  const [showArticle1, setShowArticle1] = useState(false);
  const [showArticle2, setShowArticle2] = useState(false);
  const [showArticle3, setShowArticle3] = useState(false);
  const [showArticle4, setShowArticle4] = useState(false);

  const toggleArticle = (articleNumber: number) => {
    switch (articleNumber) {
      case 1:
        setShowArticle1(!showArticle1);
        break;
      case 2:
        setShowArticle2(!showArticle2);
        break;
      case 3:
        setShowArticle3(!showArticle3);
        break;
      case 4:
        setShowArticle4(!showArticle4);
        break;
      default:
        break;
    }
  };

  return (
    <Container maxW={'7xl'} p="12">
      <Box
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems="center"
      >
        <Box
          flex="1"
          width={{ base: '100%', md: '40%' }}
          marginRight={{ base: '0', md: '3%' }}
          marginBottom={{ base: '5%', md: '0' }}
          position="relative"
          alignItems="center"
        >
          <Box
            width="100%"
            borderRadius="xl"
            boxShadow="lg"
            borderWidth="1px"
            overflow="hidden"
            position="relative"
            transition="transform 0.2s ease-in-out"
            _hover={{ transform: 'scale(1.05)' }}
          >
            <Image
              borderRadius="lg"
              src={
                'https://images.unsplash.com/photo-1587391028604-b370121a40f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
              }
              alt="some good alt text"
              objectFit="cover"
              width="100%"
              height="400px"
            />
          </Box>
        </Box>
        <Box
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', md: '0' }}
          marginLeft={{ base: '0', md: '3%' }}
        >
          <Box p="4">
            <Text fontWeight="bold">Judul Artikel 1</Text>
            <Text fontSize="sm" mt="2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, officia! Quidem, in, illo neque laboriosam autem quas veniam sed et amet reprehenderit laudantium ipsa id sunt asperiores natus consequatur!
            </Text>
            {showArticle1 ? (
              <div>
                <Text mt="2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, officia! Quidem, in, illo neque laboriosam autem quas veniam sed et amet reprehenderit laudantium ipsa id sunt asperiores natus consequatur! Tempora, debitis vitae neque doloremque cupiditate, atque quasi iste perferendis pariatur qui nobis consequatur cumque natus commodi laboriosam obcaecati ullam mollitia repellendus? Natus doloremque possimus ipsam maxime corrupti animi similique tenetur nam maiores necessitatibus, repellendus ad illo adipisci, eum, repellat officia itaque fuga aperiam rerum deleniti repudiandae explicabo corporis iste? Reprehenderit optio adipisci harum excepturi, placeat, voluptatem ullam quia inventore iure dolores minus! Eius odio omnis ipsa voluptatum quos totam laborum?
                </Text>
                <Button mt="2" size="sm" colorScheme="blue" onClick={() => toggleArticle(1)}>
                  Tutup
                </Button>
              </div>
            ) : (
              <Button mt="2" size="sm" colorScheme="blue" onClick={() => toggleArticle(1)}>
                Baca Selengkapnya
              </Button>
            )}
          </Box>
          <BlogAuthor name="John Doe" date={new Date('2021-04-06T19:01:27Z')} />
        </Box>
      </Box>
      <Divider marginTop="5" />
      <Box
        bg={useColorModeValue('white', 'gray.700')}
        borderRadius="xl"
        p="4"
        mt="8"
        boxShadow="md"
      >
        <Heading as="h2" fontSize="xl" mb="4">
          Rekomendasi Artikel untuk Dibaca:
        </Heading>
        <HStack spacing="4">
          {/* Artikel Pertama */}
          {/* ... (Kode artikel lainnya sesuai kebutuhan Anda) */}
        </HStack>
      </Box>
    </Container>
  );
}

export default Artikel;
