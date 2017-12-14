export class Utente {
    cognome: string;
    email: string;
    nickname: string;
    nome: string;

    constructor(nome: string, cognome: string, email: string , nickname: string) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.nickname = nickname;
    }
}
