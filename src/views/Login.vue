<template>
    <div>
    <div>
        <b-modal id="bv-modal" hide-footer>
            <template v-slot:modal-title>
                Login Error
            </template>
            <div class="d-block text-center">
            <p class="lead">{{message}}</p>
            </div>
            <b-button class="mt-3" block @click="$bvModal.hide('bv-modal')">Close Me</b-button>
        </b-modal>
    </div>


    <div>
        <form class="form-signin">
        <img class="mb-4" src="../assets/cool.svg" alt="" width="72" height="72">
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" v-model="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" v-model="password" id="inputPassword" class="form-control" placeholder="Password" required="">
        <div class="checkbox mb-3">
            <label>
            <input type="checkbox" v-model="remember" value="remember-me"> Remember me
            </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" v-on:click="login" type="button">Sign in</button>
        <p class="mt-3 mb-1 text-muted">Register</p>
        <p class="mt-1 mb-3 text-muted">© 2020-2021</p>
        </form>
        <p>{{email}}, {{password}}, {{remember}}</p>
    </div>
    </div>
</template>

<script>
export default {
    name: "login",
    data() {
        return {
           message: "" 
        }
    }, computed: {
        email: {
            get () {
                return this.$store.state.email;
            },
            set(value) {
                this.$store.commit('updateEmail', value);
            }
        },
        password: {
            get () {
                return this.$store.state.password;
            },
            set(value) {
                this.$store.commit('updatePassword', value);
            }
        },
        remember: {
            get () {
                return this.$store.state.remember;
            },
            set(value) {
                this.$store.commit('updateRemember', value);
            }
        },
    }, methods: {
        login: function () {
            return this.$store.dispatch('authenticate').then(() => {
                let c_code = this.$store.state.code;
                if (c_code == null) {
                    this.$router.push("/");
                }
                else if (c_code == "auth/invalid-email") {
                    this.message = "Your email is invalid, please type in a valid email";
                } else if (c_code == "auth/wrong-password") {
                    this.message= "Your email and password don't match";
                } else if (c_code === "auth/user-not-found") {
                    this.message = "No account registered with this email, please register first."
                } else {
                    this.message = "there was an error, please try again later";
                }

                this.$bvModal.show('bv-modal');
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