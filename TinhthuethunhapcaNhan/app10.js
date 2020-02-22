function count() {
    let a = parseInt(document.getElementById("number1").value);
    if (a <= 7000000){
        money = a*0.1;
        alert('so tien phai nop la: '+ money);
    }
    else if( a<15000000){
        money = a*0.2;
        alert('so tien phai nop la: ' + money);
    }
    else{
        money = a*0.3;
        alert('so tien phai nop la: '+ money);
    }
}