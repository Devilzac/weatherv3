import weatherApi from "@/api/weatherApi"
import { ref } from "vue"
import { useStore } from "vuex"


const useWeather = ()=>{
    const store = useStore()
    const isLoading = ref(false)
    const innerText = ref(null)
    const errorMsg = ref(null)
    const datos = ref('')

    const search = async (location='')=>{
        if(location.length<=0) return

        try {
          const {data} = await weatherApi.get('', {
            params:{
              q: location,
              days:'7',
              aqi:'no',
              alerts:'no'
            }
          })
          datos.value = data
        } catch (error) {
          errorMsg.value = 'Something went wrong, try again.'
        }
       
    }

    const getWeekDays = (date)=>{
        const weekday = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday", "Sunday"];

        const d = new Date(date);
        let day = weekday[d.getDay()];
        return day
    }

    const saveWeather = (value)=>{
        store.commit('saveWeatherFromLocation', value[0] )
        
    }

    return {
      isLoading,
      innerText,
      search,
      datos,
      getWeekDays,
      saveWeather,
    }
}

export default useWeather