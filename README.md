#Vue Exchange TR

#####Bu kompanent, api işlemini türkiye kuru üzerinden çekmektedir.

##Kullanımı

######İndirme

```
npm i vue-exchange-tr
```

######Tanıtım

```
import Vue from 'vue'
import exchange from 'vue-exchange-tr'
Vue.use(exchange);
```

######Local

```
import exchange from 'vue-exchange-tr';

export default {
  ...
  components: {
    exchange
  }
  ...
};
```
######Template üzerinde Kullanımı
```
 <div style="width:250px;>
        <exchange :expect="[['dolar', 'USD'], ['euro', 'EUR']] " />
 </div>
```

######Template üzerinde Kullanımı

Ekstralar

- Kompanent demo aşamasındadır. Ekstra olarak ingilizce dil seçeneği ve lokasyon ayarı eklenecektir.
- expect bölümü key value şeklinde çalışmaktadır.
- configrasyon bir sonraki güncellemede gelecektir.
