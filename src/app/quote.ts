export class Quote {
    id:number;
    quote:string;
    Author:string;
    name:string;
     
     showAuthor: boolean;
    constructor(id:number, quote:string, Author: string, name:string, completeDate: Date){
      this.showAuthor=false;

        this.id=id;
        this.quote=quote;
        this.Author=Author;
        this.name=name;
        completeDate
    }
    
}
