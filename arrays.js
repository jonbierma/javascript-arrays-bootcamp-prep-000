var chocolateBars=['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(myArray, myElement){
  var newArray=[myElement, ...myArray]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(myArray, myElement){
  myArray = [myElement, ...myArray]
}

function addElementToEndOfArray(myArray, myElement){
  var newArray=[...myArray, myElement]
  return newArray
}

function destructivelyAddElementToEndOfArray(myArray, myElement){
  myArray=[...myArray, myElement]
}

function accessElementInArray(myArray, myIndex){
  return myArray[myIndex]
}

function destructivelyRemoveElementFromBeginningOfArray(myArray){
  myArray.shift()
  return myArray
}

function removeelementFromBeginningOfArray(myArray){
  return myArray.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(myArray){
  return myArray.pop()
}

function removeElementFromEndOfArray(myArray){
  var newArray=myArray.slice(0,myArray.length-1)
  return newArray
}




