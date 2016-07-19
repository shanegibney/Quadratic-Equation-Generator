//generating quadratic equations
//console.log("quadratic");
arr = [];
var range;
var fact = function(range){
  var arr = [];
  //generates a random integer in the range 1 to 'range'
  var a = Math.floor(Math.random()*(range)+1);
  //console.log("a = " + a);
  var j = 1;
  //generates a rand number in the range 1 to a
  // var num = Math.floor(Math.random()*(a)+1);
  for(var i=1; i<=a; i++){
    if(a%i===0){
      arr[j] = i;
      // console.log("arr[" + j + "]=" + arr[j]);
      j++;
    }
  }
  //console.log("arr.length=" + arr.length);
  for(var i=1; i<arr.length; i++){
    //console.log(arr[i]);
  }
  pair = [];
  var index = Math.floor(Math.random()*(arr.length-1)+1);
  //console.log("arr.length = " + arr.length);
  pair[0] = arr[index];
  //console.log("pair[" + 0 + "] = " + pair[0]);
  pair[1] = a/arr[index];
  //console.log("pair[" + 1 + "] = " + pair[1]);
  return pair;
}//end of fact() function

var quads = function(aRange,bRange){

var bool = function(){
  plusminus = Math.floor(Math.random()*2);
  if(plusminus == 0){
    plusminus = -1;
  }
  // console.log("plusminus=" + plusminus);
  return plusminus;
}//end of bool function
//quadratic is formed using (a1*a2)x^2+(a1*c2+a2*c1)x+(c1*c2)
aFactor = fact(aRange);
a1 = bool()*aFactor[0];
a2 = bool()*aFactor[1];
cFactor = fact(bRange);
c1 = bool()*cFactor[0];
c2 = bool()*cFactor[1];
  //console.log("a1=" + a1 + ", a2=" + a2 + ", c1=" + c1 + ", c2=" + c2);
num1 = a1*a2;
if(num1 == 1){ num1 = ""; }else if(num1 == -1){ num1 = "-"; }
num3 = c1*c2;
if(num3 > 0){ num3 = "+" + num3; }else if(num3 < 0){ num3 = "" + num3; }
num2 = a1*c2 + a2*c1;
if(num2 > 0 || num2 ==0){ num2 = "+" + num2; }else if(num2 < 0){ num2 = "" + num2; }
if(a1 == 1){ a1 = ""; }
if(a1 == -1){ a1 = "-"; }
if(c1 > 0){ c1 = "+" + c1; }
if(a2 == 1){ a2 = ""; }
if(a2 == -1){ a2 = "-"; }
if(c2 > 0){ c2   = "+" + c2; }

//console.log("a1=" + a1);
problem = num1 + "x^2" + num2  + "x" + num3;
solution = "(" + a1 + "x" + c1 + ")(" + a2 + "x" + c2 + ")";
//console.log("problem: " + problem + ", solution: " + solution);
return [problem, solution];
}//end of quads function
headerDone = true;
var easyInput = true;
var moderateInput = true;
var hardInput = true;
function header(){
  if(headerDone){
    var header = document.getElementById("header");
    var head = document.createElement("th");
    var text = document.createTextNode("");
    head.appendChild(text);
    header.appendChild(head);
    var header = document.getElementById("header");
    var head = document.createElement("th");
    var text = document.createTextNode("Number of questions");
    head.appendChild(text);
    header.appendChild(head);
    headerDone = false;
  }
}

function addEz(){
  if(headerDone){
    header();
  }
    function createInput(inputType,rowType){
    //   if(easyInput==true){
    // var row = document.getElementById("easyRow");
    // var cell = document.createElement("td");
    // var detail = document.createElement("input");
    // detail.setAttribute("id", "numEasy");
    // detail.value = "10";
    // detail.type = "number";
    // cell.appendChild(detail);
    // row.appendChild(cell);
    // easyInput = false;
    //   }
        if(inputType==true){
          var test = "easyRow";
          console.log("test is " + test);
          var row = document.getElementById(test);
          //alert(document.getElementById("'" + ben_name.toString() + "'").value);
          console.log("row is " + row);
          var cell = document.createElement("td");
          var detail = document.createElement("input");
          detail.setAttribute("id", "numEasy");
          detail.value = "10";
          detail.type = "number";
          cell.appendChild(detail);
          row.appendChild(cell);
          easyInput = false;
        }
      }
    createInput(easyInput,easyRow);
}

function addMod(){
  if(headerDone){
    header();
  }
  if(moderateInput==true){
var row = document.getElementById("modRow");
var cell = document.createElement("td");
var cell = document.createElement("td");
var detail = document.createElement("input");
detail.setAttribute("id", "numModerate");
detail.value = "10";
detail.type = "number";
cell.appendChild(detail);
row.appendChild(cell);
moderateInput = false;
  }
}

function addHard(){
  if(headerDone){
    header();
  }
  if(hardInput==true){
var row = document.getElementById("hardRow");
var cell = document.createElement("td");
var detail = document.createElement("input");
detail.setAttribute("id", "numHard");
detail.value = "10";
detail.type = "number";
cell.appendChild(detail);
row.appendChild(cell);
hardInput = false;
  }
}

function simplepdf(){//////////////////////////////////................
// console.log("beginning of simplepdf function");
  function getStudents(){ // get the student string from the text input and changes it to an array students[]
    var val = document.getElementById("students").value;
    //issue still exists if more than one consecutive space is used
    var index = val.indexOf(",");//check if there is a comma in string
      //console.log("index " + index);
    if(index == -1){//no comma in string so split on a space
        students = val.split(" "); // splits the string into elements in an array
    }else{
        students = val.split(","); // splits the string into elements in an array
      }
  }
  function getSettings(){
    easyCheck = document.getElementById("easy").checked;
      // console.log("Easy checkbox value: " + easyCheck);
      if(easyCheck){
        easyNum = document.getElementById("numEasy").value;
      // console.log("Number of easy: " + easyNum);
    }else{ easyNum=0;}
    moderateCheck = document.getElementById("moderate").checked;
      // console.log("Moderate checkbox value: " + moderateCheck);
      if(moderateCheck){
        moderateNum = document.getElementById("numModerate").value;
      // console.log("Number of moderate: " + moderateNum);
    }else{ moderateNum=0;}
    hardCheck = document.getElementById("hard").checked;
      // console.log("Hard checkbox value: " + hardCheck);
      if(hardCheck){
      hardNum = document.getElementById("numHard").value;
        // console.log("Number of hard: " + hardNum);
      }else{ hardNum=0;}
      if(!easyCheck && !moderateCheck && !hardCheck){
        alert("Please choose a level of difficulty");
        exit();
      }
  }
  getStudents();
  getSettings();

  for(var k=0; k < students.length; k++){
    if(students[k] || k==0){//deals with extra spaces in the name students[k] array
    probs = [];
    sols = [];

    easyNum = parseInt(easyNum);
    moderateNum = parseInt(moderateNum);
    hardNum = parseInt(hardNum);
    total = easyNum + moderateNum + hardNum;
      for(var i=0; i < total; i++){
        if(i < easyNum){//number of easy questions easyNum
          aRange = 5;
          bRange = 5;
        }else if((i > (easyNum - 1)) && (i < (easyNum + moderateNum))){//number of moderate questions moderateNum
          aRange = 12;
          bRange = 12;
        }else{//number of difficult questions hardNum
          aRange = 24;
          bRange = 24;
        }

      //call quads() which returns an array with two elements one for prob and one for solution
      retArray = quads(aRange,bRange);
      var probLength = probs.push(retArray[0]);
      var solLength = sols.push(retArray[1]);
      function beginPage(){
        if(students[k]){
        doc.text(20,line,students[k].toUpperCase() + ',  Task: factorise the following expressions');
        line+=10;
        }else{
          doc.text(20,line,'Task: factorise the following expressions');
          line+=10;
        }
      }
    }//end of for loop

          var line = 10;
          page = 0;
          var doc = new jsPDF();
          if(line==10){
            if(students[k]){
            beginPage();
            }
        }
          if(easyCheck){
            doc.text(20,line,'Easy');
            line+=10;
            for(var i = 0; i < easyNum; i++){
                // doc.text(20,line,'line: ' + line + ', i: ' + i);
                doc.text(30,line, (i+1) + ". " + probs[i]);
                line+=10;
                if(line==270){
                  doc.text(20,line,'page ' + (page+1));
                  page++;
                  doc.addPage();
                  line=10;
                  if(students[k]){
                  beginPage();
                  }
                }
            }
          }
          if(moderateCheck){
            doc.text(20,line,'Moderate');
            line+=10;
            if(!easyCheck){
              easyNum = 0;
            }
            for(var i = easyNum; i < moderateNum + easyNum; i++){
                // doc.text(20,line,'line: ' + line + ', i: ' + i);
                doc.text(30,line, (i+1) + ". " + probs[i]);
                line+=10;
                if(line==270){
                  doc.text(20,line,'page ' + (page+1));
                  page++;
                  doc.addPage();
                  line=10;
                  if(students[k]){
                  beginPage();
                  }
                }
            }
          }
          if(hardCheck){
            doc.text(20,line,'Hard');
            line+=10;
            if(!moderateCheck){
              moderateNum = 0;
            }
            for(var i = easyNum + moderateNum; i < total; i++){
                // doc.text(20,line,'line: ' + line + ', i: ' + i);
                doc.text(30,line, (i+1) + ". " + probs[i]);
                line+=10;
                if(line==270){
                  // var pageWidth = this.internal.pageSize.width;
                  // doc.text(20,line,'page ' + (page+1) + ', pageWidth ' + pageWidth);
                  doc.text(20,line,'page ' + (page+1));
                  page++;
                  doc.addPage();
                  line=10;
                  if(students[k]){
                  beginPage();
                  }
                }
            }
          }
          doc.save(students[k] + ' ProblemSheet.pdf');

          var doc = new jsPDF();
          line = 10;
          if(students[k]){
          doc.text(20,line,students[k].toUpperCase() + ',  solution sheet');
          line+=10;
          }else{
            doc.text(20,line,'Solution sheet');
            line+=10;
          }
          for(var i=0; i < total; i++){
          doc.text(20,line,(i+1) + ". " + probs[i] + " = " + sols[i]);
          line += 10;;

          if(line==270){
            // doc.text(20,line,'page ' + (page+1) + ', pageWidth ' + pageWidth);
            doc.text(20,line,'page ' + (page+1));
            page++;
            doc.addPage();
            line=10;
            if(students[k]){
            beginPage();
            }
            }
          }
          doc.save(students[k] + ' SolutionSheet.pdf');
       }//end of the students[] for loop
     }
  }
