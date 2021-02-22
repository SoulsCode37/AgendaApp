import AuthenticationResult from "./AuthenticationResult";

// Temporaneo
export default class Authentication {
    constructor(ac) {
       this.nome = ac;
    }

    authenticate() {
        if(this.nome === "admin") 
            return new AuthenticationResult(1, "Caricamento...");

        return new AuthenticationResult(0, "Account sconosciuto");     
    }
}