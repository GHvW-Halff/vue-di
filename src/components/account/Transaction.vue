
<template>
    <div>
        <p>Type: {{ type }}</p>
        <p>Amount: <span :class="typeColor">{{ amount }}</span></p>
    </div>
</template>

<script>
import { computed } from 'vue';

export default {
    props: {
        type: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            required: true
        }
    },
    setup(props) {

        const typeColor = computed(() => {
            return props.type === 'CREDIT' ? 'credit-color' : 'debit-color';
        });

        return {
            typeColor,
        };
    }
}
</script>

<style scoped>
.credit-color {
    color: green;
}
.debit-color {
    color: red;
}
</style>
