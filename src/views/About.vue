<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'about',

  methods: {
    ...mapActions(['setAccessToken'])
  },

  computed: {
    ...mapGetters(['accessToken'])
  },

  created() {
    const route = this.$route;
    const accessToken = route.hash.substr('#access_token='.length);
    this.setAccessToken(accessToken);
    debugger;
    console.log(this.accessToken);
  }
}
</script>
