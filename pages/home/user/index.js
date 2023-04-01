import {Link, Text, Box,Stack, Heading, Button, Center, HStack, Flex, Grid, GridItem, Avatar, Spacer} from "@chakra-ui/react";
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
import LocationSelector from "./location";
import Menu from "./Menu";

const User = () => {
    return (
        <>
        <Box bg = "whiteAlpha.900" >
            <Stack>
            
                <Flex justifyContent="space-between">
                {/* <Menu>
                    <MenuButton as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon />}
                    variant='outline' /> */}
                    {/* <MenuList>
                        <MenuItem icon={<AddIcon />} command='⌘T'>
                        New Tab
                        </MenuItem>
                        <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
                        New Window
                        </MenuItem>
                        <MenuItem icon={<RepeatIcon />} command='⌘⇧N'>
                        Open Closed Tab
                        </MenuItem>
                        <MenuItem icon={<EditIcon />} command='⌘O'>
                        Open File...
                        </MenuItem>
                    </MenuList>
                </Menu> */}
                <Menu />
                    <Heading as='h1' size='4xl' left={10} fontFamily={""} color='green.800'>
                        <Link href="/home">
                        GoTogether
                        </Link>
                    </Heading>
                    
                    <Avatar bg='teal.500' />
                </Flex>
                <Grid>
                    <GridItem h='3' weight="100vh" bg='gray.700' /> 
                </Grid>
            </Stack>
        </Box>
            <Box bg="green.300" height="100vh">
            <HStack>
                <Heading as='h3' size='3xl' left={10} fontFamily={""} color='green.800'>
                        Bienvenido Usuario
                </Heading>
                <Spacer />
                
            </HStack>

            <Link href="/home/user/location">
            <Button colorScheme="teal" variant="outline" size="lg" left={10} top={10}>Cambiar ubicacion</Button>
            </Link>
            <LocationSelector/>
            <Spacer />
        
        </Box>
        </>

    );
    };

export default User;
