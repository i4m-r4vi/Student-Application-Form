var table=document.getElementById("table-container");
var button=document.querySelector("Button");
var pername=document.getElementById("name");
var age=document.getElementById("age");
var gender=document.getElementById("ge");
var course=document.getElementById("course");
var email=document.getElementById("email");

button.addEventListener('click',()=>{

    if (pername.value==0 || age.value==0 || gender.value==0 || course.value==0 || email.value==0) {
        alert("Please fill in all the fields");
        return false;
    }

    var row=table.insertRow(-1);
    var deletebtn=document.createElement('button');
    var cel1=row.insertCell(0);
    var cel2=row.insertCell(1);
    var cel3=row.insertCell(2);
    var cel4=row.insertCell(3);
    var cel5=row.insertCell(4);
    var cel6=row.insertCell(5);

    cel1.innerHTML=pername.value ;
    cel2.innerHTML=age.value ;
    cel3.innerHTML=gender.value;
    cel4.innerHTML=course.value;
    cel5.innerHTML=email.value;
    cel6.append(deletebtn);
    deletebtn.innerText="Delete";
    deletebtn.style.backgroundColor="red";
    deletebtn.style.color="white";
    deletebtn.addEventListener('click',()=>{
        row.remove()
    })
    pername.value="";
    age.value="";
    gender.checked=false;
    course.value="Select Course";
    email.value="";
})

