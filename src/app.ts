export{}
const a: number = 10;
const b: number = 30;
//
type User =  {
    id:number;
    name:string;
}
const myName: string ="Tran Trung Chien";
const myAge : number = 20;
const status : boolean = true;
const my0bj:User= {id:1,name:"Chien"};

const numberArr: number[] = [1,3,3,4];
const stringArr: string[]= ["a","b","c"];
const objectArr: User[] =[{id:1,name:"A"},{id:2,name:"B"}];
function sum(numA: number, numB: number):number{
    return numA + numB;
}
sum(a, b)
/**
 * tsc --init
 * target:"es2018"
 * baseUrl: "./src"
 * outDir: ".dist"
 * sourceMap: true
 */
