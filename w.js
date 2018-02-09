//Stock Question Choices Answers Solution
var q = new Array(10);
var c = new Array(10);
var s = new Array(10);
var a = new Array(10);
for(i=0;i<10;i++){
  c[i] = new Array(4);
  a[i] = 0;
}
var now=0;
var time;

q[0]	=	"1. การปฏิรูปการปกครองครั้งสำคัญที่สุดในสมัยอยุธยาเกิดขึ้นในสมัยพระมหากษัตริย์พระองค์ใด";
q[1]	=	"2. ข้อใดแสดงให้เห็นถึงจุดอ่อนของการปฏิรูปการปกครองในสมัยพระบรมไตรโลกนาถมากที่สุด";
q[2]	=	"3. การปกครองแบบเทวราชา เป็นการปกครองที่อยุธยารับมาจากเขมร เป็นอิทธิพลความเชื่อของศาสนาใด";
q[3]	=	"4. ใครคือปฐมกษัตริย์แห่งราชวงศ์พระร่วง อาณาจักรสุโขทัย";
q[4]	=	"5. ใครคือปฐมกษัตริย์แห่งอาณาจักรอยุธยา";
q[5]	=	"6. “เป็นเมืองที่มีความสำคัญ กษัตริย์ทรงแต่งตั้งพระราชโอรสหรือราชวงศ์ชั้นสูงไปปกครอง มีอำนาจค่อนข้างมาก รายล้อมราชธานี 4 ทิศ” เป็นคุณสมบัติของเมืองใด";
q[6]	=	"7. ลักษณะการปกครองแบบ “ปิตุลาธิปไตย” เกิดขึ้นในสมัยใด";
q[7]	=	"8 “สมุหพระกลาโหม ดูแลทหารและพลเรือนหัวเมืองฝ่ายใต้ สมุหนายก ดูแลทหารและพลเรือนหัวเมืองฝ่ายเหนือ” การปกครองดังกล่าวเริ่มมีในสมัยใด";
q[8]	=	"9. อาณาจักรสุโขทัยตั้งอยู่บริเวณลุ่มแม่น้ำใด";
q[9]	=	"10 “รักษาความสงบเรียบร้อย ตัดสินคดีที่เป็นมหันตโทษ” เป็นหน้าที่ของหน่วยงานใด";

c[0][0]=" ก.สมเด็จพระนารายณ์";
c[0][1]=" ข.สมเด็จพระเพทราชา";
c[0][2]=" ค.สมเด็จพระนเรศวรมหาราช";
c[0][3]=" ง.สมเด็จพระบรมไตรโลกนาถ";
c[1][0]=" ก.การขึ้นครองราชย์บัลลังก์ของสมเด็จพระมหาธรรมราชา";
c[1][1]=" ข.การขึ้นครองราชย์บัลลังก์ของสมเด็จพระเจ้าปราสาททอง";
c[1][2]=" ค.การเสียกรุงครั้งที่ 1";
c[1][3]=" ง.การสืบทอดราชบัลลังก์ของสมเด็จพระเอกาทศรถ";
c[2][0]=" ก.พุทธ";
c[2][1]=" ข.พราหมณ์";
c[2][2]=" ค.คริสต์";
c[2][3]=" ง.อิสลาม";
c[3][0]=" ก. พ่อขุนรามคำแหง";
c[3][1]=" ข. พ่อขุนศรีนาวนำถม";
c[3][2]=" ค. พ่อขุนศรีอินทราทิตย์";
c[3][3]=" ง. พ่อขุนบานเมือง";
c[4][0]=" ก. สมเด็จพระรามาธิบดีที่ 1";
c[4][1]=" ข. สมเด็จพระบรมราชาที่ 1";
c[4][2]=" ค. สมเด็จพระราเมศวร";
c[4][3]=" ง. สมเด็จพระมหาธรรมราชาที่ 1";
c[5][0]=" ก. หัวเมืองลูกหลวง";
c[5][1]=" ข. หัวเมืองพระยามหานคร";
c[5][2]=" ค. หัวเมืองประเทศราช";
c[5][3]=" ง. หัวเมืองชั้นนอก";
c[6][0]=" ก. อยุธยาตอนต้น";
c[6][1]=" ข.สุโขทัยตอนต้น";
c[6][2]=" ค. สุโขทัยตอนปลาย";
c[6][3]=" ง.อยุธยาตอนกลาง";
c[7][0]=" ก.สมเด็จพระเพทราชา";
c[7][1]=" ข. สมเด็จพระบรมไตรโลกนาถ";
c[7][2]=" ค.สมเด็จพระเจาอู่ทอง";
c[7][3]=" ง.สมเด็จพระนเรศวร";
c[8][0]=" ก.ปิง";
c[8][1]=" ข.วัง";
c[8][2]=" ค.ยม";
c[8][3]=" ง.น่าน";
c[9][0]=" ก.เวียง";
c[9][1]=" ข.วัง";
c[9][2]=" ค.คลัง";
c[9][3]=" ง.นา";

s[0]=4;
s[1]=2;
s[2]=2;
s[3]=3;
s[4]=1;
s[5]=1;
s[6]=2;
s[7]=1;
s[8]=3;
s[9]=1;

function di(){
  document.getElementById("optionsRadios1").hidden="hidden";
  document.getElementById("optionsRadios2").hidden="hidden";
  document.getElementById("optionsRadios3").hidden="hidden";
  document.getElementById("optionsRadios4").hidden="hidden";
  document.getElementById("prev").hidden="hidden";
  document.getElementById("next").hidden="hidden";
  document.getElementById("submit").hidden="hidden";
  document.getElementById("submit2").hidden="";
  document.getElementById("question").hidden="hidden";
  document.getElementById("c1").hidden="hidden";
  document.getElementById("c2").hidden="hidden";
  document.getElementById("c3").hidden="hidden";
  document.getElementById("c4").hidden="hidden";
}
function di2(){
  document.getElementById("optionsRadios1").hidden="hidden";
  document.getElementById("optionsRadios2").hidden="hidden";
  document.getElementById("optionsRadios3").hidden="hidden";
  document.getElementById("optionsRadios4").hidden="hidden";
  document.getElementById("prev").hidden="hidden";
  document.getElementById("next").hidden="hidden";
  document.getElementById("submit").hidden="hidden";
  document.getElementById("submit2").hidden="hidden";
  document.getElementById("question").hidden="hidden";
  document.getElementById("time").hidden="hidden";
  document.getElementById("c1").hidden="hidden";
  document.getElementById("c2").hidden="hidden";
  document.getElementById("c3").hidden="hidden";
  document.getElementById("c4").hidden="hidden";
}


//Countdown
function time(){
  // Set the date we're counting down to
var countDownDate = new Date().getTime();
  countDownDate+=(60*60*1000/3);
  countDownDate+=6;
// Update the count down every 1 second
var x = setInterval(function() {
  var now = new Date().getTime();
  // Get todays date and time
  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000); 
  // Display the result in the element with id="demo"
  document.getElementById("time").innerHTML = minutes + "m " + seconds + "s ";
  
  // If the count down is finished, write some text
  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "หมดเวลาทำแบบทดสอบ";
    di();
  }
}, 1000);
}

//Run Question

function runqc(i){
  document.getElementById("prev").disabled=false;
  document.getElementById("question").innerHTML = q[i];
  document.getElementById("c1").innerHTML=c[i][0];
  document.getElementById("c2").innerHTML=c[i][1];
  document.getElementById("c3").innerHTML=c[i][2];
  document.getElementById("c4").innerHTML=c[i][3];
  document.getElementById("prev").hidden="";
  document.getElementById("next").hidden="";
  document.getElementById("submit").hidden="hidden";
  if(now==0)document.getElementById("prev").disabled=true;
  else if(now==9){
    document.getElementById("next").hidden="hidden";
    document.getElementById("submit").hidden="";
  }
}

//Change Question

function st(x){
  a[now]=x;
}

function cq(x){
  now+=x;
  runqc(now);
    if(a[now]==0){
      document.getElementById("optionsRadios1").checked=false;
      document.getElementById("optionsRadios2").checked=false;
      document.getElementById("optionsRadios3").checked=false;
      document.getElementById("optionsRadios4").checked=false;
    }else if(a[now]==1){
      document.getElementById("optionsRadios1").checked=true;
      document.getElementById("optionsRadios2").checked=false;
      document.getElementById("optionsRadios3").checked=false;
      document.getElementById("optionsRadios4").checked=false;
    }else if(a[now]==2){
      document.getElementById("optionsRadios1").checked=false;
      document.getElementById("optionsRadios2").checked=true;
      document.getElementById("optionsRadios3").checked=false;
      document.getElementById("optionsRadios4").checked=false;
    }else if(a[now]==3){
      document.getElementById("optionsRadios1").checked=false;
      document.getElementById("optionsRadios2").checked=false;
      document.getElementById("optionsRadios3").checked=true;
      document.getElementById("optionsRadios4").checked=false;
    }else if(a[now]==4){
      document.getElementById("optionsRadios1").checked=false;
      document.getElementById("optionsRadios2").checked=false;
      document.getElementById("optionsRadios3").checked=false;
      document.getElementById("optionsRadios4").checked=true;
    }
  }



function check1(){
  di2();
  var score=0;
  for(i=0;i<10;i++){
    if(a[i]==s[i])score++;
  }
  document.getElementById("score").innerHTML=" คะแนนที่ได้ " + score + " / 10<br>ปิดหน้านี้เพื่อเข้าสู่บทเรียน";
   document.getElementById("close").hidden="";
}


function check2(){
  var score=0;
  for(i=0;i<10;i++){
    if(a[i]==s[i])score++;
  }
  document.getElementById("score").innerHTML=" คะแนนที่ได้ " + score + " / 10<br>ปิดหน้านี้เพื่อเข้าสู่บทเรียน";
  di2();
    document.getElementById("close").hidden="";

}
//Start Exam
function start(){
  time();
  document.getElementById("start").hidden="hidden";
  document.getElementById("optionsRadios1").hidden="";
  document.getElementById("optionsRadios2").hidden="";
  document.getElementById("optionsRadios3").hidden="";
  document.getElementById("optionsRadios4").hidden="";
  document.getElementById("prev").hidden="";
  document.getElementById("next").hidden="";
  runqc(now);
}

function settime(){
    setTimeout(check1, 5000);
  setTimeout(function(){document.getElementById("load").hidden="hidden"; } , 5000);
}
function settime2(){
    setTimeout(check2, 5000);
  setTimeout(function(){document.getElementById("load").hidden="hidden"; } , 5000);
}

function loading1(){
  document.getElementById("load").hidden="";
  settime();
  di2();
}

function loading2(){
  document.getElementById("load").hidden="";
  settime2();
  di2();
}

function closed(){
  close();
}

