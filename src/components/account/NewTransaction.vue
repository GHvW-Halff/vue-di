

<template>
    <div>
        <div>New Transaction</div>
        <div>
            <label>Type</label>
            <select v-model="transactionType">
                <option value="CREDIT" default>Credit</option>
                <option value="DEBIT">Debit</option>
            </select>
        </div>
        <div>
            <label>Amount</label>
            <input type="number" v-model="amount" placeholder="Enter amount" />
        </div>
        <button @click="onSubmit">Submit</button>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    props: {
        onSubmit: {
            type: Function,
            required: true
        }
    },
    setup(props) {
        const transactionType = ref('CREDIT');
        const amount = ref(0);
        const onSubmit = () => {
            props.onSubmit({
                type: transactionType.value,
                amount: amount.value,
            });
            amount.value = 0; 
        };

        return {
            transactionType,
            amount,
            onSubmit,
        };
    }
}
</script>