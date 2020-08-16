<template>
  <div class="home">
    <header class="masthead">
  <div class="container h-100">
    <div class="row h-100 align-items-center">
      <div class="col-12 text-center text-white">
        <h1 class="font-weight-light display-2">Bunjy</h1>
        <p class="lead">Bunjy is a platform where local businesses and freelancers can extend their reach to the their community and where the community can easily browse and support local businesses</p>
      </div>
    </div>
  </div>
</header>

<!-- Page Content -->
<section class="py-5">
  <div class="container">
    <h2 class="font-weight-light">About Us</h2>
    <p>Bunjy strives to connect local businesses and freelancers to its respective locality in order to redefine what it means to be a community.</p>
  </div>
</section> 
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped>
.masthead {
  height: 100vh;
  min-height: 500px;
  background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('../assets/local.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

</style>