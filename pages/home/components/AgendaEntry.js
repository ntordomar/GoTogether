import { Button } from "@chakra-ui/react";

const AgendaEntry = ({ time }) => {
  return (
    <Button
      colorScheme="green"
      variant="outline"
      size="sm"
      width="100%"
      height="100%"
    >
      {time}
    </Button>
  );
};

export default AgendaEntry;