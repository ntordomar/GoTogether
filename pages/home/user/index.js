import {Link, Text, Box,Stack, Heading, Button, Center, HStack, Flex, Grid, GridItem, Avatar, Spacer} from "@chakra-ui/react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    IconButton,

  } from '@chakra-ui/react'
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons'

const User = () => {
    return (
        <>
        <Box bg = "whiteAlpha.900" >
            <Stack>
            
                <Flex justifyContent="space-between">
                <Menu>
                    <MenuButton as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon />}
                    variant='outline' />
                    <MenuList>
                        <MenuItem> Hola </MenuItem>
                    </MenuList>
                </Menu>
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
        </Box>
        </>

    );
    };

export default User;
