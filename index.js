form=document.querySelector("#submit")

form.addEventListener("click",(e)=>{
    e.preventDefault()
    
    var height=parseFloat(document.querySelector("#height").value)
    var weight= parseFloat(document.querySelector("#weight").value)
    var bodymass= weight/(height*height)

    console.log(bodymass);
     var b=document.querySelector(".sec2 button");
    b.innerHTML=bodymass

    if (bodymass<=18.5) {
       var under= document.querySelector(".sec2 button")
       under.innerHTML=" Underweight: Your BMI is less than 18.5 "
    }
    else if (bodymass>=18.5 && bodymass<=24.9) {
        var under= document.querySelector(".sec2 button")
        under.innerHTML="  Healthy weight: Your BMI is 18.5 to 24.9"
    }
    else if (bodymass>=25 && bodymass<=29.9 ) {
        var under= document.querySelector(".sec2 button")
        under.innerHTML="   Overweight: Your BMI is 25 to 29.9"
    }
    else if (bodymass>=30  ) {
        var under= document.querySelector(".sec2 button")
        under.innerHTML="    Obese:  Your BMI is 30 or higher "
    }
    else if (weight !== '' || height !== '') {
        alert("please enter your information")
        b.innerHTML="Enter your height and weight and you'll see your BMI result "
    }
    else {
    }
    return bodymass.toFixed(2)
}
)