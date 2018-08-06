//Function 1

var string = [];
function dwarfRollCall(dwarves) {
  for (let i = 0; i < dwarves.length; i++) {
    string.push(`${i+1}. ${dwarves[i]}`);
  } 
  var actualString = string.join(" ");
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
  return planeteerCalls.map( c => c.toUpperCase().concat("!"))
}

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
      return true
    } else {
      return false
    }
  }
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

/*
// Function 4 - Working code, but hardcoded 
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

var fullWordList = ['1','2','3','4','5'];
var wordsToRemove = ['1','2','3'];

var newList = fullWordList.filter(function(x){
   return wordsToRemove.indexOf(x) >= 0;
})
console.log(newList);   OR JUST  newlist;     *********       */ 

let cheeses = ["cheddar", "gouda", "camembert"];
let foods = ["gooby", "camembert", "cheddar"];


function findTheCheese(foods) {
  var matchingFood;
  for (let i=0; i < foods.length; i++) {
    if (cheeses.includes(foods[i]))  {
      matchingFood = foods[i]; 
      return matchingFood; 
    }
  } // if (matchingFood === undefined) {} - not needed 
  return "no cheese!"
}
 