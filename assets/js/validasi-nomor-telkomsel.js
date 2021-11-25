function nomorTelkomsel() {
    var nomorHp = document.getElementById('nohp');
    var message = document.getElementById('demo');
    var button = document.getElementById("myBtn");  
    var str = nomorHp.value;    
    var res = str.split("",2);    
    var status = "Bukan Nomor Telkomsel";

    var goodColor = "#66cc66";
    var badColor = "#ff6666";

    if (res == "5,3" || res == "5,2" || res == "2,1" || res == "2,2" || res == "2,3" || res == "1,2" || res == "1,3" || res == "1,1") {    
        message.innerHTML = ""; 
        button.disabled = false;
        nomorHp.style.borderColor = goodColor;
        document.getElementById("basic-addon1").style.borderColor = goodColor;
        document.getElementById("basic-addon1").style.backgroundColor = "#fff";    
        message.style.color = goodColor;    
    }
    else{
        message.innerHTML = status; 
        button.disabled = true;
        nomorHp.style.borderColor = badColor;
        message.style.color = badColor;    
        document.getElementById("basic-addon1").style.backgroundColor = badColor;
        document.getElementById("basic-addon1").style.borderColor = badColor;

    }

}