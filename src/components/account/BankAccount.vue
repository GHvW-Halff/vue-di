// @ts-check

<template>
    <div>
        <h3>Account Summary</h3>
    </div>
    <div>
        <p>Total: {{ account.balance }}</p>
    </div>
    <div>
        <NewTransaction :onSubmit="addTransaction" />
    </div>
    <div>
        <div v-for="xaction in transactions">
            <Transaction :type="xaction.type" :amount="xaction.amount" />
        </div>
    </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { updateAccount } from '../../js/bankAccount/bankAccount';
import Transaction from './Transaction.vue';
import NewTransaction from './NewTransaction.vue';

export default {
    components: {
        Transaction,
        NewTransaction
    },
    props: {
        id: {
            type: String,
            required: true
        },
        getTransactions: {
            type: Function,
            required: true
        }
    },
    setup(props) {
        const transactions = ref([]);
        const account = ref({
            id: props.id,
            balance: 0
        });

        onMounted(async () => {
            const accountTransactions = await props.getTransactions();
            transactions.value = accountTransactions;
            account.value = accountTransactions.reduce(updateAccount, account.value);
        });

        const addTransaction = async (transaction) => {
            transactions.value.push(transaction);
            account.value = updateAccount(account.value, transaction);
        };

        return {
            transactions,
            account,
            addTransaction
        };
    }
}
</script>
