<template >
    <div class="center m-4">
        <h2>Resturent list</h2>
        <div class="center ">
            <div 
            v-for="item in resturent" :key="item.id"
            class="card mb-4  " style="max-width: 75%;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://picsum.photos/id/37/200/300" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ item.restaurant_name }}</h5>
        <p class="card-text">{{ item.address }}</p>
        <p class="card-text"><small class="text-muted">{{ item.contact }}</small></p>
        <p class="card-text"><small class="text-muted">{{ item.cuisine }}</small></p>
      </div>
    </div>
  </div>
</div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:"ResturentList",
    data(){
      return{
        resturent:[],
      };
    },
    async mounted() {
        try {
            let result = await axios.get("http://localhost:3000/restaurants");
            console.warn(result);
            this.resturent = result.data;
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    },
};
</script>
<style lang="">
    
</style>