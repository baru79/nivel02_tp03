
var parenthesis = [];

function recalcularResultado(expresion){
   expresion = expresion.toString().replace(/,/g, '.');
   expresion = expresion.toString().replace(/x/g, '*');
   try{
         expresion = eval(expresion);
         return expresion.toString().replace(".", ",");
   } catch (e){
         if (e instanceof SyntaxError){
            return document.getElementById("resultado").innerHTML;
         }
   }
}

function clearResult(){
   parenthesis = [];
   document.getElementById("resultado").innerHTML = 0;
   document.getElementById("expresion").innerHTML = 0;
}

function clearError(){
   if (document.getElementById("expresion").innerHTML.toString().length > 1){
      initParenthesisArray(document.getElementById("expresion").innerHTML);
      if (document.getElementById("expresion").innerHTML.toString().slice(-1) == "(" || document.getElementById("expresion").innerHTML.toString().slice(-1) == ")"){
         parenthesis.pop();
      }
      document.getElementById("expresion").innerHTML = document.getElementById("expresion").innerHTML.toString().substring(0,document.getElementById("expresion").innerHTML.toString().length-1);
      document.getElementById("resultado").innerHTML = recalcularResultado(document.getElementById("expresion").innerHTML);
   }
   else{
      clearResult();
   }
}

function showComa(){
   if (document.getElementById("expresion").innerHTML.toString().slice(-1) != ")"){
      if (!isNaN(document.getElementById("expresion").innerHTML.toString().slice(-1))){
         document.getElementById("expresion").innerHTML += ",";
      }
      else{
         document.getElementById("expresion").innerHTML += "0,";
      }
   }
}

function initParenthesisArray(expresion){
   for (var i = 0; i < expresion.length; i++) {
      if (expresion[i] == "(" || expresion[i] == ")"){
         parenthesis.push(expresion[i]);
      }
   }
}

function cantOpenParentheses(){
   var cant = 0;
   for (var i = 0; i < parenthesis.length; i++) {
      if (parenthesis[i] == "("){
         cant++;
      }
   }
   return cant;
}

function openParentheses(){
   if (document.getElementById("expresion").innerHTML.toString().slice(-1) != "," && document.getElementById("expresion").innerHTML.toString().slice(-1) != ")"){
      if (Number(document.getElementById("expresion").innerHTML) == 0 ){
         parenthesis.push("(");
         document.getElementById("expresion").innerHTML = "(";
      }
      else if (isNaN(document.getElementById("expresion").innerHTML.toString().slice(-1))){
         parenthesis.push("(");
         document.getElementById("expresion").innerHTML += "(";
      }
   }
}

function closeParentheses(){
   if (cantOpenParentheses() > 0){
      if (document.getElementById("expresion").innerHTML.toString().slice(-1) != "," && document.getElementById("expresion").innerHTML.toString().slice(-1) != "("){
         parenthesis.pop();
         document.getElementById("expresion").innerHTML += ")";
      }
   }
   document.getElementById("resultado").innerHTML = recalcularResultado(document.getElementById("expresion").innerHTML);
}

function showNumber(clicked_id){
   switch (clicked_id) {
      case "btn0":
         clicked_id = 0;
         break;
      case "btn1":
         clicked_id = 1;
         break;
      case "btn2":
         clicked_id = 2;
         break;
      case "btn3":
         clicked_id = 3;
         break;
      case "btn4":
         clicked_id = 4;
         break;
      case "btn5":
         clicked_id = 5;
         break;
      case "btn6":
         clicked_id = 6;
         break;
      case "btn7":
         clicked_id = 7;
         break;
      case "btn8":
         clicked_id = 8;
         break;
      case "btn9":
         clicked_id = 9;
         break;
   }
   if (document.getElementById("expresion").innerHTML == "0"){
      document.getElementById("expresion").innerHTML = clicked_id;
   }
   else{
      document.getElementById("expresion").innerHTML += clicked_id;
   }
   document.getElementById("resultado").innerHTML = recalcularResultado(document.getElementById("expresion").innerHTML);
}

function calcAdd(){
   if ((!isNaN(document.getElementById("expresion").innerHTML.toString().slice(-1)) && Number(document.getElementById("expresion").innerHTML) != 0) || (document.getElementById("expresion").innerHTML.toString().slice(-1) == ")")){
      document.getElementById("expresion").innerHTML += "+";
   }
   else if (isNaN(document.getElementById("expresion").innerHTML.toString().slice(-1)) && Number(document.getElementById("expresion").innerHTML) != 0){
      document.getElementById("expresion").innerHTML = document.getElementById("expresion").innerHTML.toString().substring(0,document.getElementById("expresion").innerHTML.toString().length-1) + "+";
   }
}

function calcSubs(){
   if (Number(document.getElementById("expresion").innerHTML) == 0){
      document.getElementById("expresion").innerHTML = "-";
   }
   else if (!isNaN(document.getElementById("expresion").innerHTML.toString().slice(-1)) || document.getElementById("expresion").innerHTML.toString().slice(-1) == "x" || document.getElementById("expresion").innerHTML.toString().slice(-1) == ")"){
      document.getElementById("expresion").innerHTML += "-";
   }
   else if (isNaN(document.getElementById("expresion").innerHTML.toString().slice(-1))){
      document.getElementById("expresion").innerHTML = document.getElementById("expresion").innerHTML.toString().substring(0,document.getElementById("expresion").innerHTML.toString().length-1) + "-";
   }
}

function calcMult(){
   if (Number(document.getElementById("expresion").innerHTML) != 0){
      if (!isNaN(document.getElementById("expresion").innerHTML.toString().slice(-1)) || document.getElementById("expresion").innerHTML.toString().slice(-1) == ")"){
         document.getElementById("expresion").innerHTML += "x";
      }
      else if (isNaN(document.getElementById("expresion").innerHTML.toString().slice(-1))){
         document.getElementById("expresion").innerHTML = document.getElementById("expresion").innerHTML.toString().substring(0,document.getElementById("expresion").innerHTML.toString().length-1) + "x";
      }
   }
}

function calcDiv(){
   if (Number(document.getElementById("expresion").innerHTML) != 0){
      if (!isNaN(document.getElementById("expresion").innerHTML.toString().slice(-1)) || document.getElementById("expresion").innerHTML.toString().slice(-1) == ")"){
         document.getElementById("expresion").innerHTML += "/";
      }
      else if (isNaN(document.getElementById("expresion").innerHTML.toString().slice(-1))){
         document.getElementById("expresion").innerHTML = document.getElementById("expresion").innerHTML.toString().substring(0,document.getElementById("expresion").innerHTML.toString().length-1) + "/";
      }
   }
}

function calcResult(){
   document.getElementById("expresion").innerHTML = document.getElementById("resultado").innerHTML;
}
