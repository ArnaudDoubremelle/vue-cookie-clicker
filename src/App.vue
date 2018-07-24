<template>
    <div id="app">
        <Cookie></Cookie>
    </div>
</template>

<script>
    import Cookie from './components/Cookie.vue';

    export default {
        name: 'app',
        components: {
            Cookie
        }
    };
</script>

<style lang="scss">
    html, body {
        height: 100%;
    }

    body {
        margin: 0;
    }

    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100%;
    }
</style>
