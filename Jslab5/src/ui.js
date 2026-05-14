import { getShortDescription } from "./utils.js";
import { calculateTotal, findTransactionById } from "./transactions.js";

const tbody = document.getElementById("transactionsBody");
const totalElement = document.getElementById("total");
const fullDescription = document.getElementById("fullDescription");

/**
 * Создает строку таблицы для транзакции.
 * @param {Object} transaction Объект транзакции.
 * @returns {void}
 */
export function renderTransaction(transaction) {
    const row = document.createElement("tr");

    row.dataset.id = transaction.id;

    if (transaction.amount > 0) {
        row.classList.add("income");
    } else {
        row.classList.add("expense");
    }

    row.innerHTML = `
        <td>${transaction.date}</td>
        <td>${transaction.category}</td>
        <td>${getShortDescription(transaction.description)}</td>
        <td><button data-id="${transaction.id}" class="delete-button">Удалить</button></td>
    `;

    tbody.appendChild(row);
}

/**
 * Удаляет строку таблицы по id транзакции.
 * @param {string} id Идентификатор транзакции.
 * @returns {void}
 */
export function removeTransactionRow(id) {
    const row = document.querySelector(`tr[data-id="${id}"]`);

    if (row) {
        row.remove();
    }
}

/**
 * Обновляет общую сумму на странице.
 * @returns {void}
 */
export function updateTotal() {
    totalElement.textContent = calculateTotal();
}

/**
 * Показывает полное описание транзакции.
 * @param {string} id Идентификатор транзакции.
 * @returns {void}
 */
export function showFullDescription(id) {
    const transaction = findTransactionById(id);

    if (transaction) {
        fullDescription.textContent = transaction.description;
    }
}