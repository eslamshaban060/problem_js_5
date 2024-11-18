// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!! PROBLEM NO 5 !!!!!!!!!!!!!!!!!!!!!!!!!

// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript


// ========================== METHODE ONE  ===========================

// function createPhoneNumber(numbers){
  

//     // ======================== conditon ===========================

    

//        return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`

  



//     // ======================== conditon ===========================
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))




// ========================== METHODE 2  ===========================



// function createPhoneNumber(numbers){
//         let result = ""
//         let result1 =""
//     // ======================== conditon ===========================

    
//     for(let i = 0 ; i < 3 ;i++){

//         result1 +=`${numbers[i]}`

//     }
//      result +=`(${result1}) `

     
//     //  ---------------------------------------

//     for(let i = 3 ; i < 6 ;i++){
//         result +=`${numbers[i]}`
//     }
//     result +="-"
// // -------------------------------------------

//     for(let i = 6 ; i < 10 ;i++){
//         result +=`${numbers[i]}`
//     }

//     // ======================== conditon ===========================

//     return result
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))



// ========================== METHODE 3  ===========================


function createPhoneNumber(numbers){
    let result = ""
    
// ======================== conditon ===========================
    
    str1 = numbers.slice(0,3).join("")
    result+=`(${str1})`
    // ---------------------------------
    str2 = numbers.slice(3,6).join("")
    result+=` ${str2}-`
    // ---------------------------------
    str3 = numbers.slice(6,10).join("")
    result+=`${str3}`


// ======================== conditon ===========================
return result

}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))




// slice  ================> شريحه مش بتاثر على محتوى اليست الاصليه (البدايه والنهايه )

// splice =======================> بتقص جزى من الاريه عندى وبتاخد رقمين الاول يمثل البدايه والتانى بيثمل عدد العناصر بعده 
