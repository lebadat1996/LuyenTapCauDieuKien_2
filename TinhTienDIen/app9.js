function result1() {
    let a = parseInt(document.getElementById("number1").value);
    if(a <=100){
        money = a*1000;
        alert('so tien phai tra la: ' + money);
    }
    else if (a<150){
        money = a*2000;
        alert('so tien phai tra la: ' + money);
    }
    else if (a<200){
        money = a*2500;
        alert('so tien phai tra la: '+ money);
    }
    else{
        money = a*3000;
        alert('so tien phai tra la: '+ money);
    }
}