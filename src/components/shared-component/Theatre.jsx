import Seat from "./Seat";
import {Box, Flex} from "@chakra-ui/react";
import TextedDivider from "./TextedDivider";

const Theatre = (props) => {
  const {seatMatrix, selectedSeats, handleSelectedSeat} = props;
  
  return (
    <Flex direction={'column'} display={'inline-flex'} justifyContent={'center'}>
      <img src='/img/screen-thumb.png' alt='screen' style={{marginBottom: '4rem'}} />
      {Object.keys(seatMatrix).map((row)=>(
        <div key={seatMatrix[row].id}>
          <TextedDivider price={seatMatrix[row].price}/>
          <Box display={'inline-flex'} justifyContent={'center'} width={'full'}>
            {seatMatrix[row].seats.map((seat)=>(
              <Seat
                key={seat.id}
                {...seat}
                isSelected={selectedSeats.includes(seat.id)}
                handleSelectedSeat={handleSelectedSeat}/>
            ))}
          </Box>
        </div>
      ))}
    </Flex>
  )
};

export default Theatre;
