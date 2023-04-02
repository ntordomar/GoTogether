import {IconButton ,Link, Text, ButtonGroup, Box,Stack, Heading, Button, Center, HStack, Flex, Grid, GridItem, Avatar, Spacer} from "@chakra-ui/react";

import LocationSelector from "./location";
import Agenda from "../components/Agenda";
import { NavBar } from "../components/NavBar";
import { Component } from "react";


const User = () => {
    const handleLocationSelect = (lat, lng) => {
        console.log(`Latitud: ${lat}, Longitud: ${lng}`);
    };
      

    return (
        <>
        <NavBar/>
            <Box bg="#bde6b6" minH="300px">
            <br/>
            <HStack>
                <Heading as='h3' size='2xl' left={10} fontFamily={""} color='green.800'>
                        Bienvenido Juan!
                </Heading>
                
            </HStack>
            <br/>
        
            <HStack>
                <Box p='2'>
                    <Text left='45' fontSize="xl" color='green.800'><b>Tu dirección de origen</b></Text>
                </Box>
                <Link href="/home/user/location">
                    <Button colorScheme="teal" variant="outline" size="lg" left={30} top={1}>Cambiar ubicacion</Button>
                </Link>
            </HStack>

            
            <LocationSelector onLocationSelect={handleLocationSelect(LocationSelector.send)} />

            <br/>
                    <br/>
                    <br/>
                    <br/>
                

                <Stack>
                    <Box>
                        <Text fontSize="xl" whiteSpace="pre-wrap" color='green.800'> <b>            Seleccione sus horarios en ITBA</b></Text>
                        </Box>
                        <Agenda/>
                        <br/>
                </Stack>
                
                </Box>
               
        </>

    );
    };


export default User;
