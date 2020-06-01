// var message = " in global";
//console.log(" global: message =" + message );

//var a = function () {
  //  var message = "inside a";
  //  console.log("a: message =" + message);
    
//function b(){
   // console.log("b: message=" + message);
//}

   // b();
//}
//a();
//var x;
//console.log(x);
//if (x == undefined) {
  //  console.log("x is undefined");
//}

//x = 5;
//if (x == undefined) {
//    console.log("x is undefined");
//}
//else {
//    console.log("x has been defined");
//}

//var string = "Hello";
//string += "world";
//console.log(string + "a");
//console.log((5 + 4) / 3);

//console.log(undefined / 5);
//function test1 (a){
//    console.log( a / 5);
//}
//test1();

//var x = 4;
//var x = 4 , y = '4';
//if (x === y){
//    console.log( " yes");
//}

// if statment
//if ( false || null || undefined || "" || 0 || NaN) {
  //  console.log(" This line won't ever execute");

//}
//else {
  //  console.log("All false");
//}

//if (true && "hello" && 1 && -1 && "false") {
  //  console.log("All true");

//}

//function a()
// {
//return
//{
//    name: "Carmen"
//};
//}

////function b() {
//    return {
//        name: "Carmen"
//
  //  };
//}
//console.log(a());
//console.log(b());



//var sum = 0;
//for (var i = 0; i < 10; i++) {
 //   console.log(i);
 //   sum = sum + i;
//}
//console.log(" sum of " + sum);


//function orderChickWith(sideDish) {
  //  if (sideDish === undefined)
  //  {
  //      sideDish = "whatever";
  //  }

  //or

  //sideDish = sideDish || "whatever"
  //  console.log(" Chicken with " + sideDish);
//}

//orderChickWith("noodles");
//orderChickWith();


//var company = new Object();
//company.name = "Facebooj";
//company.ceo = new Object();

//company.ceo.firstName = "Mark";
//company.ceo.favcolor = "black";
//console.log(company);
// console.log("Company Ceo name is: " + company.ceo.firstName);
// console.log(company["name"]);
// company.$stock = 110;
//or
//company["stock of compannl]fghlpgnlghm\upi=[l p=tityihyoy=ihotiyr-mf.u;y"] = 110;
// console.log(" Stock price is :" + company["stock of company"]);


//var Facebooj = {
  //name: "facebook",
  //ceo: {
    //firstName: "Mark",
    //favcolor: "black"
  //},
  //$stock: 110
//};

//console.log(Facebooj.ceo.firstName);

/*function multiply(x,y) {
  return x+y;
}
console.log(multiply(5,3));

multiply.version = "v.1.0.0";
console.log(multiply.version);

//function factory

function mark(multiplier) {
  var myfanc = function (x) {
    return multiplier * x;
  };
  return myfanc;
}


var multiblyby3 = mark(3);
console.log(multiblyby3(10));
var doubleall = mark(2);
console.log(doubleall(100));



//passin function as argument

function doperation(x, operation) {
  return opearation(x);
}

var result = doperation(5, multiblyby3);
console.log(result);
result = doperation(100, doubleall);
console.log(result); */


/*var a = 7;
var b = a;
console.log("a: " + a);
console.log("b: " +b);

b = 5;
console.log("after  b update:");
console.log("a: " +a);
console.log("b: " +b);*/

/*var a = [["icaro","caro", 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
 
for (var i in a) 
{
  
   console.log("row " + i);
   for (var j in a[i]) 
     {
      console.log(" " + a[i][j]);
     }
}*/

const countries = ['ilan', 'deenen',  'Ienmark', 'nelly'];


  for (let i=0; i<countries.length; i++) {
    if ( countries[i].startsWith("i") ||countries[i].startsWith("I")) {
    
    console.log("hello");
    }
    else
    {
      console.log("Goodbye");
    }
  }
  
  









