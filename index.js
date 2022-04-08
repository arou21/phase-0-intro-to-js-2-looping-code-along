const names = ["Guadalupe", "Ollie", "Aki",];

function writeCards(names) {
  const messeges =[]

  for (let i = 0; i < names.length; i++) {
    messeges.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  
  }
console.log(messeges)
return messeges
}
function countDown (number){
  while (number > 0){
    console.log(number)
  number-=1;
  }
  console.log(number);
}