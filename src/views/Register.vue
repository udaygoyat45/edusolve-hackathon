<template>
    <div>
        <div>
            <b-modal id="bv-modal" hide-footer>
            <template v-slot:modal-title>
            Registration Error
            </template>
            <div class="d-block text-center">
            <p class="lead">{{message}}</p>
            </div>
            <b-button class="mt-3" block @click="$bvModal.hide('bv-modal')">Close Me</b-button>
            </b-modal>
        </div>
        <form class="form-signin">
        <img class="mb-4" src="../assets/cool.svg" alt="" width="72" height="72">
        <h1 class="h3 mb-3 font-weight-normal">Please Sign Up</h1>
        
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" v-model="email" id="inputEmail" class="form-control mb-2" placeholder="Email address" required="" autofocus="">
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" v-model="password" id="inputPassword" class="form-control" placeholder="Password" required="">
        <label for="jobSelect" class="sr-only">Title</label>
        <select id="jobSelect" class="form-control mb-4" v-model="title">
        <option disabled value="">Your title</option>
        <option>Freelancer</option>
        <option>Business Owner</option>
        <option>Customer</option>
        </select>
        <button class="btn btn-lg btn-primary btn-block" v-on:click="register" type="button">Sign Up</button>
        <p class="mt-3 mb-1 text-muted"><router-link to="/login">Login</router-link></p>
        <p class="mt-1 mb-3 text-muted">© 2020-2021</p>
        </form>
        <p>{{email}}, {{password}}</p>
    </div>

</template>

<script>
// import firebase from 'firebase'

export default {
    name: "Register",
    data() {
        return {
            message: "",
        }
    },
    computed: {
        email: {
            get () {
                return this.$store.state.email;
            },
            set(value) {
                this.$store.commit('updateEmail', value);
            }
        },
        password: {
            get() {
                return this.$store.state.password;
            },
            set(value) {
                this.$store.commit('updatePassword', value);
            },
        },
        title: {
            get() {
                return this.$store.state.title;
            },
            set(value) {
                this.$store.commit('updateTitle', value);
            }
        }
    },
    methods: {
        initializeUser: function () {
        },
        register: function () {

            if (this.$store.state.title == null || this.$store.state.email == null || this.$store.state.password == null || this.$store.state.email.length < 1 || this.$store.state.password.length < 1) {
                this.message = "Please fill out all the fields";
                this.$bvModal.show('bv-modal');
                return;
            }

            this.$store.dispatch('register').then(() => {
                let c_code = this.$store.state.code;
                if (c_code == null) {
                    this.$router.push('/');
                } else if (c_code == "auth/invalid-email") {
                    this.message = "Your email is invalid, please try a different email"
                } else if (c_code == "auth/weak-password") {
                    this.message = "Please choose a longer password";
                } else {
                    this.message = "There was an error while registering your account, please come back later";
                }
                this.$bvModal.show('bv-modal');
                this.initializeUser();
            });
        } 
    }
}
</script>

<style scoped>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
    margin-top: 100px;
    margin-bottom: 100px;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>