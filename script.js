// Links
const numInput = document.getElementById("numInput");
const output = document.getElementById("output");



// Functions
function countDigits() {
    let num = numInput.value;
    let digitCount = num.replace('-', '').length;

    output.innerHTML += "Počet číslic: " + digitCount + "<br>";
}

function oddEven() {
    let num = numInput.value;
    output.innerHTML += "Číslo je: ";
    num % 2 === 0 ? output.innerHTML += "Sudé" + "<br>" : output.innerHTML += "Liché" + "<br>";
}

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Output
numInput.addEventListener("input", () => {
    output.innerHTML = "";
    countDigits();
    oddEven();
    let num = parseInt(numInput.value, 10);
    if (!isNaN(num)) {
        output.innerText += " | Prime: " + (isPrime(num) ? "Yes" : "No");
    }
});
