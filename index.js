const names = ["Guadalupe", "Ollie", "Aki",];

function writeCards(names) {
  const messeges =[]

  for (let i = 0; i < names.length; i++) {
    messeges.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    debugger;
  }
console.log(messeges)
return messeges
}
function countDown (number){
  var countdown = 10;
  while (countdown > 0){
  countdown--;
  console.log(countdown)
  console.log("0!");
  }