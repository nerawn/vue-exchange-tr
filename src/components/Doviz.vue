<template>
<div id="app">
    <div class="exchange">
        <table v-if="filtered.length !== 0">
            <tr class="orange">
                <th>Döviz Cinsi</th>
                <th>Alış</th>
                <th>Satış</th>
                <th>Değişim</th>
            </tr>

            <tr v-for="(item,index) in filtered" :key="index">
                <td>{{item.name}}</td>
                <td>{{item.degerler.Alış}}</td>
                <td>{{item.degerler.Satış}}</td>
                <td><i class="fas" :class="getDegisim(item.degerler)"></i></td>
            </tr>

        </table>
    </div>
</div>
</template>

<script>
export default {

    data() {
        return {
            filtered: []
        }
    },

    props: {
        expect: {type: Array,required: true},
        width: String,
        height: String,
        headColor: String,
        nthColor:String,
        fontSize: Number,
        padding:Number,
        icon:String,
    },

    created() {

        fetch('https://finans.truncgil.com/today.json')
            .then(response => response.json())
            .then(data => {
                this.doviz = data

                for (let i = 0; i < this.expect.length; i++) {
                    const element = this.expect[i];
                    const name = element[0]
                    const doviz = element[1]
                    const degerler = this.doviz[doviz]
                    const birim = {
                        name,
                        degerler
                    }
                    this.filtered.push(birim)
                }
            })
    },
    methods: {
        getDegisim(data) {
            if (data.Değişim[1] == '-')
                return 'fa-arrow-alt-circle-down'
            return 'fa-arrow-alt-circle-up'
        }
    },

}
</script>

<style scoped>
.exchange {
    color: #707070;
    border-radius: 10px;
    margin-top: 20px;
    margin-bottom: 20px;

}

table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 50%;
    text-align: center;
    height: 150px;
}

td,
th {
    padding: 11px !important;
    font-size: 12px;
}

.orange th {
    background-color: #F39C12 !important;
    color: white;
}

tr:nth-child(even) {
    background-color: #f0f0f08e;
}

.fa-arrow-alt-circle-down {
    color: #dc3545;
}

.fa-arrow-alt-circle-up {
    color: #28a745;

}

td:last-child {
    text-align: center;
    font-size: 20px;
}
</style>
