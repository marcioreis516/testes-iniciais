const s=require("readline-sync")
let n=s.questionInt("digite o multipicador")
let soma
for( n2=1;n2<=10;n2++){
    soma=n+n2
    console.log(n2,"+",n,"=",soma)
}