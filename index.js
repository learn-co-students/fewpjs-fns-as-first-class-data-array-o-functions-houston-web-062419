function wakeDog(a,b) {
    var sntnc = `Wake ${a} the ${b}`
    console.log(sntnc)
    return sntnc 
}
function leashDog(a,b) {
    var sntnc = `Leash ${a} the ${b}`
    console.log(sntnc)
    return sntnc 
}
function walkToPark(a,b) {
    var sntnc = `Walk to the park with ${a} the ${b}`
    console.log(sntnc)
    return sntnc 
}
function throwFrisbee(a,b) {
    var sntnc = `Throw the frisbee for ${a} the ${b}`
    console.log(sntnc)
    return sntnc 
}
function walkHome(a,b) {
    var sntnc = `Walk home with ${a} the ${b}`
    console.log(sntnc)
    return sntnc 
}
function unleashDog(a,b) {
    var sntnc = `Unleash ${a} the ${b}`
    console.log(sntnc)
    return sntnc 
}
var return_array = [];
const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog];

function exerciseDog(dogName,dogBreed) {
    routine.forEach(function(atvty) {
        return_array.push(atvty(dogName,dogBreed))
    })
    return return_array
}
