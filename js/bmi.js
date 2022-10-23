let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');
    let height_status = false, weight_status = false;

    if(height === '' || isNaN(height) || (height <= 0)){
        document.getElementById('height_error').innerHTML = 'Please provide a valid height';
    } else {
        document.getElementById('height_error').innerHTML = '';
        height_status = true;
    }

    if(weight === '' || isNaN(weight) || (weight <= 0)){
        document.getElementById('weight_error').innerHTML = 'Please provide a valid weight';
    } else {
        document.getElementById('weight_error').innerHTML = '';
        weight_status = true;
    }

    if(height_status && weight_status){
        const bmi = (weight / (height/100)**2).toFixed(1);

        if(bmi < 18.5){
            result.innerHTML = 'Your BMI is <b>' + bmi + '</b> which means You are <b>Underweight</b>';
        } else if(bmi <= 24.9){ 
            result.innerHTML = 'Your BMI is <b>' + bmi + '</b> which means You are <b>Normal Weight</b>';
        } else if(bmi <= 29.9){
            result.innerHTML = 'Your BMI is <b>' + bmi + '</b> which means You are <b>Overweight</b>';
        } else {
            result.innerHTML = 'Your BMI is <b>' + bmi + '</b> which means You are <b>Obesity</b>';
        }
    } else {
        alert('The form has errors');
        result.innerHTML = '';
    }
});