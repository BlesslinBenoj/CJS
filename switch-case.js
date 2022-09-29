//1

let grade = "A";
//O
//A
//B
//U

switch(grade){
  case "O":
    console.log("Excellent grade");
    break;
  case "A":
  case "B":
    console.log("Super grade");
    break;
  case "U":
    console.log("Failed ! No grade");  
    break;
  default:
    console.log("Unknown grade");
}

//2

let marks = 60;

switch(true){

  case (marks > 50):
    console.log("pass");
    break;

  case (marks > 90):
    console.log("Excellent");
    break;

  case (marks < 50):
    console.log("Failed");
    break;
  default:
    console.log("unknown grade");

}




