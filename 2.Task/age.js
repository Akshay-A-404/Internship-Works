function ageCalculator(year) {
    return 2026 - year;
}
function showAge() {
    let year = document.getElementById("age").value;
    let realAge = ageCalculator(year);
    document.getElementById("yourAge").textContent =`Your real age is ${realAge}`;
}
