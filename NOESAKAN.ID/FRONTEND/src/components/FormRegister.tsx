import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useHooksRegister } from "../hooks/HooksRegister";
import { AiOutlinePicture } from "react-icons/ai";

export default function FormRegister() {
  const { handleChange, handleRegister } = useHooksRegister();

  const navigate = useNavigate();
  return (
    <>
      <Box m={2} p={2} w={"96"}>
        <Box m={2} p={2}>
          <Box p={2}>
            <Text
              fontSize="45px"
              fontWeight="bold"
              color="white"
              textShadow="3px 3px 4px rgba(0, 191, 255, 0.8)"
              alignItems={"center"}
              display={"flex"}
              justifyContent={"center"}
            >
              SIGN UP
            </Text>
          </Box>
          <form onSubmit={handleRegister}>
            <FormControl p={"10px"}>
              <Box>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  name="fullname"
                  onChange={handleChange}
                  style={{
                    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                    height: "50px",
                    width: "400px",
                  }}
                />
              </Box>
              <Box>
                <FormLabel>User Name</FormLabel>
                <Input
                  type="text"
                  name="username"
                  onChange={handleChange}
                  style={{
                    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                    height: "50px",
                    width: "400px",
                  }}
                />
              </Box>
              <Box>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  style={{
                    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                    height: "50px",
                    width: "400px",
                  }}
                />
              </Box>
              <Box>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  style={{
                    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                    height: "50px",
                    width: "400px",
                  }}
                />
              </Box>
              <Box>
                <FormLabel>Alamat</FormLabel>
                <Input
                  type="text"
                  name="Alamat"
                  onChange={handleChange}
                  style={{
                    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                    height: "50px",
                    width: "400px",
                  }}
                />
              </Box>
              <Box>
                <FormLabel>Image</FormLabel>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer", // Menambahkan tanda kursor ketika label diklik
                  }}
                >
                  <Input
                    type="file"
                    name="image"
                    onChange={handleChange}
                    style={{
                      display: "none", // Sembunyikan input tipe file asli
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "5px",
                      // border: '1px solid #ccc',
                      boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                      height: "50px",
                      width: "400px",
                      // Menambahkan border pada kotak input
                    }}
                  >
                    <AiOutlinePicture
                      size={40}
                      style={{ marginRight: "10px" }}
                    />
                    <span>Upload Image</span>
                  </div>
                </label>
              </Box>
              <Box mt={2}>
                <Button
                  w={"80"}
                  borderRadius={20}
                  bgColor={"white"}
                  color={"#14003B"}
                  width={"400px"}
                  mt={"10px"}
                  type="submit"
                >
                  Create
                </Button>
              </Box>
              <Flex p={4} gap={2}>
                <Text mt={5}>Already have account?</Text>
                <Text
                  color={"white"}
                  fontWeight={"bold"}
                  mt={5}
                  cursor={"pointer"}
                  onClick={() => navigate("/auth/login")}
                >
                  Login
                </Text>
              </Flex>
            </FormControl>
          </form>
        </Box>
      </Box>
    </>
  );
}
