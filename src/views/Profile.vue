<template>
    <div>
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
      <b-card-text>Requires two partners. Follow the instructions via a zoom call. </b-card-text>
      <template v-slot:footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>

    <b-card title="Online Massage Lessons: $60" img-src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874" img-alt="Image" img-top>
      <b-card-text>Learn the fundamentals of massaging and different hand techniques. Focus on thai massage.</b-card-text>
      <template v-slot:footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>

    <b-card title="Introduction to Acupuncture: $100" img-src="https://images.unsplash.com/photo-1489659639091-8b687bc4386e" img-alt="Image" img-top>
      <b-card-text>The introduction to the art of Acupuncture. More focus on the technical aspects of acupuncture.</b-card-text>
      <template v-slot:footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>
  </b-card-group>

  <img class="mx-auto" style="text-align: center; display: block" width="90px" src="../assets/plus.png">
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
           current_city: null,
           current_state: null,
           current_services: null,
           new_service: null
       }
   },
    methods: {
        retrieveData: function () {
            let current_data; 
            console.log(this.$store.state.email);
            firebase.firestore().collection('users').get().then((snapshot) => {
                snapshot.docs.forEach(doc => {
                // console.log("^^^^^")
                console.log(doc.data());
                    if (doc.data() != undefined && doc.data().email == this.$store.state.email) {
                        current_data = doc.data();
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
    }
}
</script>

<style scoped>

</style>