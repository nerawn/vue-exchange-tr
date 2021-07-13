<template>
<div id="app">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css">
    <div class="exchange">
        <table v-if="filtered.length !== 0" :style="{width:width ? width : '30%' }">
            <tr class="orange">
                <th :style="{backgroundColor: head}">Döviz</th>
                <th :style="{backgroundColor: head}">Alış</th>
                <th :style="{backgroundColor: head}">Satış</th>
                <th :style="{backgroundColor: head}">Değişim</th>
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
            filtered: [],
            up: "",
            down: ""

        }
    },
    // props: {
    //     expect: {
    //         type: Array,
    //         required: true
    //     },
    //     headColor: String,
    //     width: [Number, String],
    //     height: String,
    //     nthColor: String,
    //     fontSize: Number,
    //     padding: Number,
    //     icon: Object,
    // },

    props: ['headColor', 'expect', 'width', 'icon'],

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
        switch (this.icon) {
            case "arrow":
                this.up = "fa-arrow-alt-circle-up"
                this.down = "fa-arrow-alt-circle-down"
                break;
            case "angle":
                this.up = "fa-angle-up"
                this.down = "fa-angle-down"
                break;
            case "caret":
                this.up = "fa-caret-up"
                this.down = "fa-caret-down"
                break;

        }
    },

    computed: {
        head() {
            if (this.headColor) {
                return this.headColor
            } else
                return 'blue'

        }
    },

    methods: {
        getDegisim(data) {
            if (data.Değişim[1] == '-')
                return this.up
            return this.down
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
    color: white;
}

tr:nth-child(even) {
    background-color: #f0f0f08e;
}

.fa-arrow-alt-circle-up,
.fa-angle-up,
.fa-caret-up {
    color: #28a745;

}

.fa-arrow-alt-circle-down,
.fa-angle-down,
.fa-caret-down {
    color: #dc3545;
}

td:last-child {
    text-align: center;
    font-size: 20px;
}

.birinciClass th {
    background-color: #28a745 !important;
}

.ikinciClass th {
    background-color: red !important;
}
</style>
