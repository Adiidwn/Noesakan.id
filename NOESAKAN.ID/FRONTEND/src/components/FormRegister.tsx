'use client'

import {
  Box,
  Stack,
  Heading,
  Container,
  Input,
  Button,
  SimpleGrid,
  useBreakpointValue,
  IconProps,
  Icon,
  Card,
} from '@chakra-ui/react'


const Blur = (props: IconProps) => {
  return (
    <Icon
      width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <circle cx="71" cy="61" r="111" fill=" #f785ff" />
      <circle cx="244" cy="106" r="139" fill="#fa8cff" />
      <circle cy="291" r="139" fill="#a953ff" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#c652ff" />
      <circle cx="196.5" cy="317.5" r="101.5" fill=" #717afd" />
      <circle cx="70.5" cy="458.5" r="101.5" fill=" #1740f4" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  )
};

const handleFileUpload = (event: any) => {
  const selectedFile = event.target.files[0];
  console.log('File yang diunggah:', selectedFile);
};


const handleImageClick = () => {
  const fileInput = document.getElementById('fileInput');
  fileInput?.click();
};


export default function JoinOurTeam() {
  return (
    <Box position={'relative'}>
      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 8, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}>
        <Stack spacing={{ base: 10, md: 20 }}>
        <Heading
  color={"#3ed2d5"}
  ml={"30px"}
  lineHeight={1.1}
  fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
>
  <span
    className="animated-text"
    style={{
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      display: 'inline-block',
    }}
  >
   
  </span>
  <span className="noesakan-id falling-text">NOESAKAN.ID</span>
</Heading>

<style >{`
 /* CSS */
 @keyframes falling {
   0% {
     transform: translateY(-100px);
     opacity: 0;
   }
   100% {
     transform: translateY(0);
     opacity: 1;
   }
 }
 
 .falling-text {
   animation: falling 2s ease-in-out forwards;
   animation-delay: 1s;
 }
 

 
`}</style>


        </Stack>
        <Card  
         boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
         bgGradient="linear(to-t, #f06, #0c0, #00f)"
         bgClip="text"
         color="transparent">
        <Stack
          bg={'gray.50'}
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}>
          <Stack spacing={4}>
            <Heading
               color={"#3ed2d5"}
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
              textShadow="0 2px 4px rgba(0,0,128, 0.4)">
             Daftar Akun
            </Heading>
          </Stack>
          <Box as={'form'} mt={10}>
            <Stack spacing={4}>
              <Input
                placeholder="Nama"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
              <Input
                placeholder="UserName"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
              <Input
                placeholder="firstname@lastname.io"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
              <Input
                placeholder="Phone Number"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
              <Input
                placeholder="Alamat"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
              <Input
                placeholder="Password"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
              <Input
          type="file"
          id="fileInput"
          display="none" 
          onChange={handleFileUpload}
/>
              <Button fontFamily={'heading'} bg={'gray.200'} color={'gray.800'}  onClick={handleImageClick}>
                Upload Foto
              </Button>
            </Stack>
            <Button
              fontFamily={'heading'}
              mt={8}
              w={'full'}
              bgColor={"#2799fc"}
              bgGradient="linear(to-r, red.400,pink.400)"
              color={'white'}
              _hover={{
                bgGradient: 'linear(to-r, red.400,pink.400)',
                boxShadow: 'xl',
                
              }}>
              Register
            </Button>
          </Box>
          form
        </Stack>
        </Card>
      </Container>
      <Blur position={'absolute'} top={-10} left={-10} style={{ filter: 'blur(70px)' }} />
    </Box>
  )
}