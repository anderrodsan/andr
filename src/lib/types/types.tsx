export type Project = {
  id: string;
  title: string;
  author: string;
  date: string;
  description: string;
  logo: string;
  images: {
    count: number;
    path: string;
    type: string;
  };
  tags: string[];
  link: {
    text: string;
    href: string;
  };
};

export type Projects = Project[];

export type User = {
  name: string;
  username: string;
  github: string;
  linkedin: string;
  avatar: string;
};

export type Users = User[];

export type Framework = {
  name: string;
  logo: {
    light: string;
    dark: string;
  };
  link: string;
};

export type Frameworks = Framework[];

export type Experience = {
  type: boolean;
  title: string;
  text: string;
  company: string;
  city: string;
  location: number[];
  link: string;
  clink: string;
  logo: string;
  date: string;
};

export type Experiences = Experience[];
