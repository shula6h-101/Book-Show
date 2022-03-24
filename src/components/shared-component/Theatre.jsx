import Seat from "./Seat";
import {Box, Flex, Image, Tag} from "@chakra-ui/react";
import SeatDescription from "./SeatDescription";

const Theatre = (props) => {
  const {seatMatrix, selectedSeats, handleSelectedSeat} = props;
  
  return (
    <Flex direction={'column'} display={'inline-flex'} justifyContent={'center'} my='3rem'>
      <Image src={'/img/screen-thumb.png'} alt={'screen'} mb={'2rem'} />
  
      <SeatDescription/>
      {Object.keys(seatMatrix).map((row)=>(
        <div key={seatMatrix[row].id}>
          {/*<TextedDivider price={seatMatrix[row].price}/>*/}
          <Box
            display={'inline-flex'}
            position={"relative"}
            alignItems={"center"}
            justifyContent={'center'}
            width={'full'}
          >
            {seatMatrix[row].seats.map((seat)=>(
              <Seat
                key={seat.id}
                {...seat}
                price={seatMatrix[row].price}
                isSelected={selectedSeats.includes(seat.id)}
                handleSelectedSeat={handleSelectedSeat}/>
            ))}
            <Tag position={'absolute'} right={'0'}>₹ {seatMatrix[row].price}</Tag>
          </Box>
        </div>
      ))}
    </Flex>
  )
};

export default Theatre;
