import { Link, Text, Box,Stack, Heading, Button, Center, HStack, Flex, Grid, GridItem, FormControl, FormLabel, Input, Checkbox} from "@chakra-ui/react";
import { Component, useState } from "react";
import {Home} from "../";

const Registrarse = () => {

    return (
        <>
        <Box bg = "#f6e3da" >
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
        bg="#bde6b6"
        w="100%"
        h="100vh"
        minH={"100vh"}
        alignItems="center"
        justifyContent="center"
        >
        <Box
            bg="#f6e3da"
            w="400px"
            p={8}
            borderRadius={12}
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
                    <Box>
                        <FormControl>
                            <FormLabel><b>Fecha de nacimiento</b></FormLabel>
                        </FormControl>
                        <FormControl>
                            <Input bg="whiteAlpha.900" placeholder="YYYY/MM/DD" />
                        </FormControl>
                    </Box>
                    <Checkbox borderColor="#000000" spacing='1rem'>Tengo auto</Checkbox>
                    <Link href="/home/user">
                    <Button colorScheme="green" >Registrarse</Button>
                    </Link>
                </Stack>
            </form>
        </Box>
        </Flex>
        </>
    );
    };
    
export default Registrarse;