# Vue Exchange TR

##### Bu kompanent, api işlemini türkiye kuru üzerinden çekmektedir.

- **Kompanent demo aşamasındadır, ingilizce dil seçeneği ve lokasyon ayarı eklenecektir.**


- **Hatalar veya geliştirme önerileri için lütfen  [issue atın](https://github.com/SSENSE/vue-carousel/issues)**.



## Kullanımı

###### İndirme

```bash
npm i vue-exchange-tr
```

###### Tanıtım

```js
import Vue from "vue";
import exchange from "vue-exchange-tr";
Vue.use(exchange);
```

###### Local

```js
import exchange from 'vue-exchange-tr';

export default {
  ...
  components: {
    exchange
  }
  ...
};
```
##### Konfigrasyon

| Özellik   | Tür    | Açıklama                                                                                                                                      |
|-----------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| Expect    | Array  | https://finans.truncgil.com/ üzerinden Kur isimlerini alabilirsiniz. Sistem key-value şeklinde çalışmaktadır. ilk gözükecek isim, ikinci kur  |
| headColor | String | Başlık arka plan rengidir. Renk kodu(#707070) veya renk ismi ("blue, red') girişi yapılabilir.                                                 |
| Width     | String | px, em , vh, % vb. (min-width: 250px)                                                                                                         |
| icon      | String | arrow, angle , caret                                                                                                                          |


###### Template üzerinde Kullanımı

```html
<div style="width:250px;">
  <exchange
    :expect="[['dolar', 'USD'], ['euro', 'EUR']] "
    headColor="#707070"
    width="500px"
    icon="arrow"
  />
</div>
```

