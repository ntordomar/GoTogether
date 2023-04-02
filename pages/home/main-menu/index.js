import {Badge, Link, Text, Box,Stack, Heading, Button, Center, HStack, Flex, Grid, GridItem, Avatar, Spacer} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon, AddIcon, ExternalLinkIcon, RepeatIcon,EditIcon } from '@chakra-ui/icons'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

import { Menu, MenuButton, MenuList, MenuItem, MenuDivider, IconButton } from "@chakra-ui/react"
import BurgerMenu from "../user/BurgerMenu";

  const MainMenu = ({ trips }) => {

    return (
        <>
        <Box bg = "whiteAlpha.900" >
            <Stack>
            
                <Flex justifyContent="space-between">
                <BurgerMenu />
                    <Heading as='h1' size='4xl' left={1} fontFamily={""} color='green.800'>
                        <Link href="/home">
                        GoTogether
                        </Link>
                    </Heading>
                    
                    <Avatar top='20px' right='10px' bg='teal.500' />
                </Flex>
                <Grid>
                    <GridItem h='3' weight="100vh" bg='gray.700' /> 
                </Grid>
            </Stack>
        </Box>
        <Box bg = "green.300" minH="400">
                <Center>
                    <Heading as='h1' size='4xl' fontFamily={""} color='green.700'>
                        Mis Viajes
                    </Heading>
                </Center>
            <Center>
                <Stack spacing={4} p={4}>
                    {trips.map((trip, index) => (
                        <Box key={index} bg="white" p={4} borderRadius="md">
                            <Text fontSize="xl" fontWeight="bold">
                                {trip.formattedDate}
                            </Text>
                            <Stack direction="row" spacing={4} mt={2}>
                                <Box>
                                    <Text fontWeight="bold">Origen</Text>
                                    <Text>{trip.origin}</Text>
                                </Box>
                                <Box>
                                    <Text fontWeight="bold">Destino</Text>
                                    <Text>{trip.destination}</Text>
                                </Box>
                                <Box>
                                    <Text fontWeight="bold">Hora de Salida</Text>
                                    <Text>{trip.departureHour}</Text>
                                </Box>
                                <Box>
                                    <Text fontWeight="bold">Precio Aprox.</Text>
                                    <Text>{trip.approxPrice}</Text>
                                </Box>
                                <Box>
                                    <Text fontWeight="bold">Conductor</Text>
                                    <Text>{trip.driver.name}</Text>
                                    <Badge colorScheme="green">{trip.driver.rating}</Badge>
                                </Box>
                                <Box>
                                    <Text fontWeight="bold">Pasajeros</Text>
                                    {trip.passengers.map((passenger, i) => (
                                    <Box key={i}>
                                        <Text>{passenger.name}</Text>
                                        <Badge colorScheme="green">{passenger.rating}</Badge>
                                    </Box>
                                ))}
                                </Box>
                            </Stack>
                        </Box>
                    ))}
                 </Stack>
            </Center>
         </Box>
        </>

    );
  };

  export async function getStaticProps() {
    const trips = await import("../trips.json").then((m) => m.default);
    return { props: { trips } };
    }

    export default MainMenu;
