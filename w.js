var ans = new Array(3);
ans[0] =new Array(50);
ans[1] =new Array(25);
ans[2] =new Array(25);
for(i=0;i<50;i++){ans[0][i]=0;}
for(i=0;i<25;i++){ans[1][i]=0;ans[2][i]=0;}
var cans = new Array(3);
cans[0] =new Array(50);
cans[1] =new Array(25);
cans[2] =new Array(25);
var q =new Array(3);
q[0]=new Array(50);
q[1]=new Array(25);
q[2]=new Array(25);

var dreason= Array(3);
dreason[0]=new Array(50);
dreason[1]=new Array(25);
dreason[2]=new Array(25);
var choi=new Array(3);
choi[0]=new Array(50);
choi[1]=new Array(25);
choi[2]=new Array(25);
for(i=1;i<=50;i++){
choi[0][i-1]=new Array(4);
  if(i<=25){choi[1][i-1]=new Array(4); 
            choi[2][i-1]=new Array(4); 
           }
}
var qpic =new Array(3);
for(i=0;i<3;i++)qpic[i]=new Array(50);
for(i=0;i<3;i++){
  for(j=0;j<50;j++){qpic[i][j]="NULL";}
}
var apic =new Array(3);
for(i=0;i<3;i++)apic[i]=new Array(50);
for(i=0;i<3;i++){
  for(j=0;j<50;j++){apic[i][j]="NULL";}
}
qpic[0][0]="image/M1.png";


var checked =0;
var currentno=1;
var currentsubj=0;


loadd();
function Close(){
document.getElementById("scorepanel").style.display = "none";
}


function check(x){
  
  var ch=0;
  for(i=0;i<50;i++){if(ans[0][i]==0||ans[1][i]==0)ch=1;}
//if(ch==1&&x==0)alert("ยังตอบคำถามไม่ครบ");
  //else{
    var score1=0,score2=0,score3=0;
    for(i=0;i<50;i++){if(ans[0][i]==cans[0][i])score1++;
                      if(i<25){if(ans[1][i]==cans[1][i])score2++;
                              if(ans[2][i]==cans[2][i])score3++;
                              }}
    document.getElementById("scoredisp").innerHTML="คณิตศาสตร์ "+score1+"/50<br>สังคมศึกษา "+score2+"/25<br> ภาษาไทย "+score3+"/25";
  
  document.getElementById("scorepanel").style.display = "block";
  document.getElementById("time").style.display = "none";
  document.getElementById("sent").style.display = "none";
    document.getElementById("choice").style.display = "none";
   document.getElementById("reason").style.display = "block";
  checked=1;
  cno(1);
  //}
  
}
function choose(x){
ans[currentsubj][currentno-1]=x;
}
function next(){
cno(currentno+1);
}
function prev(){
  cno(currentno-1);
}
function cno(x){
  if(x==1)document.getElementById("prevbtn").style.visibility="hidden";
 else document.getElementById("prevbtn").style.visibility="visible";  
  if(x==50)document.getElementById("nextbtn").style.visibility="hidden";
 else document.getElementById("nextbtn").style.visibility="visible";
  currentno=x;
  if(x==25&&currentsubj!=0)document.getElementById("nextbtn").style.visibility="hidden";
  for(j=1;j<=4;j++)document.getElementById("cbt"+j).checked=false;
  if(ans[currentsubj][x-1]>0){document.getElementById("cbt"+ans[currentsubj][x-1]).checked=true;}
  csubj(currentsubj,0); document.getElementById("no"+x).style.backgroundColor = "#ffaac2";
  if(ans[currentsubj][currentno-1]!=cans[currentsubj][currentno-1]&&checked==1){
    document.getElementById("no"+x).style.backgroundColor = "#ff72aa";
    document.getElementById("yourans").style.display="block";
    if(ans[currentsubj][currentno-1]==0)document.getElementById("yourans").innerHTML="<คุณไม่ได้ตอบคำถามนี้>";
    else document.getElementById("yourans").innerHTML="<คำตอบของคุณคือ "+choi[currentsubj][x-1][ans[currentsubj][x-1]-1]+">";

  }
  else if(checked==1){document.getElementById("yourans").style.display="none";
       document.getElementById("no"+x).style.backgroundColor = "#82ff8c";
       }
    document.getElementById("reason").innerHTML="คำตอบที่ถูกคือ "+choi[currentsubj][x-1][cans[currentsubj][x-1]-1]+"<br>"+dreason[currentsubj][x-1];
    document.getElementById("question").innerHTML=q[currentsubj][x-1];
  //
  //
  if(qpic[currentsubj][x-1]!="NULL")
  { document.getElementById("questionpic").src=qpic[currentsubj][x-1]; 
   document.getElementById("questionpic").style.display="block"; 
  }
  else document.getElementById("questionpic").style.display="none";
  
    if(apic[currentsubj][x-1]!="NULL"&&checked==1)
  { document.getElementById("anspic").style.display="block"; 
   document.getElementById("anspic").src=apic[currentsubj][x-1]; 
  }
  else document.getElementById("anspic").style.display="none";
  //
  //
  document.getElementById("c1").innerHTML=choi[currentsubj][x-1][0];
   document.getElementById("c2").innerHTML=choi[currentsubj][x-1][1];
  document.getElementById("c3").innerHTML=choi[currentsubj][x-1][2];
  document.getElementById("c4").innerHTML=choi[currentsubj][x-1][3];
  
}


function csubj(x,y){
  currentsubj =x;
    var div = document.getElementById("no");
    while(div.firstChild)
    div.removeChild(div.firstChild);
  document.getElementById("sbtn0").style.fontWeight="normal";
 document.getElementById("sbtn1").style.fontWeight="normal";
   document.getElementById("sbtn2").style.fontWeight="normal";
  document.getElementById("sbtn0").style.textDecoration= "none";
  document.getElementById("sbtn1").style.textDecoration="none";
     document.getElementById("sbtn2").style.textDecoration="none";
  
  document.getElementById("sbtn"+currentsubj).style.fontWeight="bold";
document.getElementById("sbtn"+currentsubj).style.textDecoration= "underline"; 
  var a;  
  if(x==0)a=50;
  else a=25;
  for(i=1;i<=a;i++){    
      var btn = document.createElement("BUTTON");
    var t = document.createTextNode(String(i));      
    btn.appendChild(t);
    btn.style.width="4%";
    btn.style.backgroundColor="rgba(255, 255, 255, 0.8)";
      if(ans[currentsubj][i-1]!=0&&checked==0) btn.style.backgroundColor="#00d839";
      if(checked==1){
        if(ans[currentsubj][i-1]==cans[currentsubj][i-1]){btn.style.backgroundColor="#00d839";}
        else{btn.style.backgroundColor="#f44289";}
      }
    btn.style.borderColor="Transparent";
    btn.id="no"+i;
   btn.onclick =
    (function() {
      var currentI = i;
      return function() { 
          cno(currentI);
      }
   })();
    document.getElementById("no").appendChild(btn);
  }
 if(y==1)cno(1);
}

function loadd(){
  
  csubj(0,1);
var countDownDate = new Date().getTime();
countDownDate+=(2.5*60*60*1000);
// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds

  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("time").innerHTML =  hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    alert("หมดเวลาทำข้อสอบแล้ว");
    check(1);
    //document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
/**
    * Disable right-click of mouse, F12 key, and save key combinations on page
    * By Arthur Gareginyan (arthurgareginyan@gmail.com)
    * For full source code, visit http://www.mycyberuniverse.com
    */
  
}


//โจทย์วิทย์ q[0][i] : 0<=i<=49



//ช้อยส์วิทย์ choi[0][i][j] : 0<=i<=49 , 0<=j<=3


//คำตอบวิทย์ cans[0][i] : 0<=i<=49



window.onbeforeunload = function() {
  return "ระบบอาจไม่ได้บันทึกการเปลี่ยนแปลงของคุณ";
};
