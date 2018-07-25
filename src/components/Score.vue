<template>
    <div class="count">{{getCounter}}</div>
</template>

<script>
    export default {
        name: 'Score',
        computed: {
            getCounter() {
                return this.$store.state.count
            }
        },
    };
</script>

<style scoped>

</style>