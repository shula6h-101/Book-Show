import {Box, Icon, Image} from "@chakra-ui/react";
import {BsStarFill} from "react-icons/bs";
import {useNavigate} from 'react-router-dom';
import {useAtom} from "jotai";
import {ticketAtom} from "../../../atomic-state/Booking";
import {APP_PREFIX_PATH} from "../../../constants/common";
import {movies} from "../../../data/db";

const Movies = () => {
  const navigate = useNavigate();
  const [, setTicket] = useAtom(ticketAtom)
  
  return (
    <div>
      <Box display={'inline-flex'} flexWrap={'wrap'}>
        {movies.map((movie)=>(
          <Box
            key={movie.id}
            maxW={'2xs'}
            borderWidth='1px'
            m={'2'}
            borderRadius='lg'
            overflow='hidden'
            onClick={() => {
              setTicket({movie});
              navigate(`${APP_PREFIX_PATH}/home/seat-selection/${movie.id}`)
            }}
          >
            <Image src={movie.imageUrl} alt={movie.id} h={'22.5rem'} objectFit={'cover'} />
      
            <Box p='6' display={'inline-flex'} flexDirection={'column'}>
                <Box
                  color='gray.500'
                  fontWeight='semibold'
                  letterSpacing='wide'
                  fontSize='xs'
                  textTransform='uppercase'
                  ml='2'
                >
                  {movie.genre} &bull; {movie.runTime}
                </Box>
        
              <Box
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                isTruncated
              >
                {movie.title}
              </Box>
        
              <Box color={'gray.500'}>
                {movie.lang}
              </Box>
        
              <Box display={'inline-flex'} justifyContent={'center'} mt='2' alignItems='center'>
                {Array(5)
                  .fill('')
                  .map((_, i) => (
                    <Icon
                      as={BsStarFill}
                      key={i}
                      color={i < movie.rating ? 'teal.500' : 'gray.300'}
                    />
                  ))}
                <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                  {movie.reviewCount} reviews
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </div>
  )
};

export default Movies
