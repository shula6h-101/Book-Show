import {useEffect} from "react";
import {useAtom} from "jotai";
import {ticketAtom} from "../../../atomic-state/Booking";
import {useNavigate} from "react-router-dom";
import Countdown from "react-countdown";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  Stack,
  Stat,
  StatHelpText,
  StatNumber,
  Tag,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import {APP_PREFIX_PATH} from "../../../constants/common";
import {RESET} from "jotai/utils";
import {ticketsAtom} from "../../../atomic-state/Tickets";

const TicketBooking = () => {
  const navigate = useNavigate();
  const [, setAllTickets] = useAtom(ticketsAtom);
  const [ticket, setTicket] = useAtom(ticketAtom);
  
  const onSessionExpire = ({completed}) => {
    if(completed){
      alert('Session Expired!');
      navigate(`${APP_PREFIX_PATH}/home/seat-selection/${ticket.movie.id}`);
      setTicket({selectedSeats: [], totalPrice: 0});
    }
  }
  
  const renderer = ({ minutes, seconds }) => {
    return <span>{minutes}:{seconds}</span>;
  };
  
  const confirmBooking = () => {
    setTimeout(()=>{
      alert('Booking Successful!');
      setAllTickets(ticket);
      setTicket(RESET);
      navigate(APP_PREFIX_PATH);
    },2000)
  }
  
  useEffect(()=>{
    if(!ticket.selectedSeats.length){
      navigate(-1)
    }
  })
  
  return (
    <div>
      <Stack
        direction={{ base: 'column', xl: 'row' }}
        alignItems={'center'}
      >
        <Box
          key={ticket.movie?.id}
          maxW={'3xs'}
          borderWidth='1px'
          m={'2'}
          alignSelf={'center'}
          borderRadius='lg'
          overflow='hidden'
        >
          <Image src={ticket.movie?.imageUrl} alt={ticket.movie?.id} objectFit={'cover'} />
        </Box>
        <Box display={'inline-flex'} flexDirection={'column'} alignSelf={'center'} minW={'xs'} maxW={'xs'} borderWidth={'2px'} borderRadius={'lg'}>
          <Heading as='h4'>{ticket.movie?.title}</Heading>
          <Stat>
            <StatNumber>₹ {ticket.totalPrice}</StatNumber>
            <StatHelpText color='gray.600'>Selected Seats - {ticket.selectedSeats.length}</StatHelpText>
          </Stat>
          <span>
          {ticket.selectedSeats.map((seat)=>(
            <Tag m={'1'} key={seat}>{seat}</Tag>
          ))}
        </span>
        </Box>
        <Flex
          align={'center'}
          justify={'center'}
        >
          <Stack spacing={8} mx={'auto'} maxW={'lg'} px={6}>
            <Box
              bg={useColorModeValue('white', 'gray.700')}
            >
              <Text color={'red.600'} fontWeight={'bold'} m={'3'}>
                Session will expire in
                <Tag ml={'1'}>
                  <Countdown
                    date={Date.now() + 10000}
                    renderer={renderer}
                    onComplete={onSessionExpire}
                  />
                </Tag>
              </Text>
              <Stack spacing={4}>
                <HStack>
                  <Box>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName">
                      <FormLabel>Last Name</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl id="cardNumber" isRequired>
                  <FormLabel>Card Number</FormLabel>
                  <Input type="number" />
                </FormControl>
                <FormControl id="pin" isRequired>
                  <FormLabel>Pin</FormLabel>
                  <InputGroup>
                    <Input type='password' />
                  </InputGroup>
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                    loadingText="Submitting"
                    px={4}
                    w={'fit-content'}
                    alignSelf={'center'}
                    fontSize={'sm'}
                    rounded={'full'}
                    bg={'blue.400'}
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
                    onClick={() => confirmBooking()}
                  >
                    Confirm Booking
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </Stack>
    </div>
  )
};

export default TicketBooking;
