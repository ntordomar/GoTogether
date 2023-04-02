import { useState } from "react";
import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import {NavBar} from "../components/NavBar";

const Notification = ({ text, onAccept, onDecline }) => {
  return (
    <Box bg="white" border="1px" borderColor="gray.300" borderRadius="md" boxShadow="sm" p={4} my={2} width="100%">
      <Flex justifyContent="space-between" alignItems="center">
        <Heading as="h3" size="md">{text}</Heading>
        <Flex>
          <Button onClick={onAccept} colorScheme="green" mr={2}>Aceptar</Button>
          <Button onClick={onDecline} colorScheme="red">Rechazar</Button>
        </Flex>
      </Flex>
      <Box mt={4}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontWeight="bold">Origen:</Text>
          <Text>Sample Origin</Text>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontWeight="bold">Destino:</Text>
          <Text>Sample Destination</Text>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontWeight="bold">Hora de Salida:</Text>
          <Text>9:00 AM</Text>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontWeight="bold">Precio Approx:</Text>
          <Text>$10.00</Text>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontWeight="bold">Conductor:</Text>
          <Text>John Doe</Text>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontWeight="bold">Pasajeros:</Text>
          <Text>0/3</Text>
        </Flex>
      </Box>
    </Box>
  );
};

const NotificationCenter = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      text: "Tenes un nuevo match de carpool!",
    },
    {
      id: 2,
      text: "Tu pedido de carpool ha sido aceptado!",
    },
    {
      id: 3,
      text: "Tu pedido de carpool ha sido aceptado!",
    },
  ]);

  const handleAccept = (id) => {
    setNotifications((notifications) =>
      notifications.filter((notification) => notification.id !== id)
    );
  };

  const handleDecline = (id) => {
    setNotifications((notifications) =>
      notifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <>
    <NavBar/>
    <Box bg="green.200" minH={1000} p={4}>
        <Center>
        <Heading as="h1" size="2xl" mb={4}>Notificaciones</Heading>
        </Center>
      {notifications.map(({ id, text }) => (
        <Notification
          key={id}
          text={text}
          onAccept={() => handleAccept(id)}
          onDecline={() => handleDecline(id)}
        />
      ))}
    </Box>
    </>
  );
};

export default NotificationCenter;
