let originalWord="civic"
//method 1
let reverseWord=""
let length = originalWord.length
for (let i=length; i>=0; i--){
    reverseWord=reverseWord+ originalWord.charAt(i)
}
if(originalWord===reverseWord){
    console.log(`The given word ${originalWord} is a palindrome`)
}
else {
    console.log(`The given word ${originalWord} is not a palindrome`)
}
/////////////////////////////////////////////////////////////////////////////////////////////
//method 2 using array

let reverse=""
characters=originalWord.split("")
for (let i=characters.length-1; i>=0; i--){
    reverse=reverse+characters[i]
}
if(originalWord===reverse){
    console.log(`The given word ${originalWord} is a palindrome`)
}
else {
    console.log(`The given word ${originalWord} is not a palindrome`)
}