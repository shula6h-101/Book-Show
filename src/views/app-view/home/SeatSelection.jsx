import {useEffect} from "react";
import {Button, Flex, Heading} from "@chakra-ui/react";
import Theatre from "../../../components/shared-component/Theatre";
import {useAtom} from "jotai";
import {ticketAtom} from "../../../atomic-state/Booking";
import {useNavigate, useParams} from "react-router-dom";
import {APP_PREFIX_PATH} from "../../../constants/common";
import {movies, seatMatrix} from "../../../data/db";


const SeatSelection = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [ticket, setTicket] = useAtom(ticketAtom);
  
  const getDetails = () => {
    if(!params.movieId){
      navigate(APP_PREFIX_PATH);
    }else{
      setTicket({movie: movies.filter((movie) => movie.id === params.movieId)[0]});
    }
  };
  
  useEffect(()=>{
    getDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const handleSelectedSeat = (seatId, price) => {
    const isSelected = ticket.selectedSeats.includes(seatId);
    if (isSelected) {
      setTicket({selectedSeats: ticket.selectedSeats.filter((id)=> id !== seatId)});
      setTicket({totalPrice: (ticket.totalPrice - price)});
    } else {
      setTicket({selectedSeats: [...ticket.selectedSeats, seatId]});
      setTicket({totalPrice: (ticket.totalPrice + price)});
    }
  }
  
  return (
    <Flex display={"inline-flex"} flexDirection={'column'} >
      <Heading
        display={'inline'}
        as='h2'
        size='2xl'
        color={'gray.600'}
        borderWidth='2px'
        borderRadius='xl'
        mt='7'
      >
        {ticket.movie?.title}
      </Heading>
      <Theatre
        seatMatrix={seatMatrix}
        selectedSeats={ticket.selectedSeats}
        handleSelectedSeat={handleSelectedSeat}
      />
      <Button
        px={4}
        w={'fit-content'}
        alignSelf={'center'}
        fontSize={'sm'}
        rounded={'full'}
        bg={'blue.400'}
        disabled={!ticket.selectedSeats.length}
        color={'white'}
        boxShadow={
          '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
        }
        _hover={{
          bg: 'blue.500',
        }}
        _focus={{
          bg: 'blue.500',
        }}
        onClick={() => navigate(`${APP_PREFIX_PATH}/home/ticket-booking`)}
      >
        Confirm Selection
      </Button>
    </Flex>
  )
};

export default SeatSelection;
