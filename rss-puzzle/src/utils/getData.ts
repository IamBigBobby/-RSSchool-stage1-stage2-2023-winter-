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

  constructor(difficulty: number, round = 0, words = 0) {
    this.difficulty = difficulty;
    this.round = round;
    this.words = words;
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

  public async getTextExample(): Promise<string> {
    await this.fetchData();
    return this.lvlData.rounds[this.round].words[this.words].textExample;
  }

  public async getTextLength(): Promise<number> {
    await this.fetchData();
    return this.lvlData.rounds[this.round].words[this.words].textExample.split(
      ' '
    ).length;
  }
}
