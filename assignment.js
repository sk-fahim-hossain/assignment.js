//kilometerToMeter

function kilometerToMeter(number){
    //error checking
    if(number < 0){
        console.log("Negative number not allowed");
    }else{
        var meter = number * 1000; 
    }
    return meter;
}
var resultMeters = kilometerToMeter();
console.log(resultMeters);

//budgetCalculator
function budgetCalculator(watch,phone,laptop){
    //error checking
    if(watch,phone,laptop < 0){
        console.log("Negative number is not allowed");
    }
    else{
        var watchCost = watch * 50;
        var phoneCost = phone * 100;
        var laptopCost = laptop * 500;
        var totalCost = watchCost + phoneCost + laptopCost;
    }
    
    return totalCost;
}
var result = budgetCalculator();
console.log(result);

//hotelCost
function hotelCost(number){
    var totalCost = 0;
    if(number < 0){
        console.log("negative number is not allowed");
    }
    else{
        if (number <= 10){
            var totalCost = number * 100;
        }
        else if (number <= 20){
            var cost = 10 * 100;
            var remaining = number - 10;
            var secondCost = remaining * 80;
            var totalCost = cost + secondCost;
        }
        else{
            var cost = 10 * 100;
            var secondCost = 20 * 80;
            var remaining = number - 20;
            var thirdCost = remaining * 50;
            var totalCost = cost + secondCost + thirdCost;
        }
    }
    return totalCost;
}

var result = hotelCost();
console.log(result);

//megaFriend
function megaFriend(arry){
    var mega = [];
    for(var i=0; i<arry.length; i++){
        var name =arry[i]
        if(name.lenght > mega){
           var mega = mega.push(name) 
        }
    }
    return mega;
}
var result = megaFriend([]);
console.log(result);
