let num0 = document.querySelector("div#num0")
let num1 = document.querySelector("div#num1")
let num2 = document.querySelector("div#num2")
let num3 = document.querySelector("div#num3")
let num4 = document.querySelector("div#num4")
let num5 = document.querySelector("div#num5")
let num6 = document.querySelector("div#num6")
let num7 = document.querySelector("div#num7")
let num8 = document.querySelector("div#num8")
let num9 = document.querySelector("div#num9")
let dot = document.querySelector("div#dot")

let plus = document.querySelector("div#plus")
let minus = document.querySelector("div#minus")
let mult = document.querySelector("div#mult")
let division = document.querySelector("div#division")
let equal = document.querySelector("div#equal")
let del = document.querySelector("div#del")

let display = document.querySelector("div#display")

let store = "";
let flagPlus = false;
let flagDot = true;
let flagMinus = false;
let flagMult = false;
let flagDiv= false;

num0.addEventListener("click",function(){    
    store = store + "0"
    display.innerHTML = store
    flagPlus = true
    flagMinus= true
    flagMult= true
    flagDiv= true
})
num1.addEventListener("click",function(){    
    store = store + "1"
    display.innerHTML = store
    flagPlus = true
    flagMinus= true
    flagMult= true
    flagDiv= true
})
num2.addEventListener("click",function(){    
    store = store + "2"
    display.innerHTML = store
    flagPlus = true
    flagMinus= true
    flagMult= true
    flagDiv= true
})
num3.addEventListener("click",function(){    
    store = store + "3"
    display.innerHTML = store
    flagPlus = true
    flagMinus= true
    flagMult= true
    flagDiv= true
})
num4.addEventListener("click",function(){    
    store = store + "4"
    display.innerHTML = store
    flagPlus = true
    flagMinus= true
    flagMult= true
    flagDiv= true
})
num5.addEventListener("click",function(){    
    store = store + "5"
    display.innerHTML = store
    flagPlus = true
    flagMinus= true
    flagMult= true
    flagDiv= true
})
num6.addEventListener("click",function(){    
    store = store + "6"
    display.innerHTML = store
    flagPlus = true
    flagMinus= true
    flagMult= true
    flagDiv= true
})
num7.addEventListener("click",function(){    
    store = store + "7"
    display.innerHTML = store
    flagPlus = true
    flagMinus= true
    flagMult= true
    flagDiv= true
})
num8.addEventListener("click",function(){    
    store = store + "8"
    display.innerHTML = store
    flagPlus = true
    flagMinus= true
    flagMult= true
    flagDiv= true
})
num9.addEventListener("click",function(){    
    store = store + "9"
    display.innerHTML = store
    flagPlus = true
    flagMinus= true
    flagMult= true
    flagDiv= true
})
dot.addEventListener("click",function(){    
    if (flagDot==true){
        store = store + "."
        display.innerHTML = store
        flagDot = false
    }
})
plus.addEventListener("click",function(){    
    if (flagPlus==true){
        store = store + "+"
        display.innerHTML = store
        flagDiv = false
        flagMult = false
        flagMinus = false
        flagPlus = false
        flagDot = true
    }
})
minus.addEventListener("click",function(){    
    if (flagMinus==true){
        store = store + "-"
        display.innerHTML = store
        flagDiv = false
        flagMult = false
        flagMinus = false
        flagPlus = false
        flagDot = true
    }
})
mult.addEventListener("click",function(){    
    if (flagMult==true){
        store = store + "*"
        display.innerHTML = store
        flagDiv = false
        flagMult = false
        flagMinus = false
        flagPlus = false
        flagDot = true
    }
})
division.addEventListener("click",function(){    
    if (flagDiv==true){
        store = store + "/"
        display.innerHTML = store
        flagDiv = false
        flagMult = false
        flagMinus = false
        flagPlus = false
        flagDot = true
    }
})
equal.addEventListener("click",function(){
    let evalString = display.innerHTML
    let arrayNumbers = []
    let numberString = "";
    let j = 0;
    let operands = [];
    let finalValue = 0;
  
    for (let i = 0; i <= evalString.length; i++){
        if (isNaN(evalString[i]) == false){
            numberString = numberString + evalString[i]  
        }else if(evalString[i] == "."){
            numberString = numberString + evalString[i]
        }else{
            arrayNumbers[j] = Number(numberString)
            operands[j] = evalString[i]
            j = j+1
            numberString = ""
        }
    }

    finalValue = arrayNumbers[0]
    for (let i = 0; i <=(arrayNumbers.length-1); i++){
        if (operands[i] == "+"){
            finalValue = finalValue + arrayNumbers[i+1]
        }else if (operands[i] == "-"){
            finalValue = finalValue - arrayNumbers[i+1]
        }else if (operands[i] == "*"){
            finalValue = finalValue * arrayNumbers[i+1]
        }else if (operands[i] == "/"){
            finalValue = finalValue / arrayNumbers[i+1]
        }
    }

    display.innerHTML = finalValue
    store = finalValue
})
del.addEventListener("click",function(){
    store = ""
    display.innerHTML = store
})


