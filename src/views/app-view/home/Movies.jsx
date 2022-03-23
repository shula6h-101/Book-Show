import {Box, Icon, Image} from "@chakra-ui/react";
import {BsStarFill} from "react-icons/bs";

const Movies = () => {
  const movies = [
    {
      imageUrl: '/img/knives_out.png',
      name: 'knives_out',
      genre: 'Mystery/Comedy',
      runTime: '2h 10m',
      title: 'Knives Out',
      lang: 'English/Hindi',
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl: '/img/host.jpeg',
      name: 'host',
      genre: 'Horror/Mystery',
      runTime: '1h 05m',
      title: 'Host',
      lang: 'English Only',
      reviewCount: 23,
      rating: 3,
    },
    {
      imageUrl: '/img/avengers_end_game.png',
      name: 'avengers_end_game',
      genre: 'Action/Sci-fi',
      runTime: '3h 02m',
      title: 'Avengers End Game',
      lang: 'English/Hindi',
      reviewCount: 58,
      rating: 5,
    },
    {
      imageUrl: '/img/demon_slayer_mugen_train.jpeg',
      name: 'demon_slayer_mugen_train',
      genre: 'Action/Fantasy',
      runTime: '1h 57m',
      title: 'Demon Slayer: Mugen Train',
      lang: 'Japanese/English',
      reviewCount: 44,
      rating: 4,
    }
  ]
  
  return (
    <div>
      <Box display={'inline-flex'} flexWrap={'wrap'}>
        {movies.map((movie)=>(
          <Box
            key={movie.name}
            maxW={'2xs'}
            borderWidth='1px'
            m={'2'}
            borderRadius='lg'
            overflow='hidden'
            onClick={()=>console.log(movie.name)}

          >
            <Image src={movie.imageUrl} alt={movie.name} h={'22.5rem'} objectFit={'cover'} />
      
            <Box p='6'>
              <Box display='flex' alignItems='baseline'>
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
        
              <Box display='flex' mt='2' alignItems='center'>
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
