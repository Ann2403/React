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
      <router-link
        active-class="disabled"
        tag="button"
        class="btn btn-dark navbar-right"
        :to="{ name: 'Form' }"
      >
        Checkout {{ cartItemCount }}
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "my-header",
  data() {
    return {
      sitename: "IceCreamShop",
    };
  },
  props: ["cartItemCount"],
  methods: {
    showCheckout() {
      this.$router.push({ name: "Form" });
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
/*.router-link-exact-active {
  color: blue;
}*/
</style>