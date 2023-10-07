import { Box, Flex, Input, Text } from '@chakra-ui/react';
import { PiFishFill } from 'react-icons/pi';
import { GiCirclingFish } from 'react-icons/gi';

export default function Search() {
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      backgroundColor="rgba(255, 255, 255, 0.5)"
      height={'40px'}
      borderRadius={10}
    >
      <Flex
        w={'100%'}
        alignItems={'center'}
        justifyContent={'space-between'}
        px={2}
      >
        <Flex
          alignItems={'center'}
          gap={1}
        >
          <PiFishFill fontSize={'25px'} />
          <Input
            type="text"
            placeholder="Mau makan ikan apa hari ini?"
            color={'black'}
            border={'none'}
            w={'400px'}
          />
        </Flex>
        <GiCirclingFish fontSize={'25px'} />
      </Flex>
    </Box>
  );
}
