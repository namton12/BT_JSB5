const dau_50kw=500;
const sau_50kw=650;
const sau_100kw=850;
const sau_150kw=1100;
const conlai=1300;

function tinhhTienDien() {
    var ten = document.getElementById("name").value;
    var sokW = document.getElementById("num").value;
 if(0<sokW && sokW<=50){
     tong=sokW*dau_50kw;
 }else if(50<sokW && sokW<=100){
   tong=50*dau_50kw+(sokW-50)*sau_50kw;
 }else if(100<sokW && sokW<=200){
     tong = 50*dau_50kw + 50*sau_50kw + (sokW-100)*sau_100kw;
 }else if(200<sokW && sokW<=350){
     tong = 50*dau_50kw + 50*sau_50kw +100*sau_100kw+(sokW-200)*sau_150kw;
 }else if(sokW>350){

     tong =50*dau_50kw + 50*sau_50kw +100*sau_100kw+150*sau_150kw +(sokW-350)*conlai;
 }
 document.getElementById('out').innerHTML = "Tên:" + ten + "<br>Số tiền: "+tong + "vnd/kw";
}