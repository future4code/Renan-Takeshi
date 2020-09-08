export class Band {
  constructor(
    private id: string,
    private name: string,
    private musicGenre: string,
    private responsible: string
  ) {}

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getmusicGenre() {
    return this.musicGenre;
  }

  getresponsible() {
    return this.responsible;
  }

  setId(id: string) {
    this.id = id;
  }

  setName(name: string) {
    this.name = name;
  }

  setmusicGenre(musicGenre: string) {
    this.musicGenre = musicGenre;
  }

  setresponsible(responsible: string) {
    this.responsible = responsible;
  }

  static toBandModel(band: any): Band {
    return new Band(band.id, band.name, band.musicGenre, band.responsible);
  }
}

export interface BandInputDTO {
  name: string;
  musicGenre: string;
  responsible: string;
}
