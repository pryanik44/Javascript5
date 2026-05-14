import { generateId, formatDate } from "./utils.js";
import {
    addTransactionToArray,
    deleteTransactionFromArray
} from "./transactions.js";
import {
    renderTransaction,
    removeTransactionRow,
    updateTotal,
    showFullDescription
} from "./ui.js";

const form = document.getElementById("transactionForm");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");
const descriptionInput = document.getElementById("description");
const errorElement = document.getElementById("error");
const table = document.getElementById("transactionsTable");

/**
 * Добавляет новую транзакцию.
 * @param {Event} event Событие отправки формы.
 * @returns {void}
 */
function addTransaction(event) {
    event.preventDefault();

    const amount = Number(amountInput.value);
    const category = categoryInput.value;
    const description = descriptionInput.value;

    if (amountInput.value === "" || category === "" || description === "") {
        errorElement.textContent = "Заполните все поля";
        return;
    }

    const transaction = {
        id: generateId(),
        date: formatDate(new Date()),
        amount: amount,
        category: category,
        description: description
    };

    addTransactionToArray(transaction);
    renderTransaction(transaction);
    updateTotal();

    errorElement.textContent = "";
    form.reset();
}

form.addEventListener("submit", addTransaction);

/**
 * Обрабатывает клики по таблице.
 * @param {Event} event Событие клика.
 * @returns {void}
 */
table.addEventListener("click", function (event) {
    const id = event.target.dataset.id;

    if (event.target.classList.contains("delete-button")) {
        deleteTransactionFromArray(id);
        removeTransactionRow(id);
        updateTotal();
        return;
    }

    const row = event.target.closest("tr");

    if (row && row.dataset.id) {
        showFullDescription(row.dataset.id);
    }
});