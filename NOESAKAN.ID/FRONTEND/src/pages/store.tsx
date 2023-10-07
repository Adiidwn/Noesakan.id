import { Grid, GridItem } from "@chakra-ui/react";
import FormCreateProduct from "../components/cardProduct copy";

export default function StorePage() {
  const ImageUrl = 'https://images.unsplash.com/photo-1498654200943-1088dd4438ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  return (
    <>
      <Grid 
       >
        <GridItem></GridItem>
        <GridItem>
          <FormCreateProduct />
        </GridItem>
        <GridItem></GridItem>
      </Grid>
    </>
  );
}
