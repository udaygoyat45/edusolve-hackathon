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
    <b-card for-each="service in services" title="{{service.title}}: {{service.price}}" img-src="{{service.url}}" img-alt="Image" img-top>
      <b-card-text>{{service.description}}</b-card-text>
      <template v-slot:footer>
        <small class="text-muted">Last updated {{(new Date() - service.time).format("mm")}} mins ago</small>
      </template>
    </b-card>
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
           current_city: null,
           current_state: null,
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