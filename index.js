//Function 1

var array = [];
function dwarfRollCall(dwarves) {
  for (let i = 0; i < dwarves.length; i++) {
    array.push(`${i+1}. ${dwarves[i]}`);
  } 
  var actualString = array.join(" ");

  return `${actualString} `;   // needed an extra space
}  


/* Test 1 
describe("dwarfRollCall", function() {
      it("prints out dwarfs in a numbered list based on an array'", function() {
        var dwarves = ["Dopey", "Grumpy", "Bashful"];
        expect(dwarfRollCall(dwarves)).toEqual("1. Dopey 2. Grumpy 3. Bashful ");
      });
});                 */ 

// Function 2

function summonCaptainPlanet(planeteerCalls){
  return planeteerCalls.map( c => c.toUpperCase().concat("!"));
}

// OR    c.toUpperCase() + "!");

/* ALTERNATIVE WHILE LOOP VERSION

function summonCaptainPlanet(planeteerCalls){
  var arr = []
  let i = planeteerCalls.length - 1;
  while (i >= 0){
    arr.push(planeteerCalls[i].toUpperCase() + "!")
    i--;
  }
  return arr;
}                                 */


/* Test 2
describe("summonCaptainPlanet", function() {
  it("returns an array with the same number of elements that it was given", function() {
        var veggies = ["carrot", "cucumber", "pepper"];
        expect(summonCaptainPlanet(veggies).length).toEqual(3);
  });

  it("capitalizes each element and adds an exclamation mark", function() {
        var fruits = ["apple", "banana", "orange"];
        var result = summonCaptainPlanet(fruits);
        result.forEach(function(item){
          expect(item).toContain("!");
        });
  });
});           */ 

// Function 3 
function longPlaneteerCalls(words) {
  for (let i =0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true;
    } 
  }  return false;
}

/* Test 3 
describe("longPlaneteerCalls", function() {
      it("returns true if any calls are longer than 4 characters", function() {
        var longCalls = ["earth", "wind", "fire", "water", "heart"];
        expect(longPlaneteerCalls(longCalls)).toBe(true);
      });

      it("returns false if no calls are longer than 4 characters", function() {
        var shortCalls = ["wind", "fire"];
        expect(longPlaneteerCalls(shortCalls)).toBe(false);
      });
});   */


// Function 4 
let cheeses = ["cheddar", "gouda", "camembert"];

function findTheCheese(foods) {
  for (let i=0; i < foods.length; i++) {
    if (cheeses.includes(foods[i]))  {
      return foods[i]; 
    }
  } return "no cheese!";
}
 
/*  Function 4 - Working code, but hardcoded 

function findTheCheese (foods) {
  for (let i=0; i < foods.length; i++) {
    if (foods[i] === "cheddar")  {
      return foods[i]
    } else if (foods[i] === "gouda")  {
      return foods[i]
    } else if (foods[i] === "camembert")  {
      return foods[i]
    } 
  } 
  return "no cheese!"
}    
*/



// how would I return all the values 
// in the foods array and not just the first one which matched

/******  EXAMPLE CODE - PLAY WITH THIS - learn .filter() and .indexOf()   ********

let cheeses = ["cheddar", "gouda", "camembert"];
let foods = ["gooby", "camembert", "cheddar"];

var list = cheeses.filter(function(x){
   return foods.indexOf(x) >= 0;
})

list;                 *********       */ 


