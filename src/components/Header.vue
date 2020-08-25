<template>
    <div>
    <nav class="site-header sticky-top py-1">
      <div class="container d-flex flex-column flex-md-row justify-content-between">
        <a class="py-2 d-none d-md-inline-block"><router-link to="/">Home</router-link></a>
        <a class="py-2 d-none d-md-inline-block"><router-link to="/about">About</router-link></a>
        <a v-if="logged" class="py-2 d-none d-md-inline-block"><router-link v-if="logged" to="/profile">Profile</router-link></a>
        <a v-if="!logged" class="py-2 d-none d-md-inline-block"><router-link v-if="!logged" to="/login">Login</router-link></a>
        <a v-if="!logged" class="py-2 d-none d-md-inline-block"><router-link v-if="!logged" to="/register">Register</router-link></a>
        <a v-if="logged" class="py-2 d-none d-md-inline-block"><router-link v-if="logged" to="/Search">Search</router-link></a>
        <a v-if="logged" class="py-2 d-none d-md-inline-block"><router-link v-if="logged" to="/logistics">Logistics</router-link></a>
        <a v-if="logged" style="cursor: pointer" v-on:click="logout" class="py-2 d-none d-md-inline-block">Logout</a>
      </div>
    </nav>
    </div>
</template>

<script>
export default {
    name: "header",
    computed: {
        logged: function () {
            return this.$store.state.logged;
        }
    }, methods: {
        logout: function () {
            this.$store.dispatch('logout').then(() => {
                this.$router.push('/about');
            });
        }
    }
}
</script>

<style scoped>
/* img {
    width: 20px;
} */
a {
  color: #FFF;
}

.ml-auto a {
    color: #000;
}

a:hover {
   color: rgb(140, 140, 160)
}

.container {
  max-width: 960px;
}

/*
 * Custom translucent site header
 */

.site-header {
  background-color: rgba(0, 0, 0, .85);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
}
.site-header a {
  color: #999;
  transition: ease-in-out color .15s;
}
.site-header a:hover {
  color: #fff;
  text-decoration: none;
}

/*
 * Dummy devices (replace them with your own or something else entirely!)
 */

.product-device {
  position: absolute;
  right: 10%;
  bottom: -30%;
  width: 300px;
  height: 540px;
  background-color: #333;
  border-radius: 21px;
  -webkit-transform: rotate(30deg);
  transform: rotate(30deg);
}

.product-device::before {
  position: absolute;
  top: 10%;
  right: 10px;
  bottom: 10%;
  left: 10px;
  content: "";
  background-color: rgba(255, 255, 255, .1);
  border-radius: 5px;
}

.product-device-2 {
  top: -25%;
  right: auto;
  bottom: 0;
  left: 5%;
  background-color: #e5e5e5;
}


/*
 * Extra utilities
 */

.border-top { border-top: 1px solid #e5e5e5; }
.border-bottom { border-bottom: 1px solid #e5e5e5; }

.box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }

.flex-equal > * {
  -ms-flex: 1;
  -webkit-box-flex: 1;
  flex: 1;
}
@media (min-width: 768px) {
  .flex-md-equal > * {
    -ms-flex: 1;
    -webkit-box-flex: 1;
    flex: 1;
  }
}

.overflow-hidden { overflow: hidden; }
</style>