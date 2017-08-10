var numbersArray = [60, 50, 62, 58, 54, 54];
numbersArray.sort(compareNumbers);
console.log(numbersArray);

function compareNumbers(num1, num2) {
    if (num1 > num2) {                      // {return num1 - num2}
        return 1;                           //делает то же самое, что и этот код,
    } else if (num1 === num2) {             //возвращает положительное, отридцательное число
        return 0;                           //либо 0.
    } else {
        return -1;
    }


}