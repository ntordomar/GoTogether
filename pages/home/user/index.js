import {IconButton ,Link, Text, Box,Stack, Heading, Button, Center, HStack, Flex, Grid, GridItem, Avatar, Spacer} from "@chakra-ui/react";
// import {
//     Menu,
//     MenuButton,
//     MenuList,
//     MenuItem,
//     MenuItemOption,
//     MenuGroup,
//     MenuOptionGroup,
//     MenuDivider,
//     IconButton,

//   } from '@chakra-ui/react'
import { ChevronDownIcon, HamburgerIcon, AddIcon, ExternalLinkIcon, RepeatIcon,EditIcon, BellIcon } from '@chakra-ui/icons'
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
import LocationSelector from "./location";
import BurgerMenu from "./BurgerMenu";
import Agenda from "./Agenda";
import { Wrap, WrapItem } from '@chakra-ui/react'
import {Notificaciones} from "../notificaciones";
const User = () => {
    return (
        <>
        <Box bg = "whiteAlpha.900" >
            <Stack>
                <Flex justifyContent="space-between">
                <BurgerMenu />
                    <Heading as='h1' size='4xl'  fontFamily={""} color='green.800'>
                        <Link href="/home">
                        GoTogether
                        </Link>
                    </Heading>
                    <Box>
                    <Link href="/home/notificaciones">
                    <IconButton fontSize="6xl"
                        icon={<BellIcon />}
                        top={5}
                        right={5}
                    />
                    </Link>
                    <Avatar top='20px' right='10px' bg='teal.500' />
                    </Box>
                </Flex>
                <Grid>
                    <GridItem h='3' weight="100vh" bg='gray.700' /> 
                </Grid>
            </Stack>
        </Box>
            <Box bg="green.300" minH="300px">
            <HStack>
                <Heading as='h3' size='3xl' left={10} fontFamily={""} color='green.800'>
                        Bienvenido Usuario
                </Heading>
                <br/>
                <br/>
                <br/>
                
            </HStack>
        
                <HStack spacing='24px'  >
                    <Box>     
                    <Text left='45' fontSize="xl" ><b>Tu dirección de origen</b></Text>
                    </Box>
                    <Box alignContent="right">
                    <Link href="/home/user/location">
                    <Button colorScheme="teal" variant="outline" size="lg" left={10} top={1}>Cambiar ubicacion</Button>
                    </Link>
                    </Box>
                </HStack>
            
                <LocationSelector/>
                

                <Stack>
                    <br/>
                    <br/>
                    <br/>
                    <Box>
                        <Text fontSize="xl" whiteSpace="pre-wrap"> <b>Tus horarios en ITBA</b></Text>
                        </Box>
                        <Agenda/>
                        <br/>
                </Stack>
                
                </Box>
               
        </>

    );
    };

export default User;
