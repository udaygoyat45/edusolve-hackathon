<template>
    <!-- Search form -->
    <div>

<form  class="form-inline d-flex justify-content-center md-form form-sm active-cyan-2 mt-2 p-4">
  <input style="height: 50px; fontSize: 20px" v-model="search" v-on:key.enter="submit" class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search"
    aria-label="Search">
  <i class="fas fa-search" aria-hidden="true"></i>
</form>


    <div class="container p-4">

    <div class="jumbotron ">
  <div class="container">

    <div v-for="result in results" v-bind:key="result">
       <h1 class="">{{result.type}}: {{result.title}}</h1>
    <p class="lead">{{result.description}}</p>
    <p class="lead">{{result.contact}}</p>
    <small id="emailHelp" class="form-text text-muted">Click on the title for more information regarding pricing and time of completion</small>
      </div>
  </div>
   
</div>

    </div>
</div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: "search",
    data() {
      return {
        search: null,
        results: [],
      }
    },
    methods: {
      submit: function() {
        let words = search.split(" ");
        for (word of words) {
          firebase.firestore().collection("services").get().then((snapShot) => {
            snapShot.docs.forEach(docs => {
              if (docs.data().title.split(" ").includes(word))
                results.push(docs.data());
            }) 
          })
        }
      }
    }

    
}
</script>

<style scoped>
active-pink-2 input.form-control[type=text]:focus:not([readonly]) {
  border-bottom: 1px solid #f48fb1;
  box-shadow: 0 1px 0 0 #f48fb1;
}
.active-pink input.form-control[type=text] {
  border-bottom: 1px solid #f48fb1;
  box-shadow: 0 1px 0 0 #f48fb1;
}
.active-purple-2 input.form-control[type=text]:focus:not([readonly]) {
  border-bottom: 1px solid #ce93d8;
  box-shadow: 0 1px 0 0 #ce93d8;
}
.active-purple input.form-control[type=text] {
  border-bottom: 1px solid #ce93d8;
  box-shadow: 0 1px 0 0 #ce93d8;
}
.active-cyan-2 input.form-control[type=text]:focus:not([readonly]) {
  border-bottom: 1px solid #4dd0e1;
  box-shadow: 0 1px 0 0 #4dd0e1;
}
.active-cyan input.form-control[type=text] {
  border-bottom: 1px solid #4dd0e1;
  box-shadow: 0 1px 0 0 #4dd0e1;
}
.active-cyan .fa, .active-cyan-2 .fa {
  color: #4dd0e1;
}
.active-purple .fa, .active-purple-2 .fa {
  color: #ce93d8;
}
.active-pink .fa, .active-pink-2 .fa {
  color: #f48fb1;
}
</style>