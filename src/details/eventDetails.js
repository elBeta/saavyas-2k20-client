export const colorScheme = {
  blueWhiteBlack: {
    backgroundColor: "#3aafa9",
    titleAColor: "white",
    titleBColor: "#18262a",
    fieldColor: "#18262a",
    contentColor: "white",
    btnBGColor: "#05396b",
    btnHoverColor: "#052442",
    btnTypoColor: "white",
  },
  redBlackWhite: {
    backgroundColor: "#dc3d24",
    titleAColor: "white",
    titleBColor: "#18262a",
    fieldColor: "#18262a",
    contentColor: "white",
    btnBGColor: "#18262a",
    btnHoverColor: "#1e1e1e",
    btnTypoColor: "white",
  },
  greenBlueWhite: {
    backgroundColor: "#5cdb95",
    titleAColor: "#05386b",
    titleBColor: "#edf5e1",
    fieldColor: "#05386b",
    contentColor: "#edf5e1",
    btnBGColor: "#05386b",
    btnHoverColor: "#05284a",
    btnTypoColor: "#edf5e1",
  },
}

export const highlightEvents = [
  {
    title: "Robowars",
    fileName: "event-posters/robowars.jpg",
    link: "/events/technical/#robowars",
  },
  {
    title: "Artificial Intelligence",
    fileName: "event-posters/ai.jpg",
    link: "/events/technical/#ai",
  },
  {
    title: "Humanoid Robotics",
    fileName: "event-posters/humanoid.jpg",
    link: "/events/technical/#humanrobot",
  },
]

export const events = [
  {
    titleA: "IoT with",
    titleB: "Google Assistant",
    rightAlign: false,
    colorScheme: colorScheme.blueWhiteBlack,
    eventDate: "6th and 7th March",
    eventFee: 1500,
    eventSummary:
      "Internet of Things (IoT) is an ecosystem of connected physical " +
      "things that are accessible through the internet. The 'Thing' in IoT " +
      "could be a person with a heart monitor or an automobile with " +
      "built-in-sensors, i.e. objects that have been assigned an IP address " +
      "and could collect and transfer data over a network without manual " +
      "intervention.",
    ruleBookLink:
      "https://drive.google.com/open?id=1_B4qjVQCczijVXZO0tP-5Rmr1xZd61bA",
    registrationLink:
      "https://www.payumoney.com/paybypayumoney/#/FDD5FAEB0B834D653EA32AE59CC4DB14",
  },
  {
    titleA: "Humanoid",
    titleB: "Robotics",
    rightAlign: true,
    colorScheme: colorScheme.redBlackWhite,
    eventDate: "6th and 7th March",
    eventFee: 1500,
    eventSummary:
      "Humanoid robots are being developed to perform human tasks like " +
      "personal assistance, through which they should be able to assist " +
      "the sick and elderly, and dirty or dangerous jobs. The robotic " +
      "industry will see an increase in humanoid robots.",
    ruleBookLink:
      "https://drive.google.com/open?id=1s5RmGtFfz2b9lche1AdkyatDzlIUSRpa",
    registrationLink:
      "https://www.payumoney.com/paybypayumoney/#/FDD5FAEB0B834D653EA32AE59CC4DB14",
  },
  {
    titleA: "Artificial",
    titleB: "Intelligence",
    colorScheme: colorScheme.greenBlueWhite,
    eventDate: "6th and 7th March",
    eventFee: 1500,
    eventSummary:
      "Today, the amount of data that is generated, by " +
      "both humans and machines, far outpaces humans' ability " +
      "to absorb, interpret, and make complex decisions based " +
      "on that data. Artificial intelligence forms the basis " +
      "for all computer learning and is the future of all complex " +
      "decision making.",
    ruleBookLink:
      "https://drive.google.com/open?id=1hYYpwkavE8z3eaHtZ1inMeTYyzR1CXbq",
    registrationLink:
      "https://www.payumoney.com/paybypayumoney/#/FDD5FAEB0B834D653EA32AE59CC4DB14",
  },
  {
    titleA: "Robo",
    titleB: "Wars",
    eventDate: "...",
    eventFee: "...",
    imageFileName: "robowars.jpg",
    rightAlign: true,
    eventSummary:
      "Humanoid robots are being developed to perform human tasks like " +
      "personal assistance, through which they should be able to assist " +
      "the sick and elderly, and dirty or dangerous jobs. The robotic " +
      "industry will see an increase in humanoid robots.",
    colorScheme: colorScheme.redBlackWhite,
  },
]
