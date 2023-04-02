import BurgerMenu from "../user/BurgerMenu";
import { Box, Button, Flex, Text, Stack, Heading, Link, IconButton, Avatar, Grid, GridItem } from '@chakra-ui/react';
import { BellIcon } from "@chakra-ui/icons";

const Contactos = () => {
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
        
        <Box bg = "green.300" minH="908">
        </Box>
        </>
  )
}

export default Contactos;

