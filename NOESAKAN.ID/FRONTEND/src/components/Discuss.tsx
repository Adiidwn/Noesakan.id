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
import { FaImage, FaHome, FaProductHunt, FaBook } from 'react-icons/fa'; // Import ikon gambar
import { BiComment, BiShareAlt } from 'react-icons/bi';
import { AiOutlineLike } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

export default function Discuss() {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate('/');
  };
  const navigateToArticle = () => {
    navigate('/DetailArticle');
  };
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
            <Link to={'/'}>
              <Text
                fontSize="xl"
                fontWeight="bold"
                color="blue.500"
                textShadow="2px 2px 4px rgba(0, 0, 0, 0.2)"
                mb={4}
              >
                NOESAKAN.ID
              </Text>
            </Link>
            <Stack
              mr={20}
              mt={5}
              spacing={2}
            >
              <Button
                onClick={navigateToHome}
                bg={'none'}
                _hover={{
                  bg: 'none',
                }}
              >
                <MenuItem
                  icon={<FaHome />}
                  text="Beranda"
                />
              </Button>
              <Button
                onClick={navigateToHome}
                bg={'none'}
                _hover={{
                  bg: 'none',
                }}
              >
                <MenuItem
                  icon={<FaProductHunt />}
                  text="Produk"
                />
              </Button>
              <Button
                onClick={navigateToArticle}
                bg={'none'}
                _hover={{
                  bg: 'none',
                }}
              >
                <MenuItem
                  icon={<FaBook />}
                  text="Artikel"
                />
              </Button>
            </Stack>
          </Box>

          {/* Konten Utama (tengah) */}
          <Box
            flex="1"
            p={6}
            w={'50%'}
          >
            {/* Input Update Status */}
            <Card
              height={'100px'}
              bgColor={'white'}
              p={5}
            >
              <Stack
                direction="row"
                align="center"
              >
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
                <Button
                  colorScheme="blue"
                  size="sm"
                >
                  Kirim
                </Button>
              </Stack>
            </Card>

            {/* Daftar Artikel */}
            <Box
              mt={5}
              p={4}
              bgColor={'white'}
              rounded={'md'}
              boxShadow={'md'}
            >
              <Card
                bgColor={'white'}
                marginTop={'15px'}
                w={'full'}
                p={2}
              >
                <Box
                  mt={6}
                  display="flex"
                  alignItems="center"
                >
                  <Avatar
                    size="md"
                    src="https://th.bing.com/th/id/OIP.IIJIg03KabRNrHxnTNxJzgHaJQ?w=192&h=240&c=7&r=0&o=5&dpr=1.4&pid=1.7"
                  />
                  <Box ml={4}>
                    <Text
                      fontWeight={600}
                      mb={1}
                      color={'black'}
                    >
                      Han so Hee
                    </Text>
                    <Text
                      fontSize="sm"
                      color="gray.500"
                    >
                      1 jam yang lalu {/* Ganti dengan waktu upload Anda */}
                    </Text>
                  </Box>
                </Box>
                <Box mt={6}>
                  <Text
                    fontWeight={600}
                    mb={2}
                  >
                    Di Cari supplier ikan tuna segar untuk kebutuhan ekspor ikan.. kebutuhan 30 ton, silahkan tawarkan melalui wa: 087635242426.
                  </Text>
                  <img
                    src={'https://4.bp.blogspot.com/-l_VdibxIiKM/VPWpwHZBdvI/AAAAAAAACNc/kZ654ZWzGNk/s1600/ikan-segar-muncar.jpg'}
                    alt="Gambar Terbaru"
                  />
                </Box>
                <Box
                  mt={4}
                  display="flex"
                  marginLeft={4}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                  >
                    <Icon
                      as={AiOutlineLike}
                      boxSize={4}
                      color="gray.500"
                    />
                    <Text
                      fontSize="sm"
                      ml={1}
                      color="gray.800"
                    >
                      10
                    </Text>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    marginLeft={'20px'}
                  >
                    <Icon
                      as={BiComment}
                      boxSize={4}
                      color="gray.500"
                    />
                    <Text
                      fontSize="sm"
                      ml={1}
                      color="gray.800"
                    >
                      5
                    </Text>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    marginLeft={'20px'}
                  >
                    <Icon
                      as={BiShareAlt}
                      boxSize={4}
                      color="gray.500"
                    />
                    <Text
                      fontSize="sm"
                      ml={1}
                      color="gray.800"
                    >
                      Bagikan
                    </Text>
                  </Box>
                </Box>
                <Box
                  display={'flex'}
                  alignItems={'center'}
                  mt={5}
                >
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
                  <Button
                    colorScheme="blue"
                    size="sm"
                  >
                    komen
                  </Button>
                </Box>
              </Card>

              {/* Artikel 2 di sebelah kanan */}
              <Card
                bgColor={'white'}
                marginTop={'15px'}
                w={'full'}
                p={2}
              ></Card>
            </Box>
          </Box>

          {/* Daftar Artikel di sebelah kanan */}
          <Box
            w={'30%'}
            p={6}
            bgColor={'white'}
          >
            {/* Artikel 1 di sebelah kanan */}
            <ArticleCard1 />

            {/* Artikel 2 di sebelah kanan */}
            <ArticleCard2 />

            {/* Artikel 3 di sebelah kanan */}
            <ArticleCard3 />
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
      <Text
        fontSize="large"
        fontWeight={'bold'}
      >
        {text}
      </Text>
    </Stack>
  );
}

// Komponen Artikel
function ArticleCard1() {
  return (
    <Link to={'/DetailArticle'}>
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
        <Box
          mt={4}
          display="flex"
          alignItems="center"
        >
          <img
            src={'https://images.unsplash.com/photo-1535443120147-89aef0b5327a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'}
            alt="Gambar Terbaru"
            style={{ maxWidth: '100%', maxHeight: '60px' }}
          />
          <Text
            fontWeight={200}
            fontSize="md"
            ml={2}
            color={'#00BFFF'}
          >
            Manfaat Mengonsumsi ikan
          </Text>
        </Box>
        <Box
          mt={2}
          p={2}
        >
          <Text
            fontWeight={100}
            mb={2}
            fontSize={'sm'}
          >
            Ikan penuhi kebutuhan protein
          </Text>
          <Text
            fontSize="sm"
            color="blue.500"
            cursor="pointer"
          >
            Baca Selengkapnya
          </Text>
        </Box>
      </Card>
    </Link>
  );
}
function ArticleCard2() {
  return (
    <Link to={'/DetailArticle'}>
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
        <Box
          mt={4}
          display="flex"
          alignItems="center"
        >
          <img
            src={'https://images.unsplash.com/photo-1587391028604-b370121a40f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'}
            alt="Gambar Terbaru"
            style={{ maxWidth: '100%', maxHeight: '60px' }}
          />
          <Text
            fontWeight={200}
            fontSize="md"
            ml={2}
            color={'#00BFFF'}
          >
            KKP Gelar Bulan Bakti Kelautan dan Perikanan
          </Text>
        </Box>
        <Box
          mt={2}
          p={2}
        >
          <Text
            fontWeight={100}
            mb={2}
            fontSize={'sm'}
          >
            Kementerian Kelautan dan Perikanan (KKP) menggelar
          </Text>
          <Text
            fontSize="sm"
            color="blue.500"
            cursor="pointer"
          >
            Baca Selengkapnya
          </Text>
        </Box>
      </Card>
    </Link>
  );
}
function ArticleCard3() {
  return (
    <Link to={'/DetailArticle'}>
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
        <Box
          mt={4}
          display="flex"
          alignItems="center"
        >
          <img
            src={'https://images.unsplash.com/photo-1487335414417-ac48b43a8cc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'}
            alt="Gambar Terbaru"
            style={{ maxWidth: '100%', maxHeight: '60px' }}
          />
          <Text
            fontWeight={200}
            fontSize="md"
            ml={2}
            color={'#00BFFF'}
          >
            Nilai Produksi Rp 2,24 T, Laut Banten Jadi Tambang Investasi Perikanan
          </Text>
        </Box>
        <Box
          mt={2}
          p={2}
        >
          <Text
            fontWeight={100}
            mb={2}
            fontSize={'sm'}
          >
            Gubernur Provinsi Banten Al Muktabar mengatakan Banten memiliki kekayaan alam
          </Text>
          <Text
            fontSize="sm"
            color="blue.500"
            cursor="pointer"
          >
            Baca Selengkapnya
          </Text>
        </Box>
      </Card>
    </Link>
  );
}
