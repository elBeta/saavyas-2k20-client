export const highlightEvents = [
  {
    title: "Week of Learning",
    fileName: "event-posters/wol.png",
    link: "/events/workshops/#wol",
  },
  {
    title: "IoT w. Google Asst.",
    fileName: "event-posters/iot_with_gass.jpg",
    link: "/events/workshops/#iotwithgass",
  },
  {
    title: "Humanoid Robotics",
    fileName: "event-posters/humanoid.jpg",
    link: "/events/workshops/#humanrobot",
  },
]

export const events = [
  {
    id: "humanrobot",
    titleA: "Humanoid",
    titleB: "Robotics",
    rightAlign: true,
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
    id: "ai",
    titleA: "Artificial",
    titleB: "Intelligence",
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
    id: "iotwithgass",
    titleA: "IoT with",
    titleB: "Google Assistant",
    rightAlign: true,
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
  // {
  //   id: "gdg_ml_wd",
  //   titleA: "ML and Web Dev",
  //   titleB: "By Team GDG",
  //   imageFileName: "gdg_ml_wd.png",
  //   eventDate: "9th February 2020",
  //   eventFee: 0,
  //   eventTime: "10:00 AM to 1:00 PM",
  //   eventSummary:
  //     "Saavyas'20 and GDG Goa present you a fun way to spend your Sunday, " +
  //     "a workshop on Machine Learning and Web development, topics that are " +
  //     "omnipresent in every our every modern day routine - By Team GDG. " +
  //     "Rudra Sawant - Intro to ML and DL; " +
  //     "Salil Naik - Being a creative front-end developer; " +
  //     "Ashley D'Souza - Design Thinking; ",
  //   registrationLink: "https://saavyas.typeform.com/to/Z6X10B",
  //   ruleBookLink:
  //     "https://www.instagram.com/p/B8JY-wNA9CM/?igshid=nsnlko0ih5o2",
  // },
].map(item => ({
  ...item,
  registrationLink: `/registration?eventID=${item.id}`,
}))
