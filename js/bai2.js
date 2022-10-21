function tinhTiendien() {
    var hoTen= document.getElementById("num11").value
    var soKw= document.getElementById("num22").value
    var tongTien=tinhTien(soKw);
    document.getElementById("txtThongbao2").innerHTML = "Họ tên : " +hoTen +"; Tiền điện :" +tongTien.toLocaleString()
}
function tinhTien(soKw){
    tongtien=0;
    if (0<soKw && soKw<=50) {
        tongtien = soKw * 500
        
    } else  if(50<soKw && soKw <=100){
        tongtien = 500*50 + Number(soKw-50)*650
        
    }else if (100<soKw && soKw <=200){
        tongtien = 500*50 + Number(soKw-100)*850 + 50*650
    }else if(200<soKw && soKw <=350){
        tongtien = 500*50 + Number(soKw-200)*850 + 50*650+100*850

    }else if (soKw>350){
        tongtien = 500*50 + Number(soKw-350)*850 + 50*650+100*850+150*1100
    }
    else{
        alert("quen nhap so kw")
    }
    // console.log(tongtien);
   return tongtien;
}

document.getElementById("btn2").onclick = tinhTiendien
