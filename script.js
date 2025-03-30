// Links
const numInput = document.getElementById("numInput");
const output = document.getElementById("output");


// Functions
function countDigits(num) {
    let digitCount = num.replace('-', '').length;

    output.innerText += "Počet číslic: " + digitCount + "\n";
}

function oddEven(num) {
    if (num !== "") {
        output.innerText += "Číslo je: " + ((num % 2 === 0) ? "Sudé" : "Liché") + "\n";
    }
}

function isPrime(num) {
    if (num < 2) {
        output.innerText += "Je prvočíslo: Ne\n";  // If number is less than 2, it's not prime
        return false;
    }
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            output.innerText += "Je prvočíslo: Ne\n";  // If divisible, it's not prime
            return false;
        }
    }
    
    output.innerText += "Je prvočíslo: Ano\n";  // If no divisors, it's prime
    return true;
}

function isPalindrome(num) {
    let str = num.toString();
    
    let isPalindrom = str === str.split('').reverse().join('');
    
    output.innerText += "Je palindrom: " + (isPalindrom ? "Ano" : "Ne") + "\n";
}

function digitSum(num) {
    if (num !== "") {
        let sum = num.split('').reduce((acc, digit) => acc + parseInt(digit), 0);
        
        output.innerText += "Ciferný součet čísla: " + sum;
    }
}


// Output
numInput.addEventListener("input", () => {
    let num = numInput.value;
    output.innerHTML = "";

    countDigits(num);

    if (num !== "") {
        oddEven(num);
        isPrime(num);  // Only call for prime check if the input is a number (not empty string)
        isPalindrome(num);
        digitSum(num);
    }
});
