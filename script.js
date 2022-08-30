let allchk = true;
let a = 0;
var uploaded_image ="";
let imgchk = false;
//  $('.date').datepicker({  
//     format: 'dd-mm-yyyy'  
//   });  

const image_input = document.querySelector("#image-input");

function print1() {
    debugger
    
const image_input = document.querySelector("#image-input");
    allchk = true;
    var i = 0;
    var gValid = false;
    let province2 = document.getElementById("province1").value;
    let city2 = document.getElementById("city1").value;
    let uname2 = document.getElementById("uname1").value;
    let pass2 = document.getElementById("pass1").value;
    let fname2 = document.getElementById("gname1").value;
    let dataCome = document.getElementById("dob1").value;
    // let dob2 = dataCome.toLocaleDateString();
    // console.log(dataCome);
    let cnumber2 = document.getElementById("cnumber1").value;
    let email2 = document.getElementById("email1").value;
    var genderSel1 = document.getElementsByName("genderSel");
    let conditionSel1 = document.getElementById("conditionChk");




    let emailChk = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$/;
    let txtchk = /^[A-Za-z ]+$/;
    let pchk = /^\(?([9]{1})\)?\(?([2]{1})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{7})$/;
    let ltrchk = /^(?=.*\d)(?=.*[a-zA-Z])([a-zA-Z0-9])+$/;
    let passchk = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/;
    let datecheck = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    // let datchk = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
    // let dat2chk= /^(3[01]|[1-2][0-9]|0?[1-9])[/](1[0-2]|0?[1-9])[/](([0-9]{2})?[0-9]{2})$/;
    // let datecheck = /^(0[1-9]|1[0-2])[/](0[1-9]|[12][0-9]|3[01])[/]\d{4}$/;


    console.log(allchk);
    //province
    if (province2 == "") {
        allchk = false;
        document.getElementById("province1").style.border = "solid red 2px";
    } else {
        document.getElementById("province1").style.border = " solid #ced4da 2px";
    }


    console.log(allchk);
    //city
    if (city2 == "" || !txtchk.test(city2)) {
        allchk = false;
        document.getElementById("city1").style.border = " solid red 2px";
    } else {
        document.getElementById("city1").style.border = " solid #ced4da 2px";
    }


    console.log(allchk);
    //username
    if (uname2 == "" || !ltrchk.test(uname2)) {
        allchk = false;
        document.getElementById("uname1").style.border = "solid 2px red";
    }
    else {
        document.getElementById("uname1").style.border = "solid 2px #ced4da";
    }


    console.log(allchk);
    //password
    if (passchk == "" || !passchk.test(pass2)) {
        allchk = false;
        document.getElementById("pass1").style.border = "solid red 2px";
    }
    else {
        document.getElementById("pass1").style.border = "solid #ced4da 2px";

    }


    console.log(allchk);
    //email
    if (email2 == "" || !emailChk.test(email2)) {
        allchk = false;
        document.getElementById("email1").style.border = "solid red 2px";
    }
    else {
        document.getElementById("email1").style.border = "solid #ced4da 2px";

    }


    console.log(allchk);
    //contact number
    if (cnumber2 == "" || !pchk.test(cnumber2)) {
        allchk = false;
        document.getElementById("cnumber1").style.border = " solid red 2px";
    } else {
        document.getElementById("cnumber1").style.border = " solid #ced4da 2px";
    }


    // date of birth
    if(dataCome=="" || !datecheck.test(dataCome))
    {
        allchk = false;
        document.getElementById("dob1").style.border = " red solid 2px";
    }
    else{
        document.getElementById("dob1").style.border = " #ced4da solid 2px";
    }


    console.log(allchk);
    //full name
    if (fname2 == "" || !txtchk.test(fname2)) {
        allchk = false;
        document.getElementById("gname1").style.border = " solid red 2px";
    } else {
        document.getElementById("gname1").style.border = " solid #ced4da 2px";
    }


    console.log(allchk);
    //Gender
    while (!gValid && i < genderSel1.length) {
        if (genderSel1[i].checked) {
            gValid = true;

        }
        i++;
    }
    if (!gValid) {
        allchk = false;
        document.getElementById("nice").style.border = "red solid 2px";
    } else {

        document.getElementById("nice").style.border = "#ced4da solid 2px";
    }
    
    console.log(allchk);
    //checkbox
    if (!conditionSel1.checked) {
        allchk = false;
        alert("Accept terms & conditions.");
        // document.getElementById("labelSel").style.textDecoration = "underline";
        // document.getElementById("labelSel").style.color = "red";
    }
    // else {

    //     document.getElementById("labelSel").style.textDecoration = "none";
    //     document.getElementById("labelSel").style.color = "black";
     // }
    // image_input.addEventListener("change", function() {
    //     const reader = new FileReader();
    //     reader.addEventListener("load", () => {
    //       const uploaded_image = reader.result;
    //       document.getElementById("display-image").style.backgroundImage = `url(${uploaded_image})`;
    //     });
    //     reader.readAsDataURL(this.files[0]);
    //   });
    if(imgchk == false){
document.getElementById("display-image").style.border = "red 1px solid";
    }else{
        
document.getElementById("display-image").style.border = "black 1px solid";
    }


    console.log(allchk);
    // document.write(allchk);
    return allchk;
}

image_input.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const uploaded_image = reader.result;
      document.querySelector("#display-image").style.backgroundImage = `url("${uploaded_image}")`;
      document.querySelector("#display-image").style.width = "400px";      
      document.querySelector("#display-image").style.height = "225px";
      document.querySelector("#display-image").style.visibility = "visible";
      if(!uploaded_image=="")
      {
        imgchk = true;
      }
    });
    reader.readAsDataURL(this.files[0]);
  });




// /////////////////////////////////////////////////////////////////////////////////////////////////















    // if (!formValid) alert("Must check some option!");
    // return formValid;

// function validatedate(inputText)
//   {
//   var dateformat = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
//   // Match the date format through regular expression
//   if(inputText.value.match(dateformat))
//   {
//   document.form1.text1.focus();
//   //Test which seperator is used '/' or '-'
//   var opera1 = inputText.value.split('/');
//   var opera2 = inputText.value.split('-');
//   lopera1 = opera1.length;
//   lopera2 = opera2.length;
//   // Extract the string into month, date and year
//   if (lopera1>1)
//   {
//   var pdate = inputText.value.split('/');
//   }
//   else if (lopera2>1)
//   {
//   var pdate = inputText.value.split('-');
//   }
//   var mm  = parseInt(pdate[0]);
//   var dd = parseInt(pdate[1]);
//   var yy = parseInt(pdate[2]);
//   // Create list of days of a month [assume there is no leap year by default]
//   var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];
//   if (mm==1 || mm>2)
//   {
//   if (dd>ListofDays[mm-1])
//   {
//   alert('Invalid date format!');
//   return false;
//   }
//   }
//   if (mm==2)
//   {
//   var lyear = false;
//   if ( (!(yy % 4) && yy % 100) || !(yy % 400))
//   {
//   lyear = true;
//   }
//   if ((lyear==false) && (dd>=29))
//   {
//   alert('Invalid date format!');
//   return false;
//   }
//   if ((lyear==true) && (dd>29))
//   {
//   alert('Invalid date format!');
//   return false;
//   }
//   }
//   }
//   else
//   {
//   alert("Invalid date format!");
//   document.form1.text1.focus();
//   return false;
//   }
//   }