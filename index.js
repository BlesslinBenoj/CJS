var tweet = prompt("Compose your tweet:");
var tweetcount = tweet.length
alert("you have written " + tweetcount + "characters, you have " + (140 - tweetcount) + "characters remaining.");








// name character capitilization

var name = prompt("what is your name : ");

var FirstChar = name.slice(0,1);

var FirstCharCap = FirstChar.toUpperCase();

var restofname = name.slice(1,name.length);

restofname = restofname.toLowerCase();

var name = FirstCharCap + restofname;

alert("Hello " + name );


//dogage in human years

var DogAge = prompt("what's your dog age ? ");

var HumanAge = ((DogAge - 2) * 4) + 21;

alert("your dog age is " + HumanAge + "years old in Human years");



//function

function GetMilk() {
    
  console.log("leavehouse");
  console.log("turn left");
  console.log("turn left");
  console.log("turn right");
  console.log("turn right");
  console.log("turn right");
  console.log("turn right");
  console.log("turn right");
  console.log("turn right");
  console.log("turn right");
  console.log("enterhouse");
      
  }
  
  GetMilk();
  

  // LIFE IN WEEKS

  function LifeInWeeks(age){
    var yearsremaining = 90 - age ;
    var Days = yearsremaining * 365 ;
    var Weeks = yearsremaining * 52 ;
    var Months = yearsremaining * 12 ;

console.log("You have "+Days+" days,"+Weeks+" weeks and "+Months+" months left");

}

LifeInWeeks(21);
