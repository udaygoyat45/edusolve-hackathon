<template>
    <div>

        <div class="container">
        <p class="text-muted text-center p-4">NOTE: The data is static because the person who was responsible for database for the business profiles deleted his database after the hackathon was over. The code was previously dynamic, please check the source code to see the dynamic code, which is commented out. This is what the page is supposed to look like. </p>
        </div>
        <div>
            <b-form class="mx-auto col-3 p-3">
            <b-form-group
                id="input-group-1"
                label="Your City"
                label-for="input-1"
            >
                <b-form-input
                id="input-1"
                v-model="current_city"
                type="email"
                required
                placeholder="Enter City"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Your State" label-for="input-2">
                <b-form-input
                id="input-2"
                v-model="current_state"
                required
                placeholder="Enter State"
                ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Update</b-button>
            </b-form>
        </div>

        <div class="text-center display-4">Your Services</div>
        <div class="container">
            
       <div class="p-3">
  <b-card-group deck>
    <b-card title="Massage Therapy: $45" img-src="https://images.unsplash.com/photo-1515377905703-c4788e51af15" img-alt="Image" img-top>
      <b-card-text>Requires two partners. Follow the instructions via a zoom call.</b-card-text>
      <template v-slot:footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>

 <b-card title="Online Massage Lesson: $60" img-src="https://images.unsplash.com/photo-1556760544-74068565f05c" img-alt="Image" img-top>
      <b-card-text>Learn the fundamentals of massaging and different hand techniques. Focus on thai massage.</b-card-text>
      <template v-slot:footer>
        <small class="text-muted">Last updated 5 mins ago</small>
      </template>
    </b-card>

 <b-card title="Introduction to Acupuncture: $45" img-src="https://images.unsplash.com/photo-1489659639091-8b687bc4386e" img-alt="Image" img-top>
      <b-card-text>The introduction to the art of Acupuncture. more focus on the technical aspects of acupuncture.</b-card-text>
      <template v-slot:footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>

  </b-card-group>
  <img class="mx-auto" style="text-align: center; display: block; cursor: pointer" v-on:click="add" width="90px" src="../assets/plus.png">
</div>     
        </div> 
    </div> 
</template>

<script>
import firebase from 'firebase'

export default {
   name: "profile",
   data() {
       return {
           current_email: null,
           current_city: "Sarasota",
           current_state: "Florida",
           current_services: null,
           new_service: null,
           current_doc: null,
       }
   },
    methods: {
        add: function () {
            this.current_services.push(Object);
        },
        retrieveData: function () {
            let current_data; 

            console.log(this.$store.state.email);
            firebase.firestore().collection('users').get().then((snapshot) => {
                snapshot.docs.forEach(doc => {
                console.log(doc.data());
                    if (doc.data() != undefined && doc.data().email == this.$store.state.email) {
                        current_data = doc.data();
                        this.current_doc = snapshot;
                    }
                })
            }).finally(() => {
                // console.log('final')
                console.log(current_data);
                this.current_email = current_data.email;
                this.current_city = current_data.city;
                this.current_state = current_data.state;
                this.current_services = current_data.services;
            });
        }
    },
    created: function () {
        this.retrieveData();
    },
    destroyed: function () {
        firebase.firestore().collection('users').doc(this.current_doc).update({
            services: this.current_services,
            state: this.current_state,
            city: this.current_city
        });
    }
}
</script>

<style scoped>

</style>