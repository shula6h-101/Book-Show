import {useEffect} from "react";
import {useAtom} from "jotai";
import {ticketAtom} from "../../../atomic-state/Booking";

const TicketBooking = () => {
  const [ticket] = useAtom(ticketAtom);
  
  useEffect(()=>{
    console.log(ticket);
  }, [])
  
  return (
    <div>
      Seat Booking
    </div>
  )
};

export default TicketBooking;
