function DeleteMe() {
    document.getElementById("output_aria").value = ""   

}

function calclution(NewValue){
    document.getElementById("output_aria").value += NewValue; 

}

function Answer() {
var a = document.getElementById("output_aria").value ; 
var b = eval(a);
document.getElementById("output_aria").value = b

}
