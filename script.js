let allchk = true;

//  $('.date').datepicker({  
//     format: 'dd-mm-yyyy'  
//   });  


function print1(){
    debugger
    let province2 = document.getElementById("province1").value;
    let city2 = document.getElementById("city1").value;
    let uname2 = document.getElementById("uname1").value;
    let pass2 = document.getElementById("pass1").value;
    let fname2 = document.getElementById("gname1").value;
    // let dataCome = document.getElementById("dob1").value;
    // let dob2 = dataCome.toLocaleDateString();
    let cnumber2 = document.getElementById("cnumber1").value;
    let email2 = document.getElementById("email1").value;

    let emailChk=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$/;
    let txtchk = /^[A-Za-z ]+$/;
    let pchk = /^\(?([9]{1})\)?\(?([2]{1})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{7})$/;
    let ltrchk = /^(?=.*\d)(?=.*[a-zA-Z])([a-zA-Z0-9])+$/;
    let passchk = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/;
    // let datchk = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
    // let dat2chk= /^(3[01]|[1-2][0-9]|0?[1-9])[/](1[0-2]|0?[1-9])[/](([0-9]{2})?[0-9]{2})$/;


    //province
    if(province2 == "")
    {
        allchk = false;
        document.getElementById("province1").style.border = "solid red 2px ";
    }else
    {
        document.getElementById("province1").style.border = " solid black 2px";
    }


    //city
    if(city2 == "" || !txtchk.test(city2))
    {
        allchk= false;
        document.getElementById("city1").style.border = " solid red 2px";
    }else
    {
        document.getElementById("city1").style.border = " solid black 2px"; 
    }


    //username
    if(uname2=="" || !ltrchk.test(uname2) )
    {
        allchk = false;
        document.getElementById("uname1").style.border = "solid 2px red";
    }
    else
    {
        document.getElementById("uname1").style.border = "solid 2px black";
    }


    //password
    if(passchk=="" || !passchk.test(pass2))
    {
        allchk =false;
        document.getElementById("pass1").style.border = "solid red 2px";
    }
    else{
        document.getElementById("pass1").style.border = "solid black 2px";

    }


    //email
    if(email2=="" || !emailChk.test(email2))
    {
        allchk =false;
        document.getElementById("email1").style.border = "solid red 2px";
    }
    else{
        document.getElementById("email1").style.border = "solid black 2px";

    }


    //contact number
    if(cnumber2 == "" || !pchk.test(cnumber2))
    {
        allchk =false;
        document.getElementById("cnumber1").style.border = " solid red 2px";
    }else
    {
        document.getElementById("cnumber1").style.border = " solid black 2px";
    }


    //date of birth
    // if(dob2=="" || !datchk.test(dob2))
    // {
    //     allchk = false;
    //     document.getElementById("dob1").style.border = " red solid 2px";
    // }
    // else{
    //     document.getElementById("dob1").style.border = " black solid 2px";
    // }


    //full name
    if(fname2 == "" || !txtchk.test(fname2))
    {
        allchk= false;
        document.getElementById("gname1").style.border = " solid red 2px";
    }else
    {
        document.getElementById("gname1").style.border = " solid black 2px"; 
    }


    // document.write(allchk);
    return allchk;
}





// ///////////////////////////////////////////////////////////////////////////////////////////////// 

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