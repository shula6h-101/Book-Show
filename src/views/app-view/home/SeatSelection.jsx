import {Stat, StatHelpText, StatNumber} from "@chakra-ui/react";
import Theatre from "../../../components/shared-component/Theatre";
import {useState} from "react";

const SeatSelection = () => {
  const seatMatrix = {
    A:{
      id: 'A',
      price: 250,
      seats: [
        {id: 'A1', isOccupied: true, isDisabled: true},
        {id: 'A2', isOccupied: false, isDisabled: false},
        {id: 'A3', isOccupied: true, isDisabled: false},
        {id: 'A4', isOccupied: false, isDisabled: false},
        {id: 'A5', isOccupied: false, isDisabled: false},
        {id: 'A6', isOccupied: false, isDisabled: false},
        {id: 'A7', isOccupied: false, isDisabled: true}
      ]
    },
    B:{
      id: 'B',
      price: 250,
      seats: [
        {id: 'B1', isOccupied: true, isDisabled: true},
        {id: 'B2', isOccupied: false, isDisabled: false},
        {id: 'B3', isOccupied: false, isDisabled: false},
        {id: 'B4', isOccupied: false, isDisabled: false},
        {id: 'B5', isOccupied: false, isDisabled: false},
        {id: 'B6', isOccupied: false, isDisabled: false},
        {id: 'B7', isOccupied: false, isDisabled: true}
      ]
    },
    C:{
      id: 'C',
      price: 350,
      seats: [
        {id: 'C1', isOccupied: true, isDisabled: false},
        {id: 'C2', isOccupied: false, isDisabled: false},
        {id: 'C3', isOccupied: false, isDisabled: false},
        {id: 'C4', isOccupied: false, isDisabled: false},
        {id: 'C5', isOccupied: false, isDisabled: false},
        {id: 'C6', isOccupied: false, isDisabled: false},
        {id: 'C7', isOccupied: false, isDisabled: false}
      ]
    },
    D:{
      id: 'D',
      price: 350,
      seats: [
        {id: 'D1', isOccupied: true, isDisabled: false},
        {id: 'D2', isOccupied: false, isDisabled: false},
        {id: 'D3', isOccupied: false, isDisabled: false},
        {id: 'D4', isOccupied: false, isDisabled: false},
        {id: 'D5', isOccupied: false, isDisabled: false},
        {id: 'D6', isOccupied: false, isDisabled: false},
        {id: 'D7', isOccupied: false, isDisabled: false},
      ]
    }
  }
  const [selectedSeats, setSelectedSeats] = useState([]);
  
  const handleSelectedSeat = (seatId) => {
    const isSelected = selectedSeats.includes(seatId);
    if (isSelected) {
      setSelectedSeats((prevState => prevState.filter((id)=> id !== seatId)));
    } else {
      setSelectedSeats((prevState => [...prevState, seatId]));
    }
  }
  return (
    <div>
      <Theatre
        seatMatrix={seatMatrix}
        selectedSeats={selectedSeats}
        handleSelectedSeat={handleSelectedSeat}
      />
      <Stat>
        <StatNumber>₹ 0.00</StatNumber>
        <StatHelpText color='gray.600'>Selected Seats - {selectedSeats.length}</StatHelpText>
      </Stat>
    </div>
  )
};

export default SeatSelection;
