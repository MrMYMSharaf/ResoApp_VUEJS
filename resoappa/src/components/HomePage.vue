<template>
  <div>
    <!-- Carousel Layer -->
    <div>
      <CarouselLayer />
    </div>

    <!-- Animated Cards Section -->
    <div class="m-5">
      <MotionGroup preset="slideVisibleLeft" :duration="800" class="container">
        <h2 class="position-relative my-4">Home demo run</h2>
        <div class="row mt-3 p-5">
          <!-- Card 1 -->
          <div class="col-md-4 mb-4" v-motion>
            <div class="card">
              <img src="https://picsum.photos/300/200" class="card-img-top" alt="Card image 1">
              <div class="card-body">
                <h5 class="card-title">Card Title 1</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <!-- Card 2 -->
          <div class="col-md-4 mb-4" v-motion>
            <div class="card">
              <img src="https://picsum.photos/id/27/300/200" class="card-img-top" alt="Card image 2">
              <div class="card-body">
                <h5 class="card-title">Card Title 2</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <!-- Card 3 -->
          <div class="col-md-4 mb-4" v-motion>
            <div class="card">
              <img src="https://picsum.photos/id/143/300/200" class="card-img-top" alt="Card image 3">
              <div class="card-body">
                <h5 class="card-title">Card Title 3</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
      </MotionGroup>
    </div>

    <!-- Menu Section -->
    <div>
      <MotionGroup preset="slideVisibleRight" :duration="800">
        <div class="text-center my-4">
          <h2>discover our</h2>
          <h2 class="font-weight-bold my-4">MOUTH WATERING MENU</h2>
          <hr class="divider-line my-4" />
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <ul class="menu-list d-flex flex-column text-left">
                  <li>Mixed Seafood Dry Curry Bowl (W/Roast Bread) - 4550</li>
                  <li>Culture Colombo Tasting Basket - 5550</li>
                  <li>Bamboo Biriyani (Chicken) - 1950</li>
                  <li>Kachal Rice - 4250</li>
                  <li>Waw Malu Meal - 2550</li>
                  <li>Hot Butter Chicken Hopper Meal - 1950</li>
                  <li>Negambo Crab Curry - 2250</li>
                  <li>Culture Special Chicken Kottu - 2750</li>
                </ul>
              </div>
              <div class="col-md-6">
                <!-- Add additional content or an image here if needed -->
              </div>
            </div>
          </div>
        </div>
      </MotionGroup>
    </div>
    <!-- Offer Section -->
    <div class="offer-section m-5" :style="{ backgroundImage: `url(${offerImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }">
    <MotionGroup preset="slideVisibleTop" :duration="800">

    
      <div class="container">
    <div class="row">
      <div class="col-md-6">
        <!-- Optional: Add any additional content or an image here -->
      </div>
      <div class="col-md-6 text-white text-right d-flex flex-column justify-content-center">
        <h3 class="offer-heading">We Offer</h3>
        <h2 class="offer-subheading">WONDERFUL FLAVOURS</h2>
        <div>
          <p>We want you to sit down and enjoy your meal just like the way you enjoy your homemade dishes! We have embarked on this journey and e are glad that you have taken the time off of your schedule to know our story to experience our experience.</p>
        </div>
      </div>
    </div>
  </div>
</MotionGroup>
</div>
<!--End Offer Section -->
  </div>
</template>

<script>
import CarouselLayer from './CarouselLayer.vue';
import { MotionGroup } from '@vueuse/motion';
import offerImage from '@/assets/offer.jpg';
export default {
  name: 'HomePage',
  components: {
    CarouselLayer,
    MotionGroup,
  },
  data() {
    return {
      offerImage,
    };
  },
};
</script>

<style scoped>
.divider-line {
  width: 10%;
  height: 4px;
  background-color: #000;
  border: none;
  margin: 8px auto;
}

.text-center h2 {
  margin: 10px;
}

.font-weight-bold {
  font-weight: bold;
}

.menu-list {
  list-style-type: none;
  padding: 0;
}

.menu-list li {
  font-size: 1.1rem;
  padding: 8px 0;
  border-bottom: 1px solid #ddd;
}
.offer-section {
  background-position: center;
  padding: 80px 20px; /* Adjust as necessary */
  border-radius: 8px;
  color: #fff;
}

.offer-heading {
  font-size: 1.5rem;
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.offer-subheading {
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1.2;
  text-transform: uppercase;
}

</style>
