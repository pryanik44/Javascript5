/**
 * Массив транзакций.
 * @type {Array}
 */
export const transactions = [];

/**
 * Добавляет транзакцию в массив.
 * @param {Object} transaction Объект транзакции.
 * @returns {void}
 */
export function addTransactionToArray(transaction) {
    transactions.push(transaction);
}

/**
 * Удаляет транзакцию из массива по id.
 * @param {string} id Идентификатор транзакции.
 * @returns {void}
 */
export function deleteTransactionFromArray(id) {
    const index = transactions.findIndex(function (transaction) {
        return transaction.id === id;
    });

    if (index !== -1) {
        transactions.splice(index, 1);
    }
}

/**
 * Считает общую сумму транзакций.
 * @returns {number} Общая сумма.
 */
export function calculateTotal() {
    return transactions.reduce(function (sum, transaction) {
        return sum + transaction.amount;
    }, 0);
}

/**
 * Находит транзакцию по id.
 * @param {string} id Идентификатор транзакции.
 * @returns {Object|undefined} Найденная транзакция.
 */
export function findTransactionById(id) {
    return transactions.find(function (transaction) {
        return transaction.id === id;
    });
}