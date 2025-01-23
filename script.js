function calculate() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);

    if (isNaN(a) || isNaN(b)) {
        alert('Proszę podać dwie liczby.');
        return;
    }

    const result = a + b;
    document.getElementById('result').textContent = result;
}