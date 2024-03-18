let arvottujenRivienLkm = 0;

function button() {
    arvottujenRivienLkm++;

const table = document.getElementById("jokeriTable");
const row = table.insertRow(-1);
const cell0 = row.insertCell(0);
const cell1 = row.insertCell(1);
const cell2 = row.insertCell(2);
const cell3 = row.insertCell(3);
const cell4 = row.insertCell(4);
const cell5 = row.insertCell(5);
const cell6 = row.insertCell(6);
const cell7 = row.insertCell(7);

cell0.textContent = arvottujenRivienLkm;

for (let i = 1; i <= 7; i++) {
    const arvottuNumero = Math.floor(Math.random() * 10);
    row.cells[i].textContent = arvottuNumero;
}

document.getElementById("rowCount").textContent = `Valmiita rivejä ${arvottujenRivienLkm}`;
}