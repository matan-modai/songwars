<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <template v-if="isLoggedOut">
      <a :href="accessUrl">Log in</a>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'HelloWorld',

  data() {
    return {
      isLoggedOut: true
    }
  },

  props: {
    msg: String
  },

  computed: {
    ...mapGetters(['clientId', 'redirectUri']),

    accessUrl() {
      return `https://accounts.spotify.com/authorize?client_id=${this.clientId}&redirect_uri=${this.redirectUri}&scope=user-read-currently-playing%20user-read-playback-state%20user-modify-playback-state%20playlist-read-collaborative&response_type=token`;
    }
  },

  created() {
    console.log(this.clientId);

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
