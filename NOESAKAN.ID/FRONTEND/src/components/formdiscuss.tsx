// import { Box, Button, Input, Text } from "@chakra-ui/react";
// import { BiSolidImageAdd } from "react-icons/bi";
// import { useThreads } from "../hooks/HooksFormDiscuss";
import { Text } from "@chakra-ui/react";


export function FormDiscuss() {
  // const { handleChange, handlePost, fileInputRef, handleButtonClick } = useThreads();
  return (
    <>
    {/* <Box  mt='1.3em' paddingRight='10px' paddingLeft='10px' paddingBottom='10px' borderRadius='13px'>
      <Box>
        <Text fontWeight={"bold"} fontSize={20} py={4}>
          Update Status
        </Text>
      </Box>  
      <form onSubmit={handlePost} encType="multipart/form-data">
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Input
                  placeholder="What is happening?!"
                  name="content"
                  onChange={handleChange}
                  border='1px solid grey'
               
                />
                <Button
                  variant={"ghost"}
                  color={"brand.green"}
                  onClick={handleButtonClick}
                  border='1px solid grey'
                  marginLeft='5px'
                  mr='5px'
                 
                >
                  <BiSolidImageAdd
                    style={{
                      height: "50px",
                      width: "50px",
                    }}
                  />
                </Button>
                <Input
                  type="file"
                  name="image"
                  onChange={handleChange}
                  style={{ display: "none" }}
                  ref={fileInputRef}
                />
                <Button
                  type="submit"
                  backgroundColor={"green"}
                  color={"white"}
                  colorScheme="green"
                  fontSize={"18"}
                  width={"16%"}>Post</Button>
              </Box>
          </form>
      </Box> */}
      <Text>testttttttt</Text>
    </>
  );
}
export default FormDiscuss;
