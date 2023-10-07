import React from 'react';
import {
  Box,
  Center,
  Text,
  Stack,
  useColorModeValue,
  Input,
  Button,
  IconButton,
  Icon,
  Card,
  Avatar,
} from '@chakra-ui/react';
import { FaImage, FaHome, FaProductHunt, FaBook, FaThumbsUp, FaComment, FaShare } from 'react-icons/fa'; // Import ikon gambar
import { BiComment, BiShareAlt } from 'react-icons/bi';
import { AiOutlineLike } from 'react-icons/ai';

export default function Article() {
  const handleImageClick = () => {
    const fileInput = document.getElementById('fileInput');
    fileInput?.click();
  };

  const handleFileUpload = (event: any) => {
    const selectedFile = event.target.files[0];
    console.log('File yang diunggah:', selectedFile);
  };

  return (
    <Box>
      <Center>
        <Box
          display="flex"
          maxW={'100%'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}
        >
          {/* Sidebar (kiri) */}
          <Box
            w={'20%'}
            p={6}
            borderRight="2px solid gray"
            position="sticky"
            top="0"
            bgColor={'white'}
          >
            <Text
    fontSize="xl"
    fontWeight="bold"
    color="blue.500"
    textShadow="2px 2px 4px rgba(0, 0, 0, 0.2)" // Efek text shadow
    mb={4} // Margin bottom untuk jarak dari judul ke menu
  >
    NOESAKAN.ID
  </Text>
            <Stack mt={5} spacing={2}>
              <MenuItem icon={<FaHome />} text="Beranda" />
              <MenuItem icon={<FaProductHunt />} text="Produk" />
              <MenuItem icon={<FaBook />} text="Artikel" />
            </Stack>
          </Box>

          {/* Konten Utama (tengah) */}
          <Box flex="1" p={6} w={'50%'}>
            {/* Input Update Status */}
            <Card height={'100px'} bgColor={'white'} p={5}>
              <Stack direction="row" align="center">
                <Avatar
                  size="sm"
                  height="40px"
                  width="40px"
                  src="https://th.bing.com/th/id/OIP.IIJIg03KabRNrHxnTNxJzgHaJQ?w=192&h=240&c=7&r=0&o=5&dpr=1.4&pid=1.7"
                />
                <Input
                  placeholder="Apa yang Anda pikirkan?"
                  size="sm"
                  borderRadius="full"
                  bg={'gray.100'}
                  px={4}
                  mr={2}
                  height={'40px'}
                  border="1px solid gray"
                />
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: 'none' }}
                  onChange={handleFileUpload}
                />

                <IconButton
                  aria-label="Upload Gambar"
                  icon={<FaImage />}
                  size="sm"
                  colorScheme="blue"
                  onClick={handleImageClick}
                />
                <Button colorScheme="blue" size="sm">
                  Kirim
                </Button>
              </Stack>
            </Card>

            {/* Daftar Artikel */}
            <Box mt={5} p={4} bgColor={'white'} rounded={'md'} boxShadow={'md'}>
            <Card bgColor={'white'} marginTop={'15px'} w={'full'} p={2}>
    <Box mt={6} display="flex" alignItems="center">
      <Avatar
        size="md"
        src="https://th.bing.com/th/id/OIP.IIJIg03KabRNrHxnTNxJzgHaJQ?w=192&h=240&c=7&r=0&o=5&dpr=1.4&pid=1.7"
      />
      <Box ml={4}>
        <Text fontWeight={600} mb={1} color={'black'}>
          Han so Hee
        </Text>
        <Text fontSize="sm" color="gray.500">
          1 jam yang lalu {/* Ganti dengan waktu upload Anda */}
        </Text>
      </Box>
    </Box>
    <Box mt={6}>
      <Text fontWeight={600} mb={2}>
        Di Cari supplier ikan tuna segar untuk kebutuhan ekspor ikan.. kebutuhan 30 ton, silahkan tawarkan melalui wa: 087635242426.
      </Text>
      <img
        src={
          'https://4.bp.blogspot.com/-l_VdibxIiKM/VPWpwHZBdvI/AAAAAAAACNc/kZ654ZWzGNk/s1600/ikan-segar-muncar.jpg'
        }
        alt="Gambar Terbaru"
      />
    </Box>
    <Box mt={4} display="flex" marginLeft={4}>
      <Box display="flex" alignItems="center">
        <Icon as={AiOutlineLike} boxSize={4} color="gray.500"  boxSize={6}/>
        <Text fontSize="sm" ml={1} color="gray.800">
          10
        </Text>
      </Box>
      <Box display="flex" alignItems="center" marginLeft={'20px'}>
        <Icon as={BiComment} boxSize={4} color="gray.500" boxSize={6} />
        <Text fontSize="sm" ml={1} color="gray.800">
          5
        </Text>
      </Box>
      <Box display="flex" alignItems="center" marginLeft={'20px'}>
        <Icon as={BiShareAlt} boxSize={4} color="gray.500" boxSize={6} />
        <Text fontSize="sm" ml={1} color="gray.800">
          Bagikan
        </Text>
      </Box>
    </Box>
    <Box display={'flex'} alignItems={'center'} mt={5}>
      <Avatar
        size="sm"
        height="50px"
        width="50px"
        src="https://th.bing.com/th/id/OIP.IIJIg03KabRNrHxnTNxJzgHaJQ?w=192&h=240&c=7&r=0&o=5&dpr=1.4&pid=1.7"
      />
      <Input
        placeholder="tambahkan komentar"
        size="sm"
        borderRadius="full"
        bg={'gray.100'}
        px={4}
        mr={2}
        height={'40px'}
        border="1px solid gray"
        marginLeft={'8px'}
      />
      <Button colorScheme="blue" size="sm">
        komen
      </Button>
    </Box>
  </Card>

  {/* Artikel 2 di sebelah kanan */}
  <Card bgColor={'white'} marginTop={'15px'} w={'full'} p={2}>
  
  </Card>
            </Box>
          </Box>

          {/* Daftar Artikel di sebelah kanan */}
          <Box w={'30%'} p={6} bgColor={'white'}>
            {/* Artikel 1 di sebelah kanan */}
            <ArticleCard />

            {/* Artikel 2 di sebelah kanan */}
            <ArticleCard />

            {/* Artikel 3 di sebelah kanan */}
            <ArticleCard />
          </Box>
        </Box>
      </Center>
    </Box>
  );
}

// Komponen menu dengan ikon
interface MenuItemProps {
  icon: React.ReactNode;
  text: string;
}
function MenuItem({ icon, text }: MenuItemProps) {
  return (
    <Stack
      direction="row"
      align="center"
      spacing={2}
      px={4}
      py={2}
      color="black"
      _hover={{
        bg: 'gray.100',
        color: 'blue.400',
        cursor: 'pointer',
      }}
    >
      {icon}
      <Text fontSize="large" fontWeight={'bold'}>
        {text}
      </Text>
    </Stack>
  );
}

// Komponen Artikel
function ArticleCard() {
  return (
    <Card
    bgColor={'white'}
    marginTop={'15px'}
    w={'full'}
    p={2}
    style={{
      position: 'sticky',
      top: '15px',
      boxShadow: '0 4px 6px 3px rgba(173,216,230, 0.5), 0 2px 4px -1px rgba(173,216,230, 0.5)',
    }}
    >
      <Box mt={4} display="flex" alignItems="center">
        <img
          src={
            'https://4.bp.blogspot.com/-l_VdibxIiKM/VPWpwHZBdvI/AAAAAAAACNc/kZ654ZWzGNk/s1600/ikan-segar-muncar.jpg'
          }
          alt="Gambar Terbaru"
          style={{ maxWidth: '100%', maxHeight: '60px' }}
        />
        <Text fontWeight={200} fontSize="md" ml={2} color={"#00BFFF"}>
          Manfaat Mengonsumsi ikan
        </Text>
      </Box>
      <Box mt={2} p={2}>
        <Text fontWeight={100} mb={2} fontSize={"sm"}>
          ikan penuhi kebutuhan protein
        </Text>
        <Text fontSize="sm" color="blue.500" cursor="pointer">
          Baca Selengkapnya
        </Text>
      </Box>
    </Card>
  );
}

