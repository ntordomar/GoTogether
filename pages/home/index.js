import {Link, Text, Box,Stack, Heading, Button, Center, HStack, Flex, Grid, GridItem} from "@chakra-ui/react";
import { Component } from "react";
import {IniciarSesion} from "./iniciar-sesion";
import {Registrarse} from "./registrarse";

const Home = () => {
  return (
    <>
        <Box bg = "#f6e3da" >
            <Stack>
                <Flex justifyContent="space-between">
                    <Heading as='h1' size='4xl'  fontFamily={""} color='green.800'>
                        GoTogether
                    </Heading>
                    <Heading as="h1" fontSize="3xl" color="green.700" marginTop="40px" marginLeft="-350px"> <i> Juntos llegamos más lejos</i></Heading>
                    <Button colorScheme='green' top={4} right={10}>Help</Button>
                </Flex>
                <Grid>
                    <GridItem h='3' weight="100vh" bg='gray.700' /> 
                </Grid>
            </Stack>
        </Box>
        <Box bg="#bde6b6" height="100vh">
            <Center>
                
                <Stack>
                    {<Box m = "20" ></Box>}
                    <Link href="/home/iniciar-sesion">
                    <Button boxShadow="md"
      borderRadius="md"
      bg="green.800"
      color="white"
      _hover={{ bg: "green.600" }}
      _active={{ bg: "green.700" }} width="500px" height="100px" colorScheme='green' fontSize={30}>INCIAR SESIÓN</Button>
                    </Link>
                    {<Box h="100" ></Box>}
                    <Center><Text fontSize="2xl" color="green.800"><b>¿Primera vez en GoTogether?</b></Text></Center>
                    <Link href="home/registrarse">
                    <Button boxShadow="3xl"
      borderRadius="md"
      bg="green.800"
      color="white"
      _hover={{ bg: "green.700" }}
      _active={{ bg: "green.800" }}
      width="500px" type="submit" height="100px" colorScheme='green' fontSize={30}>REGISTRARSE</Button>                
                    </Link>
                </Stack>
            </Center>
        </Box>  
    </>
    
  );
}                                       
export default Home;