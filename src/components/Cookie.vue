<template>
    <div class="content">
        <div class="cookie-block">
            <Score></Score>
            <img class="cookie" @click="increment" src="../assets/cookie.png" alt="cookie">
        </div>
    </div>
</template>

<script>
    import Score from './Score.vue';

    export default {
        name: 'Cookie',
        components: {
            Score
        },
        methods: {
            increment() {
                this.$store.commit('incrementCount')
            }
        }
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