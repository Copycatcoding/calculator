
// this is the function for displaying in the display 
var inputbox= document.getElementById('input_take');
var result="";
function append(data){
 inputbox.value=inputbox.value+data;
}
//    this is the funcion for the calculation
var resultbox=document.getElementById('result')
function calculate(){
    var inputbox = document.getElementById('input_take');
    var result;
try {
    result=eval(inputbox.value);
} catch (error) {
    result = 'Error';
}
resultbox.innerHTML=result;
}




// this is the function for the clear /ac
function ac(){
var result="";
inputbox.value="";
resultbox.innerHTML="";
}
//   this is the function for delete 
function del(){
var str = inputbox.value;
inputbox.value=str.substr(0,str.length-1);
}
