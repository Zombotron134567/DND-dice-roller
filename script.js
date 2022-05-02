let dicetray = {
   "d4": 0,
   "d6": 0,
   "d8": 0,
   "d10": 0,
   "d12": 0,
   "d20": 0,
  };
//Array that hold the values of the dice
let modifie = 0;
function modifier() {
  modifie = 0;
  document.querySelector(`.modif`).value = modifie;
}
//modifie detects and resets the modifier to 0
let diceresult = [];
//this holds the results of the dice for each roll
function dicenum(dicetype) {  
  switch(dicetype){
    case "d4":
      dicetray[dicetype]++;
      break;
    case "d6":
      dicetray[dicetype]++;
      break; 
    case "d8":
      dicetray[dicetype]++;
      break;
    case "d10":
      dicetray[dicetype]++;
      break;
    case "d12":
      dicetray[dicetype]++;
      break;
    case "d20":
      dicetray[dicetype]++;
      break;
  }
  //dicetray[dicetype]++;
  document.querySelector(`#${dicetype}`).innerHTML = dicetray[dicetype];
};
//dicenum checks which dice type is clicked and updates the number of total dice for that specific dice type.

var result = 0;
function roll() {
  let total = 0;
  let i = 0;
  for (let dice in dicetray) {
    //goes through each dicetype
    total = diceroll(dice, i);
    //returns the total result of the rolls before modifier, passes in dice index with i and number of dices with dice.
     
    /*
    for (let j = 0; j < dicetray[dice]; j++) {
      if (i != 5) {
        result = Math.floor(Math.random() * (4 + (2 * i))) + 1;
      } else {
        result = Math.floor(Math.random() * (4 + (2 * 8))) + 1;
      }
      total += result;
      diceresult.push(result);
      console.log(diceresult + ' a');
    }
      fake code, please ignore.  ^^^ */
     
    i++;
  }
  modifie = document.querySelector(`.modif`).valueAsNumber;
  //gets the value that was input in as modifier.
  total += modifie;
  //Last addition to the total roll
  render();
  //calls render to show roll results of indivdual dice.
  document.querySelector("#total").innerHTML = " + " + modifie + " = " + total;
  //The result is rendered in this queryselector, it takes modifie to show that the total roll is being modified
};
function diceroll(dice, i){
  let total = 0;
  for (let j = 0; j < dicetray[dice]; j++) {
      if (i != 5) {
        result = Math.floor(Math.random() * (4 + (2 * i))) + 1;
         //the random formula for each dice type indicated by i
      } else {
         //else statement is to differentiate between a d20 and the other dice.
        result = Math.floor(Math.random() * (4 + (2 * 8))) + 1;
         //specific dice formula for d20
      }
      total += result;
      //adds up the total
      diceresult.push(result);
      //pushed into diceresult to save individual dice result
      console.log(diceresult + "a");
    }
  return total;
}

function render(){
  //renders the individual result of all the dices according to dice type
  let rolls = '<ul>';
  //it is shown as a ul in html
  for (let dice in dicetray){
     //goes to each dice type
    if (dicetray[dice] != 0){
      rolls += `<li class = "baseStyle--hist">${dicetray[dice]}${dice} = `;
       //The starting of the indivitual dice results
      for (let i = 0; i < dicetray[dice]; i++ ){
         //goes a number of times equal to the number of dice for the specidifc dice type
        if (i == dicetray[dice] - 1){
          rolls += `${diceresult[i]}`;
           //litterally adds the dice result to the html line
        }else{
           //else statement to account for commas
          rolls += `${diceresult[i]}, `;
        }
      }
      diceresult.splice(0,dicetray[dice]);
      //helps to move on to the next dice type for their individual results
      rolls += `</li>`;
       //ends the line for this dice type.
    }
  }
  rolls += '</ul>';
   //ends the dice individual dice roll list.
  document.querySelector('.hist').innerHTML = rolls;
   //updates the html.
}

function reset() {
   //resets everything back to default.
  dicetray = {
   "d4": 0,
   "d6": 0,
   "d8": 0,
   "d10": 0,
   "d12": 0,
   "d20": 0,
  };
  modifie = 0;
  document.querySelector(`.modif`).value = modifie;
  rolls = '';
  diceresult = [];
  document.querySelector('.hist').innerHTML = rolls;
  document.querySelector("#total").innerHTML = 0;
  for (let dice in dicetray) {
    document.querySelector(`#${dice}`).innerHTML = dicetray[dice];
  }
}
