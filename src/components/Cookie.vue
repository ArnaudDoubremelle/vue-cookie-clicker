<template>
    <div class="content">
        <div class="cookie-block">
            <img class="cookie" src="../assets/cookie.png" alt="cookie">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Cookie.vue'
    };
</script>

<style scoped>
    .content {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: center;
    }

    .cookie {
        cursor: pointer;
    }
</style>