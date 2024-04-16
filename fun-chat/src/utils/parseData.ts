import { ParsedData } from "../interfaces/interfaces";

export default function parseData(string: string): ParsedData {
  return JSON.parse(string);
}
