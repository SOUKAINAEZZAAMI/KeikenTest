import { propGPT } from "./propGPT.model";

export class user {

    id!: number;
    nom?: string;
    password?: string;
   
    propositions?: propGPT[];
  }