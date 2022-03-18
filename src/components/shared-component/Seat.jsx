import {Button} from '@chakra-ui/react'

const Seat = (props) => {
  const {id, isOccupied, isDisabled, isSelected, handleSelectedSeat} = props;
  return (
    <Button
      m={'3'}
      size={'xs'}
      key={id}
      isDisabled={isDisabled}
      borderBottomRadius={0}
      variant={isDisabled ? 'ghost' : 'solid'}
      borderRadius='full'
      colorScheme={isOccupied ? 'blackAlpha' : isSelected ? 'whatsapp': 'gray'}
      onClick={isOccupied ? null : () => handleSelectedSeat(id)}
    />
  )
};

export default Seat;
