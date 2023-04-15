
// let age="21"
// if(age>=20){
//     console.log("당신은 성인이군요!")
// }else{
//     console.log("당신은 ASK이군요!")
// }

// if(false){
//     console.log("1번")
// }else if(true){
//     console.log("2번")
// }

// let myCase=1;
// switch(myCase){
//     case 1: {
//         console.log("밥묵자")
//         break;
//     }
//     case 2: {
//         console.log("자자")
//         break
//     }
// }

// for(let i=0;i<3;i++){
//     console.log(i+1);
// }

// let i=0;
// while(i<5){
    
//     if(i+1>4){
//         console.log("뇌절")
//     }else{
//         console.log(i+1+"절")
//     }
//     i++;
// }

// let a='3'
// let b='8'
// let operator='+'

// switch(operator){
//     case '+':{
//         console.log(a+b)
//         break;
//     }
//     case '-':{
//         console.log(a+b)
//         break;
//     }
//     case '*':{
//         console.log(a+b)
//         break;
//     }
//     case '/':{
//         console.log(a+b)
//         break;
//     }
// }

// var line = ['행인1','행인2','행인3']
// console.log(line)
// line.unshift("행인4")
// // console.log(line+"\n"+"어머 새치기하지 마욧!")
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var evenNumbers = [];
// var oddNumbers = [];

// for(var i=0;i<numbers.length;i++){
//     if(numbers[i]%2==0){
//         evenNumbers.push(numbers[i])
//     }else{
//         oddNumbers.push(numbers[i])
//     }
// }


// console.log("짝수: " + evenNumbers);
// console.log("홀수: " + oddNumbers);

class BTS{
    constructor(name, soloSong){
        this.name=name;
        this.soloSong=soloSong;
    }
    introduce(){
        console.log(`방탄소년단 ${this.name}의 솔로곡은 ${this.soloSong}입니다.`)
    }
}
let nameArr=['김남준','김석진','민윤기','정호석','박지민','김태형','전정국']
let songArr=['Indigo','Awake','AgustD','치킨누들숲','serendipity','네시','Euphoria']
let bts=[];
for(var i=0; i<7; i++){
    bts[i] = new BTS(nameArr[i],songArr[i])
}
for(var i=0;i<7;i++){
    bts[i].introduce()
}