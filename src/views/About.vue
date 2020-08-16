<template>
  <div class="about">
  <div style="margin-bottom: 400px;" class="cover-container d-flex h-100 p-3 mx-auto mt-5 flex-column">
      <main role="main" class="inner cover">
        <h1 class="cover-heading">About Us</h1>
        <p class="lead">Bunjy strives to connect local businesses, freelancers, and consumers in a way that redefines what it means to be a community.</p>
        <p class="lead">
          <a class="btn btn-lg btn-secondary "><router-link to="/" class="text-dark">Learn more</router-link></a>
        </p>
      </main>
  </div>
  </div>
</template>

<style scoped>
a,
a:focus,
a:hover {
  color: #fff;
}

.btn-secondary,
.btn-secondary:hover,
.btn-secondary:focus {
  color: #333;
  text-shadow: none; /* Prevent inheritance from `body` */
  background-color: #fff;
  border: .05rem solid #fff;
}

html,
body {
  height: 100%;
  background-color: #333;
}

body {
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-pack: center;
  -webkit-box-pack: center;
  justify-content: center;
  color: #fff;
  text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);
}

.cover-container {
  max-width: 42em;
}

.masthead {
  margin-bottom: 2rem;
}

.masthead-brand {
  margin-bottom: 0;
}

.nav-masthead .nav-link {
  padding: .25rem 0;
  font-weight: 700;
  color: rgba(255, 255, 255, .5);
  background-color: transparent;
  border-bottom: .25rem solid transparent;
}

.nav-masthead .nav-link:hover,
.nav-masthead .nav-link:focus {
  border-bottom-color: rgba(255, 255, 255, .25);
}

.nav-masthead .nav-link + .nav-link {
  margin-left: 1rem;
}

.nav-masthead .active {
  color: #fff;
  border-bottom-color: #fff;
}

@media (min-width: 48em) {
  .masthead-brand {
    float: left;
  }
  .nav-masthead {
    float: right;
  }
}

.cover {
  padding: 0 1.5rem;
}
.cover .btn-lg {
  padding: .75rem 1.25rem;
  font-weight: 700;
}

.mastfoot {
  color: rgba(255, 255, 255, .5);
}
</style>