var readlineSync=require("readline-sync")
const chalk = require('chalk');
var userName=readlineSync.question("Hi!what is your name?"+"\n");
console.log("Welcome" + " "+chalk.blue(userName)+" Lets see how well do you know football?\n");
console.log("The answers are case sensitive so type the answer as you see in the options\n")

var questionOne={
  question:"With 202 clean sheets, which goalkeeper has the best record in the Premier League?\n a.Petr Cech\n b. David De Gea\n c. Van de sar\n",
  answer:"Petr Cech"
}

var questionTwo={
  question:"Who is the only player to win the Champions League with three different clubs?\na.Cristiano Ronaldo \nb.Clarence Seedorf\nc.Samuel Eto \n",
  
  answer:"Clarence Seedorf"
}
var questionThree={
  question:"Which club has won the most Champions League titles?\na. Barcelona\nb. Real Madrid\nc. Bayern Munich"+"\n",
  answer:"Real Madrid"
}
var questionFour={
  question:"I've worn numbers 7, 17, 28 and 9 in my career, playing my football across, England, Spain, Italy and Portugal?\na. Cristiano Ronaldo\nb. Kante\nc. Gerrad\n",
  answer:"Cristiano Ronaldo"
}
var questionFive={
  question:"Which player scored the fastest hat-trick in the Premier League?\na.Salah \nb. Mane\nc. Hazard\n",
  answer:"Mane"
}
var score=0;
function play(question,answer){
var userAnswer=readlineSync.question(question);
console.log(userAnswer);
if(userAnswer===answer){
  console.log(chalk.green("Your answer is right"));
  score=score+1;
  console.log(chalk.yellowBright("Your current score is "+score));
  console.log("------------------------------------")
}
else{
  console.log(chalk.red("Your answer is wrong"));
  console.log(chalk.yellowBright("Your current score is "+score));
  console.log("------------------------------------")
}
}
var quiz=[questionOne,questionTwo,questionThree,questionFour,questionFive];

for(i=0;i<quiz.length;i++){
  play(quiz[i].question,quiz[i].answer);

}

console.log(chalk.cyanBright("Your final score is "+score));