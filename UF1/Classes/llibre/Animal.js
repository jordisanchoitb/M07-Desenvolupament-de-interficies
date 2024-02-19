class Animal {
    nom;
    especie;
    constructor(nom, especie) {
        this.nom = nom;
        this.especie = especie;
    }
    get nom() {
        return this.nom;
    }
    set nom(nom) {
        this.nom = nom;
    }
    get especie() {
        return this.especie;
    }
    set especie(especie) {
        this.especie = especie;
    }
    ferSo(SorollAnimal) {
        return `Soc un animal i faig ${SorollAnimal}`;
    }
}

export default Animal;