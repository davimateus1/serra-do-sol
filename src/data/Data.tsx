import { ButtonProps, MemberProps } from "../types";

import Angelo from "../assets/images/members/Angelo.jpeg";
import Davi from "../assets/images/members/Davi.jpeg";
import Edson from "../assets/images/members/Edson.jpeg";
import Gilberto from "../assets/images/members/Gilberto.jpeg";
import Gustavo from "../assets/images/members/Gustavo.jpeg";
import Murilo from "../assets/images/members/Murilo.jpeg";
import Petrus from "../assets/images/members/Petrus.jpeg";

export const homeData: ButtonProps[] = [
  {
    name: "Institucional",
    route: "/institucional",
  },
  {
    name: "Projetos",
    route: "/projetos",
  },
  {
    name: "Financeiro",
    route: "/financeiro",
  },
];

export const drawerData: ButtonProps[] = [
  {
    name: "Menu Principal",
    route: "/",
  },
  {
    name: "Institucional",
    route: "/institucional",
  },
  {
    name: "Projetos",
    route: "/projetos",
  },
  {
    name: "Financeiro",
    route: "/financeiro",
  },
];

export const institutionalData: MemberProps[] = [
  {
    name: "Angelo Bellelis",
    image: Angelo,
    description:
      "Engo Eletricista, MBA, ocupou cargos executivos em Multinacionais (BBC, ABB, Alstom, Sulzer, EAS). 35 anos de experiencia no setor.",
    office: "Eng Eletricista",
    linkedIn: "http://linkedin.com/in/angelo-bellelis-475a49",
    email: "angelo@energeticaserradosol.com.br",
  },
  {
    name: "Davi Duque",
    image: Davi,
    description:
      "Advogado, proprietário da Duque de Godoy advogados em Serra Telhada.",
    office: "Advogado",
    linkedIn: "",
    email: "davi@energeticaserradosol.com.br",
  },
  {
    name: "Edson Marconi",
    image: Edson,
    description:
      "Engo Mecânico, PHD, ocupou cargos executivos em Multinacionais (BBC, ABB, Alstom, Voith, PV Solar). 38 anos de experiencia no setor.",
    office: "Eng Mecânico",
    linkedIn: "http://linkedin.com/in/edson-marconi-1637814",
    email: "edson@energeticaserradosol.com.br",
  },
  {
    name: "Gilberto Bueno",
    image: Gilberto,
    description:
      "Engo Mecânico, ocupou cargos executivos em Multinacionais (ABB, Rolls-Royce, GE). 35 anos de experiência no setor.",
    office: "Eng Mecânico",
    linkedIn: "https://www.linkedin.com/in/buenogilberto",
    email: "gilberto@energeticaserradosol.com.br",
  },
  {
    name: "Gustavo Matos",
    image: Gustavo,
    description: "Advogado, proprietário da Matos Advogados em Recife.",
    office: "Advogado",
    linkedIn: "",
    email: "gustavo@energeticaserradosol.com.br",
  },
  {
    name: "Murilo Duque",
    image: Murilo,
    description:
      "Diretor Geral, Pós Graduação, MBA na Ibmec. Administração de Empresas na UFPE.",
    office: "Diretor Geral",
    linkedIn: "http://linkedin.com/in/murilo-duque-4a00b516",
    email: "murilo@energeticaserradosol.com.br",
  },
  {
    name: "Petrus Santos",
    image: Petrus,
    description:
      "Economista, sócio da PPK consultoria financeira em Recife, PE.",
    office: "Economista",
    linkedIn: "",
    email: "petrus@energeticaserradosol.com.br",
  },
  {
    name: "Manoel Dias",
    image: "",
    description:
      "Engo Eletricista, ocupou cargos executivos em Multinacionais (BBC, ABB, Alstom, PV Solar). 40 anos de experiencia no setor.",
    office: "Eng Eletricista",
    linkedIn: "",
    email: "manoel@energeticaserradosol.com.br",
  },
];
