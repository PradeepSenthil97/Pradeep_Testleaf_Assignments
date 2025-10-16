let score = 91
switch(true){
    case (score>=90):
        console.log(`The score and grade of the student is ${score} and A Grade`)
        break
    case (score>=80):
        console.log(`The score and grade of the student is ${score} and B Grade`)
        break
    case (score>=70):
        console.log(`The score and grade of the student is ${score} and C Grade`)
        break
    case (score>=60):
        console.log(`The score and grade of the student is ${score} and D Grade`)
        break
    default :
        console.log(`The score and grade of the student is ${score} and F Grade`)
        break
}