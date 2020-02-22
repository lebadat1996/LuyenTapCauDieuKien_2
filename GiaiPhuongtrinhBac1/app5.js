function result() {
    let a = parseInt(document.getElementById("number1").value);
    let b = parseInt(document.getElementById("number2").value);
    if(a === 0){
        alert('phuong trinh khong co nghiem x ');
    }else{
        x = -b/a;
        alert('phuong trinh co nghiem la: ' + x);
    }
}