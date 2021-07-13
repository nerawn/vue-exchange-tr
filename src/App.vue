// ! çift tırnağın içinde ekstra tırnak açılmaması lazım
// ! Readme pushlanmadan önce ayarla 
// ? width height padding font size ve border dinamik olması lazım 
// * default ayarı yapılmalı 

<template>
<div id="app">
    <exchange :expect="[['dolar', 'USD'],['Euro', 'EUR'],['BHD', 'BHD'],['cumhuriyet', 'cumhuriyet-altini'],]" headColor="#707070" width="500px" icon="arrow" />
</div>
</template>

<script>
import Exchange from "./components/Doviz.vue";
export default {
    components: {
        Exchange,
    },
};
</script>

<style  scoped>
</style>
