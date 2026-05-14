/**
 * Генерирует уникальный идентификатор.
 * @returns {string} Уникальный id.
 */
export function generateId() {
    return String(Date.now());
}

/**
 * Форматирует дату в строку.
 * @param {Date} date Дата.
 * @returns {string} Отформатированная дата.
 */
export function formatDate(date) {
    return date.toLocaleString();
}

/**
 * Возвращает первые четыре слова описания.
 * @param {string} description Полное описание.
 * @returns {string} Краткое описание.
 */
export function getShortDescription(description) {
    return description.split(" ").slice(0, 4).join(" ");
}