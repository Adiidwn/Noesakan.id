import { Grid, GridItem } from "@chakra-ui/react";
import FormRegister from "../components/FormRegister";

export default function Register() {
  const ImageUrl = 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
  return (
    <>
      <Grid 
       >
        <GridItem></GridItem>
        <GridItem>
          <FormRegister />
        </GridItem>
        <GridItem></GridItem>
      </Grid>
    </>
  );
}
