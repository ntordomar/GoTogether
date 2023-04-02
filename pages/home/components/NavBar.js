import BurgerMenu from "./BurgerMenu";
import { Box, Button, Flex, Text, Stack, Heading, Link, IconButton, Avatar, Grid, GridItem } from '@chakra-ui/react';
import { BellIcon } from "@chakra-ui/icons";

export function NavBar() {
  return (
    <>
    <Box bg = "#f6e3da" >
            <Stack>
                <Flex justifyContent="space-between">
                <BurgerMenu />
                    <Heading as='h1' size='3xl'  fontFamily="sans-serif" color='green.800'>
                        <Link href="/home">
                        GoTogether
                        </Link>
                    </Heading>
                    <Box>
                    <Link href="/home/notificaciones">
                    <IconButton fontSize="5xl"
                        icon={<BellIcon background="#f6e3da"/>}
                        top={5}
                        right={5}
                    />
                    </Link>
                    <Avatar fontSize="5x1" top='15px' right='10px' bg='teal.500' />
                    </Box>
                </Flex>
                <Grid>
                    <GridItem h='3' weight="100vh" bg='green.800' /> 
                </Grid>
            </Stack>
        </Box>
        
        </>
  )
}

