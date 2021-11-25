function checkPass()
{
    //Store the password field objects into variables ...
    var pass1 = document.getElementById('pass1');
    var pass2 = document.getElementById('pass2');
    var button = document.getElementById("myBtn2");
    var nomorHp = document.getElementById('nohp2');
    var message = document.getElementById('demo2');
    var message2 = document.getElementById('confirmMessage');
    //Set the colors we will be using ...
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
    
    var str = nomorHp.value;    
    var res = str.split("",2);    
    var status = "Bukan Nomor Telkomsel";

  
    if (nomorHp.value != "" && (res == "5,3" || res == "5,2" || res == "2,1" || res == "2,2" || res == "2,3" || res == "1,2" || res == "1,3" || res == "1,1") ) {    
        message.innerHTML = ""; 
        button.disabled = false;
        nomorHp.style.borderColor = goodColor;
        document.getElementById("basic-addon2").style.borderColor = goodColor;
        document.getElementById("basic-addon2").style.backgroundColor = "#fff";    
        message.style.color = goodColor; 

        if(pass1.value != "" && pass1.value == pass2.value){
            //The passwords match. 
            //Set the color to the good color and inform
            //the user that they have entered the correct password 
            pass2.style.borderColor = goodColor;
            message2.style.color = goodColor;
            message2.innerHTML = "Password Cocok!";
            button.disabled = false;
        }else if(pass2.value != "" && pass1.value != pass2.value){
            //The passwords do not match.
            //Set the color to the bad color and
            //notify the user.
            pass2.style.borderColor = badColor;
            message2.style.color = badColor;        
            message2.innerHTML = "Password Tidak Cocok!";
            button.disabled = true;
        }   
    }
    else if(nomorHp.value != "" && (res != "5,3" || res != "5,2" || res != "2,1" || res != "2,2" || res != "2,3" || res != "1,2" || res != "1,3" || res != "1,1") ){
        message.innerHTML = status; 
        button.disabled = true;
        nomorHp.style.borderColor = badColor;
        message.style.color = badColor;      
        document.getElementById("basic-addon2").style.backgroundColor = "#fff";      
        document.getElementById("basic-addon2").style.borderColor = badColor;

    }  
    //Store the Confimation Message Object ...    
    //Compare the values in the password field 
    //and the confirmation field
    
}
