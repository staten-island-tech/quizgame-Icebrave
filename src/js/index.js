console.log("connected");

const questions = [
  {
    question: "What color are most turtles?",
    choices: {
      a: "Yellow",
      b: "Green",
      c: "Purple",
      d: "White",
    },
    answer: "Green",
  },
  {
    question: "What do turtles not eat?",
    choices: {
      a: "Jellyfish",
      b: "Seaweed",
      c: "Plastic",
      d: "Fruits",
    },
    answer: "Plastic",
  },
  {
    question: "How long do sea turtles live?",
    choices: {
      a: "1 Year",
      b: "5 Years",
      c: "50 Years",
      d: "100+ Years",
    },
    answer: "Plastic",
  },
];

const choices = document.getElementsByClassName("choices");
