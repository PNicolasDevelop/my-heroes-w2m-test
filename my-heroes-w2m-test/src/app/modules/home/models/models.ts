export interface Hero {
  id: number;
  name: string;
  creation_year: string;
  imageUrl: string;
  best_powers: string[];
  creator: string;
  archenemy: string;
  description: string;
  company: string; // TODO: change by enumerator
}
