//If Case Assignment
let browserName="Edge"
if(browserName=="Chrome"){
    console.log("Launching Chrome Browser")
}
else if(browserName=="Edge"){
    console.log("Launching Edge Browser")
}
else {
    console.log("Launching Default Browser")
}
/////////////////////////////////////////////////////////////////////////////

//Switch Case Assignment

let testType="Sanity"

switch (testType){
    case "Regression":
        console.log(`The Tests to be executed is ${testType}`)
        break
    case "Smoke":
        console.log(`The Tests to be executed is ${testType}`)
        break
    case "Sanity": 
        console.log(`The Tests to be executed is ${testType}`)
        break
    default :
        console.log("The Tests to be executed is end to end")
}

//////////////////////////////////////////////////////////////////////////////////////////////
