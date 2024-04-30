<template>
    
    <h1>{{ data.location.name  }}</h1>
   <div class="container">
    <div class="card">
        <h3>Currently in <small>{{ data.location.name  }}</small></h3>
        <h1>{{ data.current.temp_f }}ºF</h1>    
        <small>Feels like: {{ data.current.feelslike_f  }}ºF</small>
        <img :src="data.current.condition.icon" :accesskey="data.current.condition.text">   
        <small>{{ data.current.condition.text }}</small>
       
        <Button icon="pi pi-heart" severity="help" text rounded aria-label="Favorite" @click="saveWeather([{ id: data.location.name, data }])" />
    </div>
    <template v-for="(day, index) in data.forecast.forecastday" :key="index">
       <div class="card">
            <h3>{{ getWeekDays(day.date) }}</h3>
            <small>{{ day.date  }}</small>
            <h1>{{ day.day.avgtemp_f }}ºF / {{ day.day.avgtemp_c }}ºC</h1>    
            <small>Humidity: {{  day.day.avghumidity }}%</small>
            <img :src="day.day.condition.icon" :accesskey="day.day.condition.text">   
            <small>{{ day.day.condition.text }}</small>
        </div>
    </template>
    
  </div>

</template>

<script>
import useWeather from '@/composables/useWeather';
import Button from 'primevue/button';

export default {  
    props:{
        data:{
            type: Array,
            required: true
        }
    },
    components:{
        Button
    },
    setup(){

        const {getWeekDays,saveWeather} = useWeather()


        return{
            getWeekDays,
            saveWeather
        }
    }
}
</script>

<style scoped>
.container{
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto auto;
    column-gap: 15px;
    margin-top: 15px ;
}
.card{
    box-shadow: 0px 0px 3px #000;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
}
</style>