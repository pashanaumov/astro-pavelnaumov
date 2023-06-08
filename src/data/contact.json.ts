export interface Template {
  link: string;
  type: string;
  title: string;
}

const one: Template = {
  link: "mailto:p.b.naumov@gmail.com",
  type: "Email",
  title: "p.b.naumov@gmail.com",
};

const three: Template = {
  link: "https://read.cv/naumovp",
  type: "Read CV",
  title: "naumovp",
};

export const bytype = {
  one,
  three,
};
export const contact = Object.values(bytype);
