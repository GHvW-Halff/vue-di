// @ts-check


/**
 * @typedef {Object} BankAccount
 * @property {number} id
 * @property {number} balance
 */


/**
 * @param {BankAccount} account 
 * @param {Transaction} transaction 
 * @returns {BankAccount}
 */
export function updateAccount(account, transaction) {
    switch (transaction.type) {
        case 'CREDIT':
            return { ...account, balance: account.balance + transaction.amount };
        case 'DEBIT':
            return { ...account, balance: account.balance - transaction.amount };
        default:
            throw new Error(`Unknown transaction type: ${transaction.type}`);
    }
}