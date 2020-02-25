export const highlightEvents = []

export const events = [
  {
    id: "binge-eating",
    titleA: "Icy Spicy",
    titleB: "Binge Eating",
    eventDate: "9th March",
    // eventTime: "2:00 PM",
    eventZone: "Charlie",
    // eventLocation: "Library Lawn",
    eventPrize: "Rs 1.5k",
    eventFee: 50,
    eventSummary: `Hungry?
    Take all food in the world to eat,
    But be warned, it ain't an easy feat.`,
  },
  {
    id: "ipl-auction",
    titleA: "IPL Auction",
    eventDate: "9th March",
    // eventTime: "2:30 PM",
    eventZone: "Bravo",
    // eventLocation: "Seminar Hall",
    eventPrize: "Rs 2k",
    eventFee: 50,
    eventSummary: "",
  },
  {
    id: "bazinga",
    titleA: "The Ice Storm",
    titleB: "Bazinga",
    eventDate: "8th March",
    // eventTime: "2:00 PM",
    eventZone: "Bravo",
    // eventLocation: "Seminar Hall",
    eventPrize: "Rs 6k",
    eventFee: 100,
    eventSummary: `Hungry?
    Take all food in the world to eat,
    But be warned, it ain't an easy feat.`,
  },
  {
    id: "trivium",
    titleA: "Rapid Fire",
    titleB: "Trivium",
    eventDate: "9th March",
    // eventTime: "10:00 AM",
    eventZone: "Bravo",
    // eventLocation: "Seminar Hall",
    eventPrize: "Rs 12k",
    eventFee: 100,
    eventSummary: `Are those books and newspapers in your luggage?
    Shall we quiz you about general knowledge?`,
  },
  {
    id: "min-to-win",
    titleA: "Feel the Heat",
    titleB: "Minute to Win",
    eventDate: "9th March",
    // eventTime: "1:30 PM",
    eventZone: "Bravo",
    // eventLocation: "Seminar Hall",
    eventPrize: "Rs 2k",
    eventFee: 50,
    eventSummary: `Let's hear you talk, for just a minute,
    Be careful not to exceed your limit.`,
  },
].map(item => ({
  ...item,
  registrationLink:
    item.registrationLink || `/registration/?eventID=${item.id}`,
}))
