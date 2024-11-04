const form = document.querySelector('form')
//get or post
//This usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')
  const normalbmi = document.querySelector('#normalbmi');
  const overbmi = document.querySelector('#overbmi');
  const lessbmi = document.querySelector('#lessbmi');


  // if(height === '' || height<0 || isNaN(height) && weight === '' || weight<0 || isNaN(weight)){
  //   results.innerHTML = `Pleses give a valid height ${height} and weight ${weight}`;}
     
  if(height === '' || height<0 || isNaN(height)){
    results.innerHTML = `Pleses give a valid height ${height}`
  }else if(weight === '' || weight<0 || isNaN(weight)){
    results.innerHTML = `Pleses give a valid weight ${weight}`
  } else{
      // weight in kilograms divided by height in meters squares 
      const bmi = (weight / ((height*height)/10000)).toFixed(2)
      //show the result
      results.innerHTML = `<span>BMI: ${bmi}</span>`;
      results.style.padding = '20px';
      // results.style.textSize = '20px';

      if(bmi < 18.6){
      
        lessbmi.style.color = 'blue';
        normalbmi.style.color ='black';
        overbmi.style.color ='black';
      }else 
      if(bmi >= 18.6 && bmi <=24.9){
        
        normalbmi.style.color ='green';
        lessbmi.style.color = 'black';
        overbmi.style.color ='black';
      }else{
        
        normalbmi.style.color ='black';
        lessbmi.style.color = 'black';
        overbmi.style.color ='red';
      }
  }

  
  
})