<template>
    <div class="content">
        <div class="building-block">
            <ul>
                <li id="cursor">Cursor (5) <button v-if="cursor" @click="buyCursor">Buy</button></li>
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
                if (this.getCounter >= 5) {
                    return true;
                }
            }
        },
        methods: {
            buyCursor() {
                this.$store.commit('decrement', 5)
            }
        }
    };
</script>

<style scoped>

</style>