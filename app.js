function getnumber(num){
    var nu=document.getElementById("result");
    // console.log(nu.value);
    nu.value+=num;
}
function clearresult(){
    var nu=document.getElementById("result");
    nu.value="";  
}
function getresult(){
    var nu=document.getElementById("num");
    nu.value=eval(result.value);  
}
