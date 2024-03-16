export interface ComponentProps {
  tag?: string;
  className?: string;
  text?: string;
  src?: string;
  alt?: string;
}

interface Word {
  audioExample: string;
  textExample: string;
  textExampleTranslate: string;
  id: number;
  word: string;
  wordTranslate: string;
}

interface LevelData {
  id: string;
  name: string;
  imageSrc: string;
  cutSrc: string;
  author: string;
  year: string;
}

interface Round {
  levelData: LevelData;
  words: Word[];
}

export interface Data {
  rounds: Round[];
}
