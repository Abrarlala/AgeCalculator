const userdate = document.querySelector("#birthdate");
const age = document.querySelector(".age");
const btn = document.querySelector(".btn");
let day ;
let month;
let year;
function Changedate(){
  let  birthdate = userdate.value;

   if(birthdate === ""){
    alert("Enter your date of birth");
   }
   else{
    age.innerHTML=getAge(birthdate);
   }
 
   week();
}

function getAge(birthdate){
  let arr = [0,1,2,3,4,5,6,7,8,9,10,11,12];
  const currentDate = new Date(); 
  let currentMonth = currentDate.getMonth() +1 ;
  let currentDay = currentDate.getDate();
  let currentYear = currentDate.getFullYear();
  const years = new Date(birthdate)
  let userYear =  years.getFullYear();
  let userDay = years.getDate();
  let userMonth = years.getMonth() + 1;

   year = currentYear - userYear;
  if(userMonth>currentMonth){
    year = year - 1;
    currentMonth = currentMonth + 12 ;
      month = currentMonth - userMonth
  } 
  else{
    month = currentMonth - userMonth;
  }
  if(userDay > currentDay){
    month = month - 1 ;
    currentDay = currentDay + 30 ;
     day = currentDay - userDay;
  }
  else {
    day = currentDay - userDay;
  }
 
  let m = year*12 + month; 
  document.querySelector(".months").innerHTML = "or "+m +" month "+ day+ " days";

  return year+" years "+month+" month and "+day+" days";
}





btn.addEventListener("click", Changedate);