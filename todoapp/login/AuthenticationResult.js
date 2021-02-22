export default class AuthenticationResult  {
    constructor(ris, msg) { 
        this.result = ris;
        this.message = msg;
    }


    getResult(){
        return this.result;
    }
    getMessage(){
        return this.message;
    }
}