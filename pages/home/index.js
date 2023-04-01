import {Link, Text, Box,Stack, Heading, Button, Center, HStack, Flex, Grid, GridItem} from "@chakra-ui/react";
import { Component } from "react";
import {IniciarSesion} from "./iniciar-sesion";
import {Registrarse} from "./registrarse";

const Home = () => {
  return (
    <>
        <Box bg = "whiteAlpha.900" >
            <Stack>
            
                <Flex justifyContent="space-between">
                    <Heading as='h1' size='4xl' left={10} fontFamily={""} color='green.800'>
                        GoTogether
                    </Heading>
                    <Button colorScheme='green' top={4} right={10}>Help</Button>
                </Flex>
                <Grid>
                    <GridItem h='3' weight="100vh" bg='gray.700' /> 
                </Grid>
            </Stack>
        </Box>
        <Box bg="green.300" height="100vh">
            <Center>
                <Stack>
                    {<Box m = "20" ></Box>}
                    <Link href="/home/iniciar-sesion">
                    <Button width="500px" height="100px" colorScheme='green' fontSize={30}>INCIAR SESIÓN</Button>
                    </Link>
                    {<Box h="100" ></Box>}
                    <Center><Text fontSize="2xl" color="white">¿Primera vez en GoTogether?</Text></Center>
                    <Link href="/home/registrarse">
                    <Button width="500px" height="100px" colorScheme='green' fontSize={30}>REGISTRARSE</Button>                
                    </Link>
                </Stack>
            </Center>
        </Box>  
    </>
    
  );
}                                       
export default Home;