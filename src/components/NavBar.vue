
<template>
    <div id="nav">
        <div class="page-link">
            <RouterLink to="/">Home</RouterLink>
        </div>
        <div class="page-link">
            <RouterLink to="/account/3">Account</RouterLink>
        </div>
        <div class="page-link">
            <RouterLink to="/about">About</RouterLink>
        </div>
        <div class="page-link">
            <RouterLink to="/fun">Fun</RouterLink>
        </div>
  </div>
</template>

<script>
export default {
    setup() {

    }
}
</script>

<style scoped>
#nav {
    display: flex;
    justify-content: space-between;
}

.page-link {
    margin: 0 10px;
}
</style>