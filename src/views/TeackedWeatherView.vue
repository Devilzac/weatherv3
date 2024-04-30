<template>
    <h1>This is Stored weather</h1>
    <template v-if="state.locations.length>0">
      <template v-for="{data} in state.locations" :key="data.id">
        <BannerComponent  :data="data"/>
      </template>
    </template>
</template>

<script>
import BannerComponent from '@/components/BannerComponent.vue';
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
  components:{
    BannerComponent
  },
  setup() {
    const hasValues=ref(null)
      const {state} = useStore()     

      return{
        hasValues,
        state
      }
  },
}
</script>