<template>
  <header>
    <div class="navbar navbar-light" style="background-color: rgb(240 245 124)">
      <div class="navbar-header">
        <h1>
          <router-link :to="{ name: 'iMain' }">
            {{ sitename }}
          </router-link>
        </h1>
      </div>
      <div class="nav justify-content-end">
        <router-link
          active-class="disabled"
          tag="button"
          class="btn btn-dark mx-2"
          :to="{ name: 'Form' }"
        >
          Checkout {{ cartItemCount }}
        </router-link>
        <div v-if='!mySession'>
          <button type="button" class="btn btn-dark" v-on:click='signIn'>Sign In</button>
        </div>
        <div v-else>
          <button type="button" class="btn btn-dark navbar-right" v-on:click='signOut'>
            <img :src="mySession.photoURL" class="photo">
            Sign Out
          </button>
        </div>
      </div>
      
    </div>
  </header>
</template>

<script>
import firebase from 'firebase';
export default {
  name: "my-header",
  data() {
    return {
      sitename: "IceCreamShop",
    };
  },
  props: ["cartItemCount"],
  beforeCreate() {
    firebase.auth().onAuthStateChanged((user) => {
      this.$store.commit('SET_SESSION', user || false)
    });
  },
  methods: {
    showCheckout() {
      this.$router.push({ name: "Form" });
    },
    signIn() {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result) {
        console.log('sigпed in!');
      }).catch(function(error) {
        coпsole.log('error ' + error);
      });
    },
    signOut() {
      firebase.auth().signOut().then(function() {
        console.log("error in sign out!");
      });
    }
  },
  computed: {
    mySession() {
      return this.$store.getters.session;
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}

.photo {
  width: 15рх;
  height: 15рх;
}

/*.router-link-exact-active {
  color: blue;
}*/
</style>