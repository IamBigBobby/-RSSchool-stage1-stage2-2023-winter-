import { Data } from '../interfaces/interfaces';

export async function getLvlData(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export class GetCurrentData {
  difficulty: number;

  round: number;

  words: number | undefined;

  lvlData!: Data;

  constructor(difficulty: number, round = 1) {
    this.difficulty = difficulty;
    this.round = round;
  }

  private async fetchData(): Promise<void> {
    this.lvlData = await getLvlData(
      `https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/data/wordCollectionLevel${this.difficulty}.json`,
    );
  }

  public async getLvlData(): Promise<Data> {
    await this.fetchData();
    return this.lvlData;
  }

  public async getTextExample(): Promise<string[][]> {
    await this.fetchData();
    const arrLength: number = this.lvlData.rounds[this.round].words.length;
    const textArr: string[][] = [];
    for (let i = 0; i < arrLength; i += 1) {
      const sentence: string[] =
        this.lvlData.rounds[this.round].words[i].textExample.split(' ');
      textArr.push(sentence);
    }
    return textArr;
  }

  public async getRoundsCount(): Promise<number> {
    await this.fetchData();
    return this.lvlData.rounds.length;
  }

  public async getImg(): Promise<string> {
    await this.fetchData();
    return this.lvlData.rounds[this.round].levelData.imageSrc;
  }

  public async getTranslation(step: number): Promise<string> {
    await this.fetchData();
    return this.lvlData.rounds[this.round].words[step].textExampleTranslate;
  }

  public async getAuthor(): Promise<string> {
    await this.fetchData();
    return this.lvlData.rounds[this.round].levelData.author;
  }

  public async getYear(): Promise<string> {
    await this.fetchData();
    return this.lvlData.rounds[this.round].levelData.year;
  }

  public async getName(): Promise<string> {
    await this.fetchData();
    return this.lvlData.rounds[this.round].levelData.name;
  }
}
