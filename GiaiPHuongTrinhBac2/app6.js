function ketqua() {
    let a = parseInt(document.getElementById("number1").value);
    let b = parseInt(document.getElementById("number2").value);
    let c = parseInt(document.getElementById("number3").value);
    let delta = b*b - 4*a*c;
    if (a===0){
        x = -c/b;
        alert('ketqua x la: ' + x);
    }
    else if (delta < 0){
        alert('phuong tirnh vo nghiem ');
    }
    else if (delta === 0){
        x =-b/(2*a);
        alert('phuong trinh co nghiem kep ' +x);
    }
    else{
        x1=(-b+Math.sqrt(delta))/2*a;
        x2=(-b-Math.sqrt(delta))/2*a;
        alert('phuong trinh co 2 nghiem x1:' +  x1  +  'va x2: ' + x2);
    }
}