const form = document.querySelector("form")

form.addEventListener('submit', function(e){
    e.preventDefault();                                             //---> For stopping the values to get submitted

    const height= parseInt(document.querySelector("#height").value) //---> For converting String to integer for calculation.."parseInt is used".
    const weight= parseInt(document.querySelector("#weight").value) //---> For converting String to integer for calculation.."parseInt is used".
    const result= document.querySelector("#result")
    const guide= document.querySelector(".guide")

     if(height===''|| height<0 || isNaN(height)){            
        result.innerHTML=`Please give a valid height ${height}`;
     }
     else if(weight===''|| weight<0 || isNaN(weight)){
        result.innerHTML=`Please give a valid weight ${weight}`;
        
    }

     else{
    const bmi = (weight /((height*height)/10000)).toFixed(2)     //---> to.Fixedtwo is used here so that we can get the decimal value upto 2 decimal place..
    result.innerHTML=`<span>${bmi}</span>`
    
    
    if (bmi < 18.6){
     guide.innerHTML= '<h1>"You are under-weight"</h1>'
    }
    else if(bmi >18.6 && bmi <24.9){
       guide.innerHTML= `<h1>"You are in normal range"</h1>`
    }
    else {
       guide.innerHTML= `<h1>"You are over-weight"</h1>`
    }
   
   
     }
     
    
})