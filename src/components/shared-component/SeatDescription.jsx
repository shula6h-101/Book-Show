import {Box, Text} from "@chakra-ui/react";
import Seat from "./Seat";

const SeatDescription = () => {
  return (
    <Box
      pr={2}
      mb={3}
      display={"inline-flex"}
      alignSelf={'center'}
      width={'fit-content'}
      borderWidth='2px'
      borderRadius='lg'
    >
      <Text color='gray.500'><Seat isOccupied/>Occupied</Text>
      <Text color='gray.500'><Seat isSelected/>Selected</Text>
      <Text color='gray.500'><Seat/>Available</Text>
    </Box>
  )
}

export default SeatDescription;
