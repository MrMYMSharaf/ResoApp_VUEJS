<template>
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src="../assets/img01.jpg" alt="First slide">
        <div class="carousel-caption d-none d-md-block text-center">
          <p style="color:yellow">Authentic Sri Lankan Cuisine</p>
          <h1 class="carousel-title">Culture Colombo</h1>
          <p>Bringing the authentic Sri Lankan culinary experience to the Heart of Colombo.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="../assets/img02.jpg" alt="Second slide">
        <div class="carousel-caption d-none d-md-block text-center">
          <p style="color:yellow">Authentic Sri Lankan Cuisine</p>
          <h1 class="carousel-title">Culture Colombo</h1>
          <p>Bringing the authentic Sri Lankan culinary experience to the Heart of Colombo.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="../assets/img03.jpg" alt="Third slide">
        <div class="carousel-caption d-none d-md-block text-center">
          <p style="color:yellow">Authentic Sri Lankan Cuisine</p>
          <h1 class="carousel-title">Culture Colombo</h1>
          <p>Bringing the authentic Sri Lankan culinary experience to the Heart of Colombo.</p>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'CarouselLayer',
};
</script>

<style scoped>
.carousel-title {
  font-size: 4rem; /* Adjust the font size as needed */
  font-weight: bold;
  color: white;
}
.carousel-caption {
  bottom: 50%; /* Position text in the center vertically */
  transform: translateY(50%);
}
</style>
