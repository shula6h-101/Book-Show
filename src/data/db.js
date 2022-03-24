export const movies = [
  {
    imageUrl: '/img/knives_out.png',
    id: 'knives_out',
    genre: 'Mystery/Comedy',
    runTime: '2h 10m',
    title: 'Knives Out',
    lang: 'English/Hindi',
    reviewCount: 34,
    rating: 4,
  },
  {
    imageUrl: '/img/host.jpeg',
    id: 'host',
    genre: 'Horror/Mystery',
    runTime: '1h 05m',
    title: 'Host',
    lang: 'English Only',
    reviewCount: 23,
    rating: 3,
  },
  {
    imageUrl: '/img/avengers_end_game.png',
    id: 'avengers_end_game',
    genre: 'Action/Sci-fi',
    runTime: '3h 02m',
    title: 'Avengers End Game',
    lang: 'English/Hindi',
    reviewCount: 58,
    rating: 5,
  },
  {
    imageUrl: '/img/demon_slayer_mugen_train.jpeg',
    id: 'demon_slayer_mugen_train',
    genre: 'Action/Fantasy',
    runTime: '1h 57m',
    title: 'Demon Slayer: Mugen Train',
    lang: 'Japanese/English',
    reviewCount: 44,
    rating: 4,
  }
]

export const seatMatrix = {
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
