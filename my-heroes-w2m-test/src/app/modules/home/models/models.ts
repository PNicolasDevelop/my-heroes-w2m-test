import { FormControl } from '@angular/forms';

export interface Hero {
  id: number;
  name: string;
  creation_year: number;
  imageUrl: string;
  description: string;
  company: ComicCompany;
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

export interface HeroFormControls {
  name: FormControl<string | null>;
  creation_year: FormControl<number | null>;
  imageUrl: FormControl<string | null>;
  description: FormControl<string | null>;
  company: FormControl<ComicCompany | null>;
}
