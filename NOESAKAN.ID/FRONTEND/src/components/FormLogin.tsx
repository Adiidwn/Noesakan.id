"use client";

import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useLogin } from "../features/auth/useLogin";
import { useNavigate } from 'react-router-dom';

export default function SplitScreen() {
  const navigate = useNavigate();
  const { handleChange, handleLogin } = useLogin();
  // const user = useSelector((state: RootState) => state.user);
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"7xl"}>Login Noesakan</Heading>
          <FormControl id="email">
            <FormLabel>Email </FormLabel>
            <Input
              onChange={handleChange}
              placeholder="Email Adress"
              name="email"
              type="email"
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Sandi</FormLabel>
            <Input
              onChange={handleChange}
              placeholder="Password"
              name="password"
              type="password"
            />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox>Remember me</Checkbox>
              <Stack pt={6}>
              <Text align={'center'} onClick={()=> navigate("/auth/login")}>
                Sudah punya akun? <Link color={'blue.400'}>Login</Link>
              </Text>
              </Stack>
            </Stack>
            <Box display={"flex"} justifyContent={"flex-end"}>
              <Text color={"blue.500"}>Forgot password?</Text>
            </Box>
            <Button
              onClick={handleLogin}
              colorScheme={"blue"}
              variant={"solid"}
            >
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1535262412227-85541e910204?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80"
          }
          style={{ filter: "brightness(0.7)" }}
        />
      </Flex>
    </Stack>
  );
}