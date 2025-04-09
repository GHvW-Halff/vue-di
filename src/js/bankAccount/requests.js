// @ts-check


export class AccountRequests {
    constructor(baseURL, auth) {
        this.baseURL = baseURL;
        this.auth = auth;
    }

    /**
     * 
     * @param {number} accountId 
     * @returns {Promise<Array<Transaction>>}
     */
    async getTransactions(accountId) {
        const token = await this.auth.getTokenSilently();
        const url = `${this.baseURL}/accounts/${accountId}/transactions`;

        // const response = await fetch(url, {
        //     method: 'GET',
        //     headers: {
        //         'Authorization': `Bearer ${this.auth}`,
        //         'Content-Type': 'application/json'
        //     },
        // });

        // return response.json();

        return Promise.resolve([{
            id: 1,
            accountId: 1,
            amount: 1000,
            type: 'CREDIT'
        }, {
            id: 2,
            accountId: 1,
            amount: 500,
            type: 'DEBIT'
        }]);
    }
}