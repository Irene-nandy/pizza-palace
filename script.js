var del = 150;
var PizzatotalPrice = [];
function Order (pizzaSize, crust) {
 this.pizzaSize = pizzaSize;
 this.crust = crust;
 this.Topping1 = 400;
 this.Topping2 = 1000;
 this.pizzaPrice = 0;
 this.pizzaNumber  = 1;
 this.pizzaNumbers = [];
}
Order.prototype.pizzaCost = function () {
if (this.pizzaSize === "Small") {
this.pizzaPrice += 1000;
} else if (this.pizzaSize === "Medium") {
      this.pizzaPrice += 2000;
} else if (this.pizzaSize === "Large") {
this.pizzaPrice += 3000;
}
if (this.crust === "crispy") {
this.pizzaPrice += 1500;
 } else if (this.crust === "stuffed") {
this.pizzaPrice += 1200;
} else if (this.crust === "glutenFree") {
this.pizzaPrice += 1390;
}
for(var j = 1; j < this.pizzaNumbers.length; j++){
pizzaNumber += pizzaNumbers[j];
}
this.pizzaPrice += this.Topping1;
this.pizzaPrice += this.Topping2;
this.pizzaPrice *= this.pizzaNumber;
return this.pizzaPrice;
 }
Order.prototype.finalCost = function () {
var TotalPrice = 0;
for (var i = 0; i < PizzatotalPrice.length; i ++) {
TotalPrice += PizzatotalPrice[i];
}
return TotalPrice;
}
$(document).ready(function() { 
$(".header").height($(window).height());
$("#orders").click(function(){
$("#order").show(1000)
});