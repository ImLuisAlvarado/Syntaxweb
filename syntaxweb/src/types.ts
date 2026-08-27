export interface Slide {
  id: number;
  image: string;
  fallback: string;
  fileTag: string;
  title: string;
  alt: string;
}

export interface Promise {
  number: string;
  icon: string;
  title: string;
  text: string;
}

export interface News {
  image: string;
  fallback: string;
  title: string;
  genre: string;
  quote: string;
}

export interface Track {
  title: string;
  artist: string;
  src: string;
  label: string;
  vinylColor: string;
  note: string;
  cover?: string;
}

export interface Events {
  number: string;
  icon: string;
  title: string;
  quote: string;
  status: string;
  date?: string;
}

export interface TimelineEvent {
  dateLabel: string;
  title: string;
  text: string;
}

export interface Tale {
  universe: string;
  title: string;
  text: string;
  reality: string;
}
