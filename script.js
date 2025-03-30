const numInput = document.getElementById("numInput");
const output = document.getElementById("output");

function cifernySoucet(cislo) {
    let soucet = 0;
    let cisloString = String(cislo);
    let ciselnyZnak;
    for (let i = 0; i < cisloString.length; i++) {
        ciselnyZnak = cisloString[i];
        soucet += Number(ciselnyZnak);
    }
    return soucet;
}

function palindrom(cislo) {
    let cisloString = cislo.toString();
    for (let i = 0; i < cisloString.length / 2; i++) {
        if (cisloString[i] !== cisloString[cisloString.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

function jeToPrvocislo(vstup) {
    let cislo = parseInt(vstup);
    if (cislo < 2) {
        return false;
    }
    if (cislo % 2 === 0 && cislo !== 2) {
        return false;
    }
    let delitel = 3;
    while (delitel <= Math.sqrt(cislo)) {
        if (cislo % delitel === 0) {
            return false;
        }
        delitel += 2;
    }
    return true;
}

function pocetCislic(cislo) {
    return cislo.toString().length;
}

function jeSude(cislo) {
    return cislo % 2 === 0;
}
numInput.addEventListener("input", () => {
    const vstup = parseInt(numInput.value);

    const pocet = pocetCislic(vstup);
    const sudeLiche = jeSude(vstup) ? "sudé" : "liché";
    const prvocislo = jeToPrvocislo(vstup) ? "ano" : "ne";
    const jePalindrom = palindrom(vstup) ? "ano" : "ne";
    const cifSoucet = cifernySoucet(vstup);

    output.innerHTML = `
        <p>Počet číslic: ${pocet}</p>
        <p>Číslo je: ${sudeLiche}</p>
        <p>Je prvočíslo: ${prvocislo}</p>
        <p>Je palindrom: ${jePalindrom}</p>
        <p>Ciferný součet: ${cifSoucet}</p>
    `;
});
