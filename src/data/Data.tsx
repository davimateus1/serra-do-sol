import { AccordionProps, ButtonProps, MemberProps } from "../types";

import Angelo from "../assets/images/members/Angelo.jpeg";
import Davi from "../assets/images/members/Davi.jpeg";
import Edson from "../assets/images/members/Edson.jpeg";
import Gilberto from "../assets/images/members/Gilberto.jpeg";
import Gustavo from "../assets/images/members/Gustavo.jpeg";
import Murilo from "../assets/images/members/Murilo.jpeg";
import Petrus from "../assets/images/members/Petrus.jpeg";
import Manoel from "../assets/images/members/Manoel.jpeg";

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
    linkedIn: "http://linkedin.com/in/angelo-bellelis-475a49",
    email: "angelo@energeticaserradosol.com.br",
  },
  {
    name: "Davi Duque",
    image: Davi,
    description:
      "Advogado, proprietário da Duque de Godoy advogados em Serra Telhada.",
    linkedIn: "",
    email: "davi@energeticaserradosol.com.br",
  },
  {
    name: "Edson Marconi",
    image: Edson,
    description:
      "Engo Mecânico, PHD, ocupou cargos executivos em Multinacionais (BBC, ABB, Alstom, Voith, PV Solar). 38 anos de experiencia no setor.",
    linkedIn: "http://linkedin.com/in/edson-marconi-1637814",
    email: "edson@energeticaserradosol.com.br",
  },
  {
    name: "Gilberto Bueno",
    image: Gilberto,
    description:
      "Engo Mecânico, ocupou cargos executivos em Multinacionais (ABB, Rolls-Royce, GE). 35 anos de experiência no setor.",
    linkedIn: "https://www.linkedin.com/in/buenogilberto",
    email: "gilberto@energeticaserradosol.com.br",
  },
  {
    name: "Gustavo Matos",
    image: Gustavo,
    description: "Advogado, proprietário da Matos Advogados em Recife.",
    linkedIn: "",
    email: "gustavo@energeticaserradosol.com.br",
  },
  {
    name: "Murilo Duque",
    image: Murilo,
    description:
      "Diretor Geral, Pós Graduação, MBA na Ibmec. Administração de Empresas na UFPE.",
    linkedIn: "http://linkedin.com/in/murilo-duque-4a00b516",
    email: "murilo@energeticaserradosol.com.br",
  },
  {
    name: "Petrus Santos",
    image: Petrus,
    description:
      "Contador, sócio da Petra Consultores em Recife, PE.",
    linkedIn: "",
    email: "petrus@energeticaserradosol.com.br",
  },
  {
    name: "Manoel Dias",
    image: Manoel,
    description:
      "Engo Eletricista, ocupou cargos executivos em Multinacionais (BBC, ABB, Alstom, PV Solar). 40 anos de experiencia no setor.",
    linkedIn: "",
    email: "manoel@energeticaserradosol.com.br",
  },
];

export const accordionsData: AccordionProps[] = [
  {
    isList: false,
    title: "Localização e Acesso",
    description:
      "As UFVs Serra do Sol situam-se no município de Serra Talhada à 415 Km de Recife PE, pertencente à Mesorregião do Sertão Pernambucano, à Microrregião hidrográfica de Pajeú, e ao contexto geológico da porção central da Província Borborema, com altitude média de 443 metros.",
  },
  {
    isList: true,
    title: "Infraestrutura Disponível",
    list: [
      {
        description: "Próxima ao perímetro urbano de Serra Talhada/PE,",
      },
      {
        description:
          "Serra Talhada cidade polo em: saúde, educação, comércio e rede hoteleira, etc;",
      },
      {
        description: "Investimentos públicos na região:",
      },
      {
        description:
          "Universidade Federal Rural de Pernambuco – Unidade (UAST),",
      },
      {
        description: "Transposição do Rio São Francisco,",
      },
      {
        description: "Ferrovia Transnordestina,",
      },
      {
        description: "Aeroporto,",
      },
      {
        description:
          "Linhas de telecomunicações e cobertura de telefonia móvel,",
      },
      {
        description: "Abastecimento de água,",
      },
      {
        description:
          "Estrutura para atender as demandas de insumos para a fase de implantação do projeto.",
      },
      {
        description:
          "Recursos minerários, com destaque ao granito, pedras britadas, calcário, calcário calcítico e talco (recursos minerários de suma importância na fase de implantação).",
      },
    ],
  },
];
