import { useState } from "react";
import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import {NavBar} from "../components/NavBar";

const Notification = ({ text, onAccept, onDecline, origen, destino, hora, precio, conductor, pasajeros }) => {
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
          <Text>{origen}</Text>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontWeight="bold">Destino:</Text>
          <Text>{destino}</Text>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontWeight="bold">Hora de Salida:</Text>
          <Text>{hora}</Text>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontWeight="bold">Precio Approx:</Text>
          <Text>{precio}</Text>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontWeight="bold">Conductor:</Text>
          <Text>{conductor}</Text>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontWeight="bold">Pasajeros:</Text>
          <Text>{pasajeros}</Text>
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
      origen: "Teodoro Garcia 2165",
      destino: "ITBA Sede Rectorado",
      hora: "8:00 AM",
      precio: "$120",
      conductor: "Matiás Dominguez",
      pasajeros: "2/3"
    },
    {
      id: 2,
      text: "Tu pedido de carpool ha sido aceptado!",
      origen: "ITBA Sede Rectorado",
      destino: "Teodoro Garcia 2165",
      hora: "8:00 AM",
      precio: "$120",
      conductor: "Matiás Dominguez",
      pasajeros: "2/3"
    },
    {
      id: 3,
      text: "Tu pedido de carpool ha sido aceptado!",
      origen: "Rosales 2515",
      destino: "ITBA Sede Distrito Tecnológico",
      hora: "5:30 PM",
      precio: "$217",
      conductor: "Tadeo Gómez",
      pasajeros: "2/3"
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
      {notifications.map(({ id, text, origen, destino, hora, precio, conductor, pasajeros }) => (
        <Notification
          key={id}
          text={text}
          onAccept={() => handleAccept(id)}
          onDecline={() => handleDecline(id)}
          origen={origen}
          destino={destino}
          hora = {hora}
          precio = {precio}
          conductor = {conductor}
          pasajeros={pasajeros}
        />
      ))}
    </Box>
    </>
  );
};

export default NotificationCenter;
