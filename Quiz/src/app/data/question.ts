

export class Question {
   
        // data.options.forEach((o: any) => {
        //     this.options.push(new Option(o));
        // });
        constructor(public id:number,public text:string, public choices:Array<any>, public CorrectAns:number, public answered:Boolean){}
    }
