export interface Hero {
  id: number;
  name: string;
  creation_year: number;
  imageUrl: string;
  description: string;
  company: ComicCompany; // TODO: change by enumerator
}

export interface HeroWrite {
  id?: number;
  name: string;
  creation_year: number;
  imageUrl: string;
  description: string;
  company: ComicCompany;
}

export interface FilterHeroes {
  name?: string;
}

export enum ComicCompany {
  DC = 'DC',
  Marvel = 'Marvel',
  DarkHorse = 'Dark Horse Comics',
  Image = 'Image Comics',
  Valiant = 'Valiant Comics',
  IDW = 'IDW Publishing',
  Archie = 'Archie Comics',
  Dynamite = 'Dynamite Entertainment',
  BOOM = 'BOOM! Studios',
}

export interface QuestionModalConfigData {
  title: string;
}
