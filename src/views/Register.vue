<template>
    <div>
        <form class="form-signin">
        <img class="mb-4" src="../assets/cool.png" alt="" width="72" height="72">
        <h1 class="h3 mb-3 font-weight-normal">Please Sign Up</h1>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" v-model="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" v-model="password" id="inputPassword" class="form-control" placeholder="Password" required="">
        <button class="btn btn-lg btn-primary btn-block" v-on:click="register" type="button">Sign in</button>
        <p class="mt-3 mb-1 text-muted">Register</p>
        <p class="mt-1 mb-3 text-muted">© 2020-2021</p>
        </form>
        <p>{{email}}, {{password}}</p>
    </div>

</template>

<script>
export default {
    name: "Register",
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
        }
    },
    methods: {
        register: function () {
            this.$store.dispatch('register').then(() => {
                if (this.$store.state.failCode == null) {
                    this.$router.push('/');
                } else {
                    console.log(this.$store.state.failCode);
                }
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