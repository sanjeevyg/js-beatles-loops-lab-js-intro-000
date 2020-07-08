// add solution here
function theBeatlesPlay(musicians, instruments) {
var newArray = []
for ( let i = 0; i < musicians.length; i++) {
  newArray.push(`${musicians[i]} plays ${instruments[i]}`)
}
return newArray
}

function johnLennonFacts(array) {
  let counter = 0
  var newArray = []
  while (counter < array.length) {
    newArray.push(`${array[counter]}!!!`)
      counter++
  }
  return newArray
}

function iLoveTheBeatles(num) {
  var array = []
  function incrementVariable(){
    num++
    return num
  }
  do {array.push(`I love the Beatles!`)}  while (incrementVariable() < 15)
  return array
}