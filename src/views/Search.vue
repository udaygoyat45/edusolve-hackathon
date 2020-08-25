<template>
    <!-- Search form -->
    <div>

<form  class="form-inline d-flex justify-content-center md-form form-sm active-cyan-2 mt-2 p-4">
  <input style="height: 50px; fontSize: 20px" v-model="search" v-on:key.enter="submit" class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search"
    aria-label="Search">
  <i class="fas fa-search" aria-hidden="true"></i>
</form>


    <div class="container p-4">

        <p class="text-muted text-center">NOTE: The data is static because the person who was responsible for database for the business profiles deleted his database after the hackathon was over. The code was previously dynamic, please check the source code to see the dynamic code, which is commented out. </p>
    <!-- <div v-for="result in results" v-bind:key="result">
       <h1 class="">{{result.type}}: {{result.title}}</h1>
    <p class="lead">{{result.description}}</p>
    <p class="lead">{{result.contact}}</p>
    <small id="emailHelp" class="form-text text-muted">Click on the title for more information regarding pricing and time of completion</small>
       </div> -->

  <div class="jumbotron">
      <h1 class="">Freelance: Rent Consultancy</h1>
    <p class="lead">I have been a lawyer for rent related issues for 10 years. I have since retired and offer advice on rent especially in tough conditions due to COVID-19. </p>
    <small id="emailHelp" class="form-text text-muted">Click on the title for more information regarding pricing and time of completion</small>
  </div>
   
  <div class="jumbotron">
      <h1 class="">Local Law Firm: Rent Consultant Group LLC</h1>
    <p class="lead">Hello, this is Tom Chen. I have been helping people with rent related issues for 5 years. Our local firm has been able to resolve 90% of clients' cases.</p>
    <small id="emailHelp" class="form-text text-muted">Click on the title for more information regarding pricing and time of completion</small>
  </div>

  <div class="jumbotron">
      <h1 class="">Freelance: Law Ofice of Laureen Cameroon</h1>
    <p class="lead">Hello, I am offering services on a discount rate. I no longer fight cases from y clients, rather offer advice on how to avoid tough situations regarding housing finances. I am offering lessons and lectures on the fundamentals of housing and real estates on a discounted price. </p>
    <small id="emailHelp" class="form-text text-muted">Click on the title for more information regarding pricing and time of completion</small>
  </div>
  </div> 
</div>
</template>

<script>
// import firebase from 'firebase'
export default {
  name: "search",
    data() {
      return {
        search: null,
        results: [],
      }
    },
    methods: {
      // submit: function() {
      //   let words = search.split(" ");
      //   for (word of words) {
      //     firebase.firestore().collection("services").get().then((snapShot) => {
      //       snapShot.docs.forEach(docs => {
      //         if (docs.data().title.split(" ").includes(word))
      //           results.push(docs.data());
      //       }) 
      //     })
      //   }
      // }
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