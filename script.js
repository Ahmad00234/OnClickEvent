// function printvalue(){
//     var name=document.form1.name.value;  
// alert("Welcome: "+name);  
// }

//using byID
// function cubeValue(){
//     var number=document.getElementById("number").value;
//     alert(number*number*number);
// }


//for innerhtml method
// function showCase(){
//     var data=`Name:<input type='text' name='name'><br>Comment:<br><textarea rows='5' cols='80'></textarea>  
//     <br><input type='submit' value='Post Comment'/>`; 
//     document.getElementById('Excess').innerHTML=data;  
// }

//using innertext method

function validate() {  
    var msg;  
    if(document.myForm.userPass.value.length>7){  
    msg="good";  
    }
    else{  
    msg="poor";  
    }  
    document.getElementById('mylocation').innerText=msg;  
     }  