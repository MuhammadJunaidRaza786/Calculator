let result = document.getElementById("input_text");
function calculate(number){
    result.value+=number;
}
function answer(){
    try{
        result.value=eval(result.value);
    }
    catch(err){
        alert ("Enter the Valid Input");
    }
}
function clr(){
    result.value=" ";
}
function del(){
    result.value=result.value.slice(0,-1); 
}
