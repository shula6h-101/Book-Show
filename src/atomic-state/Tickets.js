import {atom} from "jotai";

export const ticketsAtom = atom([], (get, set, arg) => set(ticketsAtom, [...get(ticketsAtom), arg]))
