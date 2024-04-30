import weatherApi from "@/api/weatherApi"
import { ref } from "vue"
import { useStore } from "vuex"

const useWeather = ()=>{

    const store = useStore()

    const innerText = ref('')
    const errorMessage = ref(null)
    const weatherData = ref(null) 

          
            const saveWeather= (location)=>{
                console.log("location: ", location)
                store.commit('saveWeatherLocation', location)
            }
          const getWeather = async (location='Austin Tx')=>{
            if(location.length<=0) return
            try {
                const {data} = await weatherApi.get('', {params:{
                    q: location,
                    days: '7',
                    aqi: 'no',
                    alerts:'no',
                  }
                })
                weatherData.value = data
                console.log(data)
            } catch (error) {
              errorMessage.value = "Ops something went wrong!! Maybe your fingers are not working?"
            }              
          } 

          const getWeekDays = (date)=>{
                const weekday = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];    
                const d = new Date(date);
                let day = weekday[d.getDay()];
                return day
          }
     


    return{
      innerText,
      getWeather,
      weatherData,
      errorMessage,
      saveWeather,
      getWeekDays
    }
}

export default useWeather