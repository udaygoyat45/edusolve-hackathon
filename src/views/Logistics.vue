<template>
    <div>
<div class="container py-5">
        <h1 class="display-4 text-center">Your Best Performing Services</h1>
        <p class="text-muted text-center">The data is static because the person who was responsible for database for the business profiles said that he doesn't have access to the database anymore. The code was previously dynamic, please check the source code to see the dynamic code, which is commented out. </p>
  <header class="text-center text-white">
  </header>
  <div class="row py-5">
    <div class="col-lg-10 mx-auto">
      <div class="card rounded shadow border-0">
        <div class="card-body p-5 bg-white rounded">
          <div class="table-responsive">
            <table id="example" style="width:100%" class="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Rating</th>
                  <th>Use Count</th>
                </tr>
              </thead>
              <!-- <tbody>
                <tr v-for="data in service_data" v-bind:key="data">
                  <td>{{data.title}}</td>
                  <td>{{data.price}}</td>
                  <td>{{data.rating}}</td>
                  <td>{{data.count}}</td>
                </tr>
              </tbody> -->

              <tbody>
                <tr>
                  <td>Massage Therapy 101</td>
                  <td>$100</td>
                  <td>4.9</td>
                  <td>61</td>
                </tr>

                <tr>
                  <td>Back Massage Lesson</td>
                  <td>$40</td>
                  <td>4.9</td>
                  <td>63</td>
                </tr>

                <tr>
                  <td>Acupuncture Lesson</td>
                  <td>$60</td>
                  <td>4.8</td>
                  <td>66</td>
                </tr>

                <tr>
                  <td>Thai Massage</td>
                  <td>$100</td>
                  <td>4.7</td>
                  <td>22</td>
                </tr>

                <tr>
                  <td>Chinese Massage</td>
                  <td>$90</td>
                  <td>4.7</td>
                  <td>33</td>
                </tr>

                <tr>
                  <td>Indian Massage</td>
                  <td>$80</td>
                  <td>4.6</td>
                  <td>61</td>
                </tr>

                <tr>
                  <td>Oil Massage</td>
                  <td>$10</td>
                  <td>4.6</td>
                  <td>59</td>
                </tr>

                <tr>
                  <td>Acupuncture Basics</td>
                  <td>$30</td>
                  <td>4.5</td>
                  <td>55</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>

    
</template>

<script>
import firebase from 'firebase'

export default {
    data() {
      return {
        service_data: null,
      }
    },
    methods: {
      logistics: function () {
         firebase.firestore().collection('logistics').get().then((snapshot) => {
                snapshot.docs.forEach(doc => {
                console.log(doc.data());
                    if (doc.data() != undefined && doc.data().email == this.$store.state.email) {
                        this.service_data = snapshot;
                    }
                })});
      }
    }
}


</script>

<style scoped>

</style>