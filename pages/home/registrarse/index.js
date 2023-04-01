import { Link, Text, Box,Stack, Heading, Button, Center, HStack, Flex, Grid, GridItem, FormControl, FormLabel, Input} from "@chakra-ui/react";
import { Component, useState } from "react";
import {Home} from "../";
const Registrarse = () => {

    return (
        <>
        <Box bg = "whiteAlpha.900" >
            <Stack>
            
                <Flex justifyContent="space-between">
                    <Heading as='h1' size='4xl' left={10} fontFamily={""} color='green.800'>
                       <Link href="/home"> GoTogether
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
        minH={"100vh"}
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
            <Heading mb={6}>Registrarse</Heading>
            <form>
            <Stack spacing={1}>
            <Box p={4}>
                                            <FormControl>
                                                <FormLabel><b>Nombre</b></FormLabel>
                                            </FormControl>
                                            <FormControl>
                                                <Input bg="whiteAlpha.900" placeholder="Ingrese su nombre" type="text" />
                                            </FormControl>
                                    </Box>
                                    <Box p={4}>
                                            <FormControl>
                                                <FormLabel><b>Apellido</b></FormLabel>
                                            </FormControl>
                                            <FormControl>
                                                <Input bg="whiteAlpha.900" placeholder="Ingrese su apellido" type="text" />
                                            </FormControl>
                                    </Box>
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
                                    <Box p={4}>
                                            <FormControl>
                                                <FormLabel><b>Confirmar Contraseña</b></FormLabel>
                                            </FormControl>
                                            <FormControl>
                                                <Input bg="whiteAlpha.900" placeholder="Confirme la contraseña" type="password" />
                                            </FormControl>
                                    </Box>
                                    <Button colorScheme="green" type="submit">Iniciar Sesión</Button>
                                </Stack>
            </form>
        </Box>
        </Flex>
        </>
    );
    };
    
export default Registrarse;