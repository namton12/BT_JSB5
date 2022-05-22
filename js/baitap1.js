
const khuVucA = 2;
const khuVucB = 1;
const khuVucC = 0.5;


const doiTuong1 = 2.5;
const doiTuong2 = 1.5;
const doiTuong3 = 1;


function tinhDiemChuan() {
    var diemuutienkhuvuc = document.getElementById('selectkhuVuc').value;
    var diemuutiendoituong = document.getElementById('selectdoiTuong').value;
   var diemchuan =Number(document.getElementById("diemChuan").value);
   var diemmon1 = Number(document.getElementById("diem1").value);
   var diemmon2 = Number(document.getElementById("diem2").value);
   var diemmon3 = Number(document.getElementById("diem3").value);
   
   
   var radiokvA = document.getElementById("khuvucA");
   var radiokvB = document.getElementById("khuvucB");
   var radiokvC = document.getElementById("khuvucC");

  var radiodT1 = document.getElementById("doituong1");
  var radiodT2 = document.getElementById("doituong2");
  var radiodT3 = document.getElementById("doituong3");
  

  var loaiKV ="";
  loaiKV = kiemTraKV(radiokvA,radiokvB,radiokvC);
   console.log(loaiKV);
   
  var loaiDT = "";
  loaiDT = kiemTraDT(radiodT1,radiodT2,radiodT3);
  console.log(loaiDT);

  switch (loaiKV) {
    case "kvA":
            diemuutienkhuvuc = 2;
        break;
    case "kvB":
            diemuutienkhuvuc = 1;
        break;
    case "kvC":
            diemuutienkhuvuc = 0.5;
       default:
        break;
}

switch (loaiDT) {
    case "DT1":
            diemuutiendoituong = 2.5;
        break;
    case "DT2":
            diemuutiendoituong = 1.5;
        break;
    case "DT3":
            diemuutiendoituong = 1;
        break;
    default:
        break;
}

ketQua =tongDiem(diemmon1,diemmon2,diemmon3,diemuutienkhuvuc,diemuutiendoituong);

var thongBao = "";
    if (diemchuan > ketQua) {
        thongBao = "thí sinh rớt";
    } else {
        thongBao = "thí sinh đậu";
    }

document.getElementById("output").innerHTML = "Kết quả: " + ketQua + "<br>thí sinh : " + thongBao;

}

function kiemTraKV(radioA,radioB,radioC) {
    if(radioA.checked){
       return "kvA";
    }else if(radioB.checked){
        return "kvB";
    }else if(radioC.checked){
        return "kvC";
    }else{
        alert("loại khu vực chưa được chọn");
        return "";
    }  
}

function kiemTraDT(radio1,radio2,radio3) {
    if(radio1.checked){
        return "DT1";
    }else if(radio2.checked){
        return "DT2";
    }else if(radio3.checked){
        return "DT3";
    }else{
        alert("Đối tượng ưu tiên chưa được chọn");
        return "";
    }
}

function tongDiem(diemmon1,diemmon2,diemmon3,loaiKV,loaiDT) {
    
   
    if (diemmon1 == 0 || diemmon2 == 0 || diemmon3 == 0) {
       
      alert("bạn đã thi rớt");
        
    } else {
      return diemmon1 + diemmon2 + diemmon3+loaiKV+loaiDT;
    }
   
    
}

