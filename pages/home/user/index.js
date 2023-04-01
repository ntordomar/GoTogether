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
            <Link href="/home/user/location">
            <Button colorScheme="teal" variant="outline" size="lg" left={10} top={10}>Cambiar ubicacion</Button>
            </Link>
            <Spacer />
        <TableContainer>
            <Table variant='striped' colorScheme='teal'>
                <TableCaption>Imperial to metric conversion factors</TableCaption>
                <Thead>
                <Tr>
                    <Th>To convert</Th>
                    <Th>into</Th>
                    <Th isNumeric>multiply by</Th>
                </Tr>
                </Thead>
                <Tbody>
                <Tr>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td isNumeric>25.4</Td>
                </Tr>
                <Tr>
                    <Td>feet</Td>
                    <Td>centimetres (cm)</Td>
                    <Td isNumeric>30.48</Td>
                </Tr>
                <Tr>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td isNumeric>0.91444</Td>
                </Tr>
                </Tbody>
                <Tfoot>
                <Tr>
                    <Th>To convert</Th>
                    <Th>into</Th>
                    <Th isNumeric>multiply by</Th>
                </Tr>
                </Tfoot>
            </Table>
            </TableContainer>
        </Box>
        </>

    );
    };

export default User;
