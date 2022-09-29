//1

let weather = "hot";

if (weather === "hot") {

  console.log("weather is hot");
  
}
else{

  console.log("weather is cold");
}

//2

let isRaining = false;

let isCloudy = true;

if(isRaining || isCloudy) {

  console.log("Dont forget to take Umbrella !");
}
else {

  console.log("Sky is normal ! Enjoy the weather !");
}

//3

//if hour is between 12am(0) to 1pm(13)  = good morning
//if hour is between 1pm(13) to 5pm(17)   = good afternoon
//if hour is between 5pm(17) to 12am(0)   = good evening

let hour = new Date().getHours();
//let hour = 15;

if (hour >= 0 && hour <= 13){
  console.log("Good morning");
}
else if(hour >= 13 && hour <= 17){
  console.log("Good afternoon");
}
else{
  console.log("Good evening");
}