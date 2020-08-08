//=========================================================Four Javascript Problems=============================================================




// (1). Feet To Mile Converter-------------------------------

// function feetToMile (feet){
//     var mile = feet/5280;
//     return mile;
// }

// var feets = feetToMile(100);
// console.log(feets);


// =============================================================================================================================================



// (2). Wood Calculator-------------------------------

// function woodCalculator (chair, table, bed) {
//     var woodQuantity = "";

//     if (chair<0 || table<0 || bed<0){
//         woodQuantity = "Invalid input. Please input another number.";
//     }

//     else {
//         var woodTotal = chair + table*3 + bed*5;
//         woodQuantity = "You Need"+ " " + woodTotal + " " + "Cubic Feet Of Wood";
//     }

//     return woodQuantity;
// }
// console.log(woodCalculator(-1, 2, 3));



// =============================================================================================================================================




// (3). Brick Calculator-------------------------------

// function brickCalculator (height){
//     var result = "";
//     if (height<=0){
//         result = "This is the wrong value. Please input the right value";
//     }

//     else{
//         if(height<=10){
//             var oneToTen = height*15*1000;
//             result = "You Need " + oneToTen + " Bricks";
//         }

//         else if (10<height<=20){
//             var elevenTotwenty = height*12*1000;
//             result = "You Need " + elevenTotwenty + " Bricks";
//         }

//         else if (height>20) {
//             var twentyOneToInfinite = height*10*1000;
//             result = "You Need " + twentyOneToInfinite + " Bricks";
//         }
//     }
//     return result;
// }
// var totalBricks = brickCalculator(-25);
// console.log(totalBricks);



// =============================================================================================================================================




// (4). Tiny Friend-------------------------------


// function tinyFriend(friendsName){
//     var result = "";

//     if(friendsName.length==0){
//         result = "This is empty value. Please input right value.";
//     }

//     else{
//         var tinyFriend = friendsName[0];
//         for(var i=1; i<friendsName.length; i++){
//             if (friendsName[i].length < friendsName[0].length){
//                 tinyFriend = friendsName[i];
//             }
//         }
//         result = "(" + tinyFriend + ")" + " is the smallest friend of the friend circle.";
//     }
//     return result;
// }
// console.log(tinyFriend(["Arif", "Mahdi", "Rojib", "Sakhawat", "Shakkhor", "Hadid", "Showkot"]));




// =============================================================================================================================================