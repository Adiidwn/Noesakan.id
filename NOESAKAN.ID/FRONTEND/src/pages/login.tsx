import FormLogin from "../components/FormLogin";
import { Grid, GridItem } from "@chakra-ui/react";

export function Login() {
 const backgroundImageUrl = 'https://images.unsplash.com/photo-1595009901108-41259ec1b3f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';
  return (
    <>
      <Grid   
      >
        <GridItem>
          <FormLogin />
        </GridItem>
      </Grid>
    </>
  );
}
