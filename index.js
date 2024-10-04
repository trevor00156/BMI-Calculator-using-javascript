let form=document.querySelector('form');


form.addEventListener('submit', function(e){

  e.preventDefault();

  let height=parseInt(document.querySelector('.height').value);
  
  let weight=parseInt(document.querySelector('.weight').value);
  let result=document.querySelector('.result')

  if(height===0 || height<0 || isNaN(height)){
     result.innerHTML=`enter the valid height ${height}`
  }
  if(weight===0 || weight<0 || isNaN(weight)){
     result.innerHTML=`enter the valid height ${weight}`
  }else{

     let bmi=(weight/((height*height)/10000)).toFixed(2);
     result.innerHTML=`<p> Your BMI is ${bmi}`;
  }
})