<template>
    <div class="content">
        <div class="building-block">
            <ul>
                <li id="cursor">Cursor (10) <button v-if="cursor" @click="buyCursor">Buy</button></li>
                <li id="grandma">Grandma (25) <button v-if="grandma" @click="buyGrandma">Buy</button></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Building',
        computed: {
            getCounter() {
                return this.$store.state.count;
            },
            cursor() {
                if (this.getCounter >= 10) {
                    return true;
                }
            },
            grandma() {
                if (this.getCounter >= 25) {
                    return true;
                }
            }
        },
        methods: {
            buyCursor() {
                this.$store.commit('decrementCount', 10);
                this.$store.commit('incrementCookiePerSecond', 0.2);
            },
            buyGrandma() {
                this.$store.commit('decrementCount', 25);
                this.$store.commit('incrementCookiePerSecond', 1);
            }
        }
    };
</script>

<style scoped>

</style>