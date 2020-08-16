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
    title: null,
    code: null,
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
    },
    updateTitle(state, title) {
      state.title = title;
    }, updateCode(state, code) {
      state.code = code;
    }, updateLogged(state, logged) {
      state.logged = logged;
    }, clearFields (state) {
      state.email = null;
      state.password = null;
      state.remember = null;
      state.title = null;
      state.code = null;
    }
  },
  actions: {
    authenticate: context => {
      return firebase.auth().signInWithEmailAndPassword(context.state.email, context.state.password).then(() => {
        context.commit('updateCode', null);
        context.commit('updateLogged', true);
      }).catch(err => {
        context.commit('updateCode', err.code);
      });
    },
    logout(context) {
      return firebase.auth().signOut().then(() => {
        context.commit('updateLogged', false);
      });
    },
    register(context) {
        return firebase.auth().createUserWithEmailAndPassword(context.state.email, context.state.password)
        .then(
          () => {
          context.commit('updateCode', null);
          }
        ) 
        .catch(
          error => {
          context.commit('updateCode', error.code);
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
