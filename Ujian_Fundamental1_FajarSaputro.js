// // Soal 1

// var number = [-10, -5, 20, 20, -4, 5, 2, -25, 1];

// function PosNeg()
// {
//     var negatif = number[0];
//     var positif = number[0];
//     var countNeg = 0;
//     var countPost = 0;
//     var penPost = 0;
//     for (i = 0; i<=number.length; i++)
//     {
//         if (number[i] < negatif)
//         {
//             negatif = number[i];
//             countNeg++;
//         }
//         else if (number[i] > positif)
//         {
//             var temp = number[i] - positif;
//             max = number[i];
//             countPost++;
//             if(temp > penPost)
//             {
//                 penPost = temp;
//             }
//         }
//     }
//     console.log(countPost);
//     console.log(countNeg);
//     console.log("Positif Win");
// }
// PosNeg()


// Soal 2

var string = ['#', '4','8', 'G', 'I','&','%'];

var string1 = string.slice(3,5);
console.log("Huruf " + string1);

var string2 = string.slice(1,3);
console.log("Angka " + string2);
