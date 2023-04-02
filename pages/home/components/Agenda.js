import { Box, Flex, Text, Button} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { myUser } from "../../../my-user.json";

const Agenda = () => {
  const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
  const hours = ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  const [selectedBlocks, setSelectedBlocks] = useState([]); // selectedBlocls es un array vacio. setSelectedBlocks
  const [user, setUser] = useState(myUser);
  // useEffect(() => {

  //   const fetchData = async () => {
  //   const user = await fetch("/api/hello");
  //   console.log(" userrrrrr" , user.json());
  //   setUser(user.value);
  //   }
  //   fetchData();
    
  // }, []);


  const handleBlockClick = (dayIndex, hourIndex) => {
    const blockIndex = selectedBlocks.findIndex(block => block.dayIndex === dayIndex && block.hourIndex === hourIndex);
    if (blockIndex >= 0) {
      setSelectedBlocks(selectedBlocks.filter((_, index) => index !== blockIndex));
    } else {
      const selectedOption = prompt("Selecciona una opción: SDR, SDT o SDF");
      if(selectedOption!= "SDR" && selectedOption!= "SDT"&&selectedOption!= "SDF" ) {
        alert("Opción no válida");
        return;
      }
      // const updatedSchedule = [...user.schedule];
      // updatedSchedule[hourIndex][dayIndex] = selectedOption;
      // setUser({ ...user, schedule: updatedSchedule });
      setSelectedBlocks([...selectedBlocks, { dayIndex, hourIndex, selectedOption }]);
      //write user to file
      // const res = await fetch("/api/save", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(user),
      // });
      // const data = await res.json();
      // console.log(data);

      //myUser.schedule = updatedSchedule;
      //console.log(myUser);
    }
  };

  
  const isBlockSelected = (dayIndex, hourIndex) => {
    return selectedBlocks.some(block => block.dayIndex === dayIndex && block.hourIndex === hourIndex);
  };

  const getBlockColor = (dayIndex, hourIndex) => {
    if (isBlockSelected(dayIndex, hourIndex)) {
      return "rgba(224, 190, 145, 1)";
    } else {
      return "#f6e3da";
    }
  };

  return (
    <Box w="100%" bg="green.300">
      <Flex>
        <Box w="50px" bg="#f6e3da"></Box>
        {days.map((day, dayIndex) => (
          <Box key={dayIndex} flex="1" bg="green.800" borderRight={dayIndex < days.length - 1 ? "1px solid gray" : "none"} userSelect="auto">
            <Text textAlign="center">{day}</Text>
          </Box>
        ))}
      </Flex>
      <Flex>
        <Box w="50px" bg="green.800" h="100%">
          {hours.map((hour, hourIndex) => (
            <Box key={hourIndex} h="calc(100%/15)" borderBottom="1px solid gray" userSelect="auto">
              <Text textAlign="center">{hour}</Text>
            </Box>
          ))}
        </Box>
        {days.map((day, dayIndex) => (
          <Box key={dayIndex} flex="1" bg="green.00" borderRight={dayIndex < days.length - 1 ? "1px solid gray" : "none"} userSelect="auto">
            {hours.map((hour, hourIndex) => (
              <Box key={hourIndex} h="calc(100%/15)" borderBottom="1px solid gray" bg={getBlockColor(dayIndex, hourIndex)} onClick={() => handleBlockClick(dayIndex, hourIndex)}>
                {isBlockSelected(dayIndex, hourIndex) && <Text fontSize="sm" textAlign="center">{selectedBlocks.find(block => block.dayIndex === dayIndex && block.hourIndex === hourIndex).selectedOption}</Text>}
              </Box>
            ))}
          </Box>
        ))}
      

      </Flex>
      <Button>
        Guardar
      </Button>
    </Box>

  ); 

};

export default Agenda;
