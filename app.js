var capitalLetters=
'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var numbers=
'1234567890'
var password= prompt('Passwaord')
var minLenght=false
var capitalLettersHe=false
var numbersHe = false

if (password.length>=6)minLenght=true
for (var i=0; i<password.length; i++){
    console.log(password[i])
    if (capitalLetters.indexOf(password[i] !== -1)){
        capitalLettersHe=true
    }}
    if(numbers.indexOf(password[i])!== -1){
        numbersHe=true
    }
    if (minLenght && capitalLettersHe && numbersHe){
        alert('Password is valid')
    }
    else{
        alert('Password is not valid')
    }

var arr= [[1,2],[3,4],[5,6]]
var joinArr= arr.join(' ')
console.log(joinArr)

 