<template>
  <SearchBar v-model="innerText" @keypress.enter="getWeather(innerText)"/>
  <WeatherBanner v-if="weatherData" :data="weatherData" />
</template>

<script>
import useWeather from '@/composables/useWeather';
import { defineAsyncComponent } from 'vue';

export default {
  name: 'SearchView',
  components: {
    SearchBar: defineAsyncComponent(()=>import('@/components/SearchBar.vue')), 
    WeatherBanner: defineAsyncComponent(()=>import('@/components/WeatherBanner.vue'))    
  },
  setup(){

    const {   innerText,
              getWeather,
              weatherData,
              errorMessage  } = useWeather()


    return{
      innerText,
      getWeather,
      weatherData,
      errorMessage,
      
    }

  }
}
</script>
