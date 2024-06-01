export interface Hero {
  id: number;
  name: string;
  creation_year: number;
  imageUrl: string;
  best_powers: string[];
  creator: string;
  archenemy: string;
  description: string;
  company: ComicCompany; // TODO: change by enumerator
}

export interface FilterHeroes {
  name?: string;
  type?: string;
  creation?: number;
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
