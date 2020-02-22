function check() {
    let a = parseInt(document.getElementById("number1").value);
    let b = parseInt(document.getElementById("number2").value);
    let c = parseInt(document.getElementById("number3").value);
        if (a>0 && b>>0 && c>0 && (a+b)>c && (b+c)>a && (c+a)>b){
            alert('day la mot tam giac');
        }else{
            alert('day khong phai la mot tam giac');
        }
}