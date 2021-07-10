<template>
<div id="app">
    <exchange :expect="[['dolar', 'USD'], ['Euro', 'EUR'], ['BHD', 'BHD'],['cumhuriyet', 'cumhuriyet-altini']]" />
</div>
</template>

<script>
import Exchange from './components/Doviz.vue';
export default {
    components: {
        Exchange,
    },
}
</script>
    
<style  scoped>

</style>
