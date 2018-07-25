<template>
    <div id="app">
        <Cookie></Cookie>
        <Building></Building>
    </div>
</template>

<script>
    import Cookie from './components/Cookie.vue';
    import Building from './components/Building.vue';

    export default {
        name: 'app',
        components: {
            Cookie,
            Building
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
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100%;
    }
</style>
