let heightInput = document.querySelector("#height");
let weightInput = document.querySelector("#weight");
let calculateButton = document.querySelector(".calculate");
let result = document.querySelector(".result");
let statement = document.querySelector(".result-statement");
let BMI, height, weight;

calculateButton.addEventListener("click", ()=>{

    height = heightInput.value;
    weight = weightInput.value;
    BMI = weight/((height/100)**2); 
    result.innerText = BMI;

    if(BMI < 18.5){
        statement.innerText = "Your BMI is  which means You are Underweight";    
    }else if((BMI >= 18.5) && (BMI <= 24.9)){
        statement.innerText = "Your BMI is  which means You are Normal Weight"; BMI
    }else if((BMI >= 25) && (BMI <= 29.9 )){
        statement.innerText = "Your BMI is  which means You are Overweight";
    }else{
        statement.innerText = "Your BMI is  which means You are Obesity";
    }
});

