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
  return (
    <Container maxW={'7xl'} p="12">
      <Box
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems="center" // Tambahkan ini untuk mengatur gambar dan teks ke tengah
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
              // Tambahkan properti width dan height di bawah ini untuk memperbesar gambar
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
          marginLeft={{ base: '0', md: '3%' }} // Tambahkan ini untuk memberi jarak dari gambar
        >
          <Heading marginTop="1">
            <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
              Blog article title
            </Text>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it to make
            a type specimen book.
          </Text>
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
  <Box
    maxW="sm"
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    boxShadow="md"
  >
    <Image
      src="https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" // Ganti URL gambar sesuai artikel pertama
      alt="Gambar Artikel 1"
      objectFit="cover"
      h="150px"
    />
    <Box p="4">
      <Text fontWeight="bold">Judul Artikel 1</Text>
      <Text fontSize="sm" mt="2">
        Deskripsi artikel pertama yang singkat.
      </Text>
      <Button mt="2" size="sm" colorScheme="blue">
        Baca Selengkapnya
      </Button>
    </Box>
  </Box>

  {/* Artikel Kedua */}
  <Box
    maxW="sm"
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    boxShadow="md"
  >
    <Image
      src="https://images.unsplash.com/photo-1553603227-2358aabe821e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" // Ganti URL gambar sesuai artikel kedua
      alt="Gambar Artikel 2"
      objectFit="cover"
      h="150px"
    />
    <Box p="4">
      <Text fontWeight="bold">Judul Artikel 2</Text>
      <Text fontSize="sm" mt="2">
        Deskripsi artikel kedua yang singkat.
      </Text>
      <Button mt="2" size="sm" colorScheme="blue">
        Baca Selengkapnya
      </Button>
    </Box>
  </Box>

  {/* Artikel Ketiga */}
  <Box
    maxW="sm"
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    boxShadow="md"
  >
    <Image
      src="https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" // Ganti URL gambar sesuai artikel ketiga
      alt="Gambar Artikel 3"
      objectFit="cover"
      h="150px"
    />
    <Box p="4">
      <Text fontWeight="bold">Judul Artikel 3</Text>
      <Text fontSize="sm" mt="2">
        Deskripsi artikel ketiga yang singkat.
      </Text>
      <Button mt="2" size="sm" colorScheme="blue">
        Baca Selengkapnya
      </Button>
    </Box>
  </Box>

  {/* Artikel Keempat */}
  <Box
    maxW="sm"
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    boxShadow="md"
  >
    <Image
      src="https://images.unsplash.com/photo-1550951298-5c7b95a66bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1933&q=80" // Ganti URL gambar sesuai artikel keempat
      alt="Gambar Artikel 4"
      objectFit="cover"
      h="150px"
    />
    <Box p="4">
      <Text fontWeight="bold">Judul Artikel 4</Text>
      <Text fontSize="sm" mt="2">
        Deskripsi artikel keempat yang singkat.
      </Text>
      <Button mt="2" size="sm" colorScheme="blue">
        Baca Selengkapnya
      </Button>
    </Box>
  </Box>
</HStack>
      </Box>
      </Box>
    </Container>
  );
}

export default Artikel;
