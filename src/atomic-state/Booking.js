import {atom} from "jotai";
import {RESET} from "jotai/utils";

const initialValue = {
  movie: null,
  selectedSeats: [],
  totalPrice: 0
}

export const ticketAtom = atom(initialValue, (get, set, arg) => {
  if(arg === RESET){
    set(ticketAtom, initialValue);
  }
  set(ticketAtom, {...get(ticketAtom), ...arg});
})

export const resetTicket = atom
