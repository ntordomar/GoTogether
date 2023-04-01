import { Box,Stack, Input, Button, Center, HStack } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
   <Box bg = "blue">
        

    <Stack>
        <Center>
        <Input placeholder='Paz pete' /> 
        </Center>
        <Button colorScheme='teal'>Enviar</Button>
        <Center>
            <HStack>
                <Button colorScheme='blue'>Enviar</Button>
                <Button colorScheme='red'>Enviar</Button>
                <Button colorScheme='pink'>Enviar</Button>
            </HStack>
        </Center>
        </Stack>

        
    </Box>

    
    </>
  );
}                                       
export default Home;