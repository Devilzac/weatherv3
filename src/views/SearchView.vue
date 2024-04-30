<template>
  <div class="home">
    <InputText  v-model="innerText" placeholder="Keyword" @keypress.enter="search(innerText)" />
    <p v-if="errorMsg"> {{ errorMsg }} </p>
  </div>
  <BannerComponent v-if="datos" :data="datos"/>
</template>

<script>
// @ is an alias to /src
import useWeather from '@/composables/useWeather';
import BannerComponent from '@/components/BannerComponent.vue';
import InputText from 'primevue/inputtext';

export default {
  name: 'HomeView',
  components: {
    BannerComponent,
    InputText,
  },
  setup(){

    const { datos,errorMsg, innerText, search } = useWeather()


    

    return {
      datos,
      errorMsg, 
      innerText, 
      search 
    }
  }
}
</script>
