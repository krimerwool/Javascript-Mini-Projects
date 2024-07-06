const form = document.querySelector('form');

form.addEventListener('submit', function(e){

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const results = parseInt(document.querySelector('#results').value);

    if(height = '' || height <0 || isNaN(height)){
        results.innerHTML = `Please enter a valid ${height}`;
    }
    else if(weight = '' || weight <0 || isNaN(weight)){
        results.innerHTML = `Please enter a valid ${weight}`;
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span> ${bmi}</span>`;
    }
})