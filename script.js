// Links
const numInput = document.getElementById("numInput");
const output = document.getElementById("output");


// Functions
function countDigits() {
    let num = numInput.value;
    let digitCount = num.replace('-', '').length;

    output.innerText += "Počet číslic: " + digitCount + "\n";
}

function oddEven() {
    let num = numInput.value;
    if (num !== "") {
        output.innerText += "Číslo je: " + ((num % 2 === 0) ? "Sudé" : "Liché") + "\n";
    }
}

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function isPalindrome(num) {
    let str = num.toString();
    return str === str.split('').reverse().join('');
}


// Output
numInput.addEventListener("input", () => {
    let num = parseInt(numInput.value, 10);
    output.innerHTML = "";
    countDigits();
    oddEven();
    if (!isNaN(num)) {
        output.innerText += "Prvočíslo: " + (isPrime(num) ? "Yes" : "No") + "\n";
    }
    if (!isNaN(num)) {
        output.innerText += "je Palind: " + (isPalindrome(num) ? "Yes" : "No") + "\n";
    }
});
