//faulty calculator, which calculate 10% time wrong
/*tanvi866*/




let random=Math.random()
let a=prompt("enter first number")
let b=prompt("operator")
let c=prompt("enter secound number")

let obj= {
    "+":"-",
    "-":"*",
    "*":"/",
    "/":"**"
}


if(random>0.1)
{
   alert(`the currect clculation is ${eval(`${a} ${b} ${c}`)} `)
}else
{
    b=obj[b]
    alert(`the wrong clculation is ${eval(`${a} ${b} ${c}`)} `)
}