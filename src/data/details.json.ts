export interface Template {
  title: string;
  description: string;
  date: string;
}
const one: Template = {
  title: "Senior software developer",
  description:
    "Tasked with developing a mobile application for Russia’s largest e-pharmacy.  Involved in the full software development cycle. Leading a team of four people.",
  date: "Sep 2021 - ",
};
const two: Template = {
  title: "Software developer",
  description:
    "Developed and maintained a data-exchange platform for a large Russian logistics conglomerate: corporate messenger, corporate info portal, document exchange.",
  date: "Aug 2019 - Sep 2021",
};
const three: Template = {
  title: "CTO",
  description:
    "Co-founded a start-up that helps doctors and medical organizations to protect themselves from potential breaches of the law and consumer extremisms.",
  date: "Jan 2019 - Mar 2021",
};
const four = {
  title: "Freelancer",
  description:
    "Started professional career as a developer by developing small e-commerce website using Ruby on Rails. Worked in a couple of projects using Angular 2.",
  date: "Aug 2018 - Dec 2018",
};

const five = {
  title: "Co-founder",
  description:
    "Co-founded a startup that aimed to help SME's hire the best local professionals in order to increase their efficiency and reduce costs.",
  date: "Oct 2017 - Jun 2018",
};

export const bytitle = {
  one,
  two,
  three,
  four,
  five,
};
export const details = Object.values(bytitle);
