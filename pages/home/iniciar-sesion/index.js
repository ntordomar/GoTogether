import {Input,Link, Text, Box,Stack, Heading, Button, Center, HStack, Flex, Grid, GridItem, FormControl, FormLabel,} from "@chakra-ui/react";
import { Component } from "react";
import {Home} from "../";
const IniciarSesion = () => {
    return (
        <>
        
        <Box bg = "whiteAlpha.900" >
            <Stack>
            
                <Flex justifyContent="space-between">
                    <Heading as='h1' size='4xl' left={10} fontFamily={""} color='green.800'>
                        <Link href="/home">
                        GoTogether
                        </Link>
                    </Heading>
                    <Button colorScheme='green' top={4} right={10}>Help</Button>
                </Flex>
                <Grid>
                    <GridItem h='3' weight="100vh" bg='gray.700' /> 
                </Grid>
            </Stack>
        </Box>
        <Flex
        bg="green.300"
        w="100%"
        h="100vh"
        alignItems="center"
        justifyContent="center"
        >
        <Box
            bg="white"
            w="400px"
            p={12}
            borderRadius={8}
            boxShadow="lg"
        >
            <Heading mb={6}>Iniciar Sesión</Heading>
            <form>
            <Stack spacing={1}>
                                    <Box p={4}>
                                            <FormControl>
                                                <FormLabel><b>Correo</b></FormLabel>
                                            </FormControl>
                                            <FormControl>
                                                <Input bg="whiteAlpha.900" placeholder="Ingrese su correo" type="email" />
                                            </FormControl>
                                    </Box>
                                    <Box p={4}>
                                            <FormControl>
                                                <FormLabel><b>Contraseña</b></FormLabel>
                                            </FormControl>
                                            <FormControl>
                                                <Input bg="whiteAlpha.900" placeholder="Ingrese su contraseña" type="password" />
                                            </FormControl>
                                    </Box>
                                    <Button colorScheme="green" type="submit">Iniciar Sesión</Button>
                                </Stack>
            </form>
        </Box>
        </Flex>
        </>
    )
}

export default IniciarSesion;