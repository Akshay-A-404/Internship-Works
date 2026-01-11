let expenseName = document.querySelector("#expenseName");
let expenseAmount = document.querySelector("#expenseAmount");
let addBtn = document.querySelector("#addExpense");
let deleteBtn = document.querySelector("#deleteLast");
let expenseList = document.querySelector("#expenseList");
let totalAmount = document.querySelector("#totalAmount");
let expenses = [];
addBtn.addEventListener("click", function () {
    let name = expenseName.value.trim();
    let amount = Number(expenseAmount.value);
    if (name === "" || amount <= 0) {
        return;
    }
    expenses.push({ name, amount });
    expenseName.value = "";
    expenseAmount.value = "";
    renderExpenses();
    calculateTotal();
});
deleteBtn.addEventListener("click", function () {
    if (expenses.length === 0) {
        return;
    }
    expenses.pop();
    renderExpenses();
    calculateTotal();
});
function renderExpenses() {
    expenseList.innerHTML = "";
    expenses.forEach(exp => {
        let li = document.createElement("li");
        li.innerHTML = `<span>${exp.name}</span><span>₹${exp.amount}</span>`;
        expenseList.appendChild(li);
    });
}
function calculateTotal() {
    let total = 0;
    expenses.forEach(exp => {
        total += exp.amount;
    });
    totalAmount.textContent = `₹${total}`;
}
