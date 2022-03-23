import {lazy, Suspense} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {APP_PREFIX_PATH} from "../../../constants/common";
import {Box, useColorModeValue} from "@chakra-ui/react";

const Movies = lazy(() => import('./Movies'));
const SeatSelection = lazy(() => import('./SeatSelection'));
const SeatBooking = lazy(() => import('./SeatBooking'));

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
          <Route path="/movies" exact element={<Movies/>} />
          <Route path="/seat-selection" exact element={<SeatSelection/>} />
          <Route path="/seat-booking" exact element={<SeatBooking/>} />
          <Route path='' element={<Navigate replace to={`${APP_PREFIX_PATH}/home/movies`} />} />
        </Routes>
      </Suspense>
    </Box>
  )
};

export default Home;
