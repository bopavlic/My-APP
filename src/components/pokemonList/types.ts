export interface Pokemon {
  count: number;
  next: string | null;
  previous: string | null;
  results: Results[];
}

export interface Results {
  name: string;
  url: string;
}
