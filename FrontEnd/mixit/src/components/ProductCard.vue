<template>
    <vue-product-card
      :infos="infos"
      :cardColor="cardColor"
      :stripColor="stripColor"
      :buttonColor="buttonColor"
      :textColor="textColor"
      :numberShow="true"
    ></vue-product-card>
  </template>
  
  <script>
  import VueProductCard  from 'vue-product-card'
  export default {
    components:{
        "vue-product-card" : VueProductCard
    },
    data() {
      return {
        cardColor: "#313131",
        stripColor: "#35AFFB",
        buttonColor: "#35AFFB",
        textColor: "#fff",
        infos: [
          {
            src: "foo.png",
            title: "Headphone",
            price: "89.99₺",
            url: "",
            btnText: "Satın Al",
          },
        ],
      };
    },
  };
  </script>