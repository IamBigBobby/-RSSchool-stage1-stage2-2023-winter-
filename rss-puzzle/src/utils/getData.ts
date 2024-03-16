import { Data } from '../interfaces/interfaces';

export async function getLvlData(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export class GetCurrentData {
  difficulty: number;
  round: number;
  words: number;
  lvlData: Data;

  constructor(difficulty: number, round = 0) {
    this.difficulty = difficulty;
    this.round = round;
  }

  private async fetchData(): Promise<void> {
    this.lvlData = await getLvlData(
      `https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/data/wordCollectionLevel${this.difficulty}.json`
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

  public async getTextArr() {
    await this.fetchData();
    console.log();
    // return this.lvlData.rounds[this.round].words[0].textExample.split(' ');
  }

  public async getTextLength(): Promise<number> {
    await this.fetchData();
    return this.lvlData.rounds[this.round].words[0].textExample.split(' ')
      .length;
  }

  public async getImg(): Promise<string> {
    await this.fetchData();
    return this.lvlData.rounds[this.round].levelData.imageSrc;
  }
}
