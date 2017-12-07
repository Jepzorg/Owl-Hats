
var panama = "Panama"; //The Panama hat
var warm = "Warm"; //The warm and tiny
var superwarm = "Superwarm"; //The superwarm and tiny
var discount = 50;
var price_panama = 1899;
var price_warm = 379;
var price_superwarm = 899;
var person = prompt("Please enter your name");
var quantity = prompt("How many of "+panama+" you want to buy?");
var totalCost = quantity*price_panama*discount/100; 
var inStock = 0>5;
var notInStock = 0<5;

$(function(){   //This is "Execute after page load". Making sure all the content is loaded before you run jQuery.

/*var websiteTitle = $("h1").text(prompt("What header do you want?"));
console.log(websiteTitle);*/

/*$("body").css("background-color", "red")*/
/*$("p").on("click", function(){
        $("body").css("background-color", "red");
    });*/
	$(".owl-pic.one").attr("src", "http://i.telegraph.co.uk/multimedia/archive/03597/POTD_chick_3597497k.jpg");

$(".owl-pic.one").attr("src", productArray[0].image);

});


var productPanama = {
	name: "Panama Hat",
	price: 1899, 
	currency: "SEK",
	image: "http://iruntheinternet.com/lulzdump/images/owl-wearing-fancy-hat-classy-1414446274d.jpg?id="
};

var productWarm = {
	name: "Warm",
	price: 389,
	currency: "SEK",
	image: "https://i.pinimg.com/originals/92/b8/05/92b805b79c4f34f34dd07d980622e20e.jpg"
}
var productSuperWarm = {
	name: "Superwarm",
	price: 899, 
	currency: "SEK",
	image: "http://www.cutestpaw.com/wp-content/uploads/2011/12/My-Precious.jpeg"
}
var productExtraSuperWarm = {
	name: "Extra Superwarm",
	price: 1299, 
	currency: "SEK",
	image: "http://www.patagonia.com/dis/dw/image/v2/ABBM_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw6469dd3d/images/hi-res/25542_BCW.jpg?sw=750&sh=750&sm=fit&sfrm=png"
}
var productArray = [productPanama, productWarm, productSuperWarm, productExtraSuperWarm]; 
var restaurant = {
	name: "Fantastic restaurant",
	seatingCapacity: 1000, 
	hasDineInSpecial: true, 
	entrees: ["Fish", "Beef", "Salad", "Chicken Skewers"],
	appetizers: ["Fried Calamari", "Bruschetta"],
}

console.log("Hey "+person+"! Today we have "+discount+"% discount on "+panama+", "+warm+", "+superwarm+".");
console.log("Have a look on our fantastic products:");
console.log(""+panama+":"+price_panama*discount/100+" SEK");
console.log(""+warm+":"+price_warm*discount/100+" SEK");
console.log(""+superwarm+":"+price_superwarm*discount/100+" SEK");
alert("Great, that will cost "+totalCost+" SEK.");
console.log(inStock);
console.log(notInStock);

/*
for (i = 0; i < productArray.length; i++) { //for loop. As long as "i" is smaller than the array length, we should keep running the code. Every time the loop runs, I want it to add 1. That's why we have ++
  console.log(productArray[i]) 
 }; */

function printProducts(productArray) {
for (i = 0; i < productArray.length; i++) { //for loop. As long as "i" is smaller than the array length, we should keep running the code. Every time the loop runs, I want it to add 1. That's why we have ++
  console.log(productArray[i].name,productArray[i].price, productArray[i].image)
}
}
printProducts(productArray)



