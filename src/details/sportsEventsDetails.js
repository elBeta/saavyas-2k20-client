export const highlightEvents = []

export const events = [
  {
    id: "chess",
    titleA: "Brain Freeze",
    titleB: "Chess",
    eventDate: "7th March",
    eventTime: "10:30 AM",
    eventZone: "Alpha",
    eventLocation: "N2/N4",
    eventPrize: "Rs 7k",
    eventFee: 100,
    eventSummary:
      "Wanna a play of game of strategy? Impress everyone by showcasing your intelligence!",
  },
  {
    id: "table-tennis",
    titleA: "Hot Shots",
    titleB: "Table Tennis",
    eventDate: "7th March",
    eventTime: "10:30 AM",
    eventZone: "Bravo",
    eventLocation: "N5/N6",
    eventPrize: "Rs 4.5k",
    eventFee: 50,
    eventSummary:
      "Smash those balls across the court and get those amazing points!",
  },
  {
    id: "football",
    titleA: "Futsal",
    titleB: "Football",
    eventDate: "7th and 8th March",
    eventTime: "10:30 AM",
    eventZone: "Echo",
    eventLocation: "Ground Sector 2",
    eventPrize: "Rs 24k",
    eventFee: 1000,
    eventSummary:
      "Smash those balls across the court and get those amazing points!",
  },
  {
    id: "pro-cricket",
    titleA: "Fireball",
    titleB: "Pro Cricket",
    eventDate: "8th March",
    eventTime: "12:00 PM",
    eventZone: "Echo",
    eventLocation: "Ground Sector 2",
    eventPrize: "Rs 1.5k",
    eventFee: 50,
    eventSummary:
      "Unleash your inner Dhonis and Virats! Its time to apply your best cricketing tactics to drive your team to its glory!",
  },
  {
    id: "pubg",
    titleA: "PUBG",
    titleB: "Agent 47",
    eventDate: "8th March",
    eventTime: "2:00 PM",
    eventZone: "Bravo",
    eventLocation: "N8",
    eventPrize: "Rs 4.5k",
    eventFee: 200,
    eventSummary:
      "Winner winner chicken dinner! Engage in this addicting Battle Royale to put your gaming skills to the test!",
  },
  {
    id: "fifa",
    titleA: "FIFA",
    eventDate: "7th March",
    eventTime: "10:30 AM",
    eventZone: "Delta",
    eventLocation: "2A/2B",
    eventPrize: "Rs 4k",
    eventFee: 100,
    eventSummary:
      "Kick, pass, shoot and GOAALLL! Send that ball flying into your opponents post and score!",
  },
  {
    id: "csgo",
    titleA: "CS:GO",
    eventDate: "8th March",
    eventZone: "Delta",
    eventPrize: "Rs 4k",
    eventFee: 200,
    eventSummary: "",
  },
].map(item => ({
  ...item,
  registrationLink: `/registration?eventID=${item.id}`,
}))
