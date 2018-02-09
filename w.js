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

q[0]="1. ข้อใดต่อไปนี้แสดงให้เห็นถึงจุดอ่อนของการปฏิรูปการปกครองในสมัยสมเด็จพระบรมไตรโลกนาถได้เด่นชัดที่สุด  ";
q[1]="2. ข้อใดต่อไปนี้แสดงให้เห็นถึงสาเหตุหนึ่งของการปฏิรูปการปกครองในสมัยสมเด็จพระบรมไตรโลกนาถได้เด่นชัดที่สุด  ";
q[2]="3. “ไพร่ฟ้าหน้าปก กลางบ้านกลางเมือง มีถ้อยมีความ เจ็บท้องข้องใจ มักจักกล่างเถิงเจ้าเถิงขุนบ่ไว้ ไปลั่นกะดิ่งอันท่านแขวนไว้ พ่อขุนรามคำแหงเจ้าเมืองได้ยินเรียกเมือถาม สวนความแก่มันด้วยซื่อ” <br>ข้อความดังกล่าวแสดงให้เห็นถึงลักษณะการปกครองแบบใด";
q[3]="4. “อ้าองค์สุริย์ศรี มีธรรมส่อง ปกครองอย่างทรงพระเมตตา ดุจบิดรเหล่าประชา ทุกข์ร้อนใดใดกรายมา โอ้ฟ้าเป็นดั่งฝนดับไฟ” เพลงดังกล่าวแสดงถึงลักษณะการปกครองใดชัดเจนที่สุด";
q[4]="5. การที่หัวเมืองต่างๆไม่ส่งทหารมาช่วยกรุงศรีอยุธยาในคราวเสียกรุงครั้งที่สอง มีความเกี่ยวข้องกับข้อใดมากที่สุด";
q[5]="6. “พ่อกูชื่อศรีอินทราทิตย์ แม่กูชื่อนางเสือง” อยากทราบว่า “ศรีอินทราทิตย์” ที่หมายถึงในข้อความดังกล่าวเป็นบุคคลเดียวกับพระนามในตัวเลือกใด";
q[6]="7. “ผู้รั้ง” เป็นผู้ปกครองหัวเมืองชั้นใด";
q[7]="8. การปกครองแบบเทวราชา เป็นการปกครองที่อยุธยารับมาจากเขมร เป็นอิทธิพลความเชื่อของศาสนาใด";
q[8]="9. การแต่งตั้งยกบัตร เป็นหน้าที่ของหน่วยงานใด";
q[9]="10. “เป็นลูกหลวงทางด้านเหนือของกรุงศรีอยุธยา สมเด็จพระเจ้าอู่ทองทรงส่งสมเด็จพระราเมศวรพระราชโอรสไปปกครอง” เมืองดังกล่าวคือเมืองใด";


c[0][0]=" ก. “ครั้งนั้นเจ้าอ้ายพญา เจ้าญึพญา พระราชกุมารท่านชนช้างด้วยกัน ณ สะพานป่าถ่าน ถึงพิราลัยทั้ง ๒ พระองค์ที่นั้น”";
c[0][1]=" ข. “สมเด็จพระเจ้าอยู่หัวเสร็จเสด็จขึ้นถวัลราชพิภพ ทรงพระนามพระเจ้าปราสาททอง พระองค์ทรงทศพิธราชธรรมอันประเสริฐ”";
c[0][2]=" ค. “พระราชกุมารท่านนั้นเป็นเหตุ (พระรัษฎาธิราช) จึงได้ราชสมบัติแก่พระไชยราชาธิราชเจ้า”";
c[0][3]=" ง. “ทำการปราบดาภิเษกสมเด็จพระมหาธรรมราชาธิราชเจ้า เสวยราชสมบัติกรุงพระนครศรีอยุธยา”";
c[1][0]=" ก. “ครั้งนั้นเจ้าอ้ายพญา เจ้าญึพญา พระราชกุมารท่านชนช้างด้วยกัน ณ สะพานป่าถ่าน ถึงพิราลัยทั้ง ๒ พระองค์ที่นั้น”";
c[1][1]=" ข. “สมเด็จพระเจ้าอยู่หัวเสร็จเสด็จขึ้นถวัลราชพิภพ ทรงพระนามพระเจ้าปราสาททอง พระองค์ทรงทศพิธราชธรรมอันประเสริฐ”";
c[1][2]=" ค. “พระราชกุมารท่านนั้นเป็นเหตุ (พระรัษฎาธิราช) จึงได้ราชสมบัติแก่พระไชยราชาธิราชเจ้า”";
c[1][3]=" ง. “ทำการปราบดาภิเษกสมเด็จพระมหาธรรมราชาธิราชเจ้า เสวยราชสมบัติกรุงพระนครศรีอยุธยา”";
c[2][0]=" ก. ธรรมราชา";
c[2][1]=" ข. ปิตุลาธิปไตย";
c[2][2]=" ค. สมบูรณาญาสิทธิราชย์";
c[2][3]=" ง. เทวราชา";
c[3][0]=" ก. ธรรมราชา";
c[3][1]=" ข. ปิตุลาธิปไตย";
c[3][2]=" ค. สมบูรณาญาสิทธิราชย์";
c[3][3]=" ง. เทวราชา";
c[4][0]=" ก. การที่ระบบการปกครองให้อิสระต่อขุนนางผู้ปกครองเมืองพระยามหานครมากเกินไป";
c[4][1]=" ข. การที่ระบบการปกครองให้อิสระต่อเจ้านายที่ปกครองเมืองลูกหลวงมากเกินไป";
c[4][2]=" ค. ความแข็งแกร่งของกองทัพพม่า";
c[4][3]=" ง. ความอ่อนแอของสมเด็จพระเจ้าเอกทัศน์";
c[5][0]=" ก. พ่อขุนบานเมือง";
c[5][1]=" ข. พ่อขุนบางกลางหาว";
c[5][2]=" ค. พ่อขุนรามคำแหง";
c[5][3]=" ง. พ่อขุนผาเมือง";
c[6][0]=" ก. หัวเมืองชั้นเอก";
c[6][1]=" ข. หัวเมืองชั้นโท";
c[6][2]=" ค. หัวเมืองชั้นตรี";
c[6][3]=" ง. หัวเมืองชั้นจัตวา";
c[7][0]=" ก. พุทธ";
c[7][1]=" ข. พราหมณ์";
c[7][2]=" ค. คริสต์";
c[7][3]=" ง. อิสลาม";
c[8][0]=" ก. นครบาล";
c[8][1]=" ข. ธรรมาธิกรณ์";
c[8][2]=" ค. โกษาธิบดี";
c[8][3]=" ง. เกษตราธิการ";
c[9][0]=" ก. ลพบุรี";
c[9][1]=" ข. ศรีสัชนาลัย";
c[9][2]=" ค. สุพรรณบุรี";
c[9][3]=" ง. สองแคว";


s[0]=2;
s[1]=1;
s[2]=2;
s[3]=1;
s[4]=1;
s[5]=2;
s[6]=4;
s[7]=2;
s[8]=2;
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
  countDownDate+=(60*60*1000/6);
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
  document.getElementById("close2").hidden="";
}


function check2(){
  var score=0;
  for(i=0;i<10;i++){
    if(a[i]==s[i])score++;
  }
  document.getElementById("score").innerHTML=" คะแนนที่ได้ " + score + " / 10<br>ปิดหน้านี้เพื่อเข้าสู่บทเรียน";
  di2();
    document.getElementById("close").hidden="";
  document.getElementById("close2").hidden="";

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
}

function closed(){
  close();
}

