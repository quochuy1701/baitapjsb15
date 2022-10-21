function tinhDiemtongket(){
    var diemChuan =document.getElementById("num1").value
    var mon1=document.getElementById("num2").value
    var mon2=document.getElementById("num3").value
    var mon3=document.getElementById("num4").value
    var khuVuc=document.getElementById("selectPercent").value
    var doiTuong=document.getElementById("selectPercent1").value
    var diemTong=tinhTongdiem3mon(mon1,mon2,mon3)
    var diemUutien= Number(khuVuc) + Number(doiTuong);
    var diemTongket = diemTong + diemUutien;
    if (diemTongket>diemChuan || diemTongket == diemChuan) {
        document.getElementById("txtThongbao1").innerHTML="Bạn đã đậu.Tổng điểm:" + diemTongket
        
    } else {
        document.getElementById("txtThongbao1").innerHTML="Bạn đã rớt.Tổng điểm:" + diemTongket
        
    }
}

function tinhTongdiem3mon(mon1,mon2,mon3){
    var diemTong=0;
    diemTong= Number(mon1)+Number(mon2)+Number(mon3)
    return diemTong
}
document.getElementById("btn").onclick=tinhDiemtongket