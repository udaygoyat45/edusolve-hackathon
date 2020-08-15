import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logged: false,
    email: null,
    password: null,
    remember: false,
    failCode: null,
  },
  mutations: {
    updateEmail(state, email) {
      state.email = email;
    },
    updatePassword(state, password) {
      state.password = password;
    },
    updateRemember(state, remember) {
      state.remember = remember;
    }
  },
  actions: {
    authenticate(context) {
      console.log(context.state.email, context.state.password);
      firebase.auth().signInWithEmailAndPassword(context.state.email, context.state.password).then(() => {
        context.state.failCode =  null;
        context.state.logged = true; 
      }).catch(err => {
        console.log(err.code);
        context.state.failCode = err.code;
      });
    },
    logout(context) {
      firebase.auth().signOut();
      context.state.logged = false;
    },
    register(context) {
        firebase.auth().createUserWithEmailAndPassword(context.state.email, context.state.password)
        .then(
          () => {
            context.state.failCode = null;
          }
        ) 
        .catch(
          error => {
            context.state.failCode = error.code;
          }
        ); 
    }
  },
  getters: {
    get_logged: state => {
      return state.logged;
    } 
  },
  modules: {
  }
})
