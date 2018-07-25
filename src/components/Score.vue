<template>
    <div>
        <h2 class="count">{{animatedNumber}} Cookies</h2>
        <h4 class="cookiePerSecond">{{getCookiePerSecond.toFixed(2)}} per second</h4>
    </div>
</template>

<script>
    export default {
        name: 'Score',
        data() {
            return {
                currentCookiePerSecond: 0,
                tweenedNumber: 0
            }
        },
        computed: {
            animatedNumber: function() {
                return this.tweenedNumber.toFixed(0);
            },
            getCounter() {
                return this.$store.state.count
            },
            getCookiePerSecond() {
                return this.$store.state.cookiePerSecond
            }
        },
        watch: {
            getCounter: function(newValue) {
                TweenLite.to(this.$data, 0.5, { tweenedNumber: newValue });
            }
        },
        mounted() {
            setInterval(function(){
                if (this.getCookiePerSecond > 0) {
                    this.$store.commit('incrementCount', this.getCookiePerSecond)
                }
            }.bind(this), 1000);
        }
    };
</script>

<style scoped>

</style>