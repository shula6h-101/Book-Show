import {lazy, Suspense} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {APP_PREFIX_PATH} from "../../../constants/common";
import {Box, useColorModeValue} from "@chakra-ui/react";

const Movies = lazy(() => import('./Movies'));
const SeatSelection = lazy(() => import('./SeatSelection'));
const TicketBooking = lazy(() => import('./TicketBooking'));

const Home = () => {
  return (
    <Box
      w={'full'}
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'2xl'}
      rounded={'lg'}
      p={3}
      textAlign={'center'}
    >
      <Suspense fallback={<p> Loading...</p>}>
        <Routes>
          <Route path="/movies" element={<Movies/>} />
          <Route path="/seat-selection" element={<SeatSelection/>}>
            <Route path=":movieId" element={<SeatSelection/>}/>
          </Route>
          <Route path="/ticket-booking" element={<TicketBooking/>} />
          <Route path='' element={<Navigate replace to={`${APP_PREFIX_PATH}/home/movies`} />} />
        </Routes>
      </Suspense>
    </Box>
  )
};

export default Home;
