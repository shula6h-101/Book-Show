import {atom} from "jotai";

export const ticketAtom = atom({
  movie: null,
  selectedSeats: [],
  totalPrice: 0
}, (get, set, arg) => set(ticketAtom, {...get(ticketAtom), ...arg}))
