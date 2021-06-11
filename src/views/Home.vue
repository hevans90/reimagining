<template>
  <div class="container">
    <img alt="Vue logo" src="../assets/logo.svg" />
    <app-header msg="Welcome to Your Vue.js + TypeScript App" />

    <p>This should be orangeeeesss</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import appHeader from '@/components/app-header.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'home',
  components: {
    appHeader,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container {
  display: grid;

  grid-template-rows: 50px auto;

  grid-template-areas:
    'header'
    'body'
    'footer';

  p {
    color: var(--carrot);

    @media screen and (min-width: map-get($breakpoints, 'xxlarge-min')) {
      color: red;
    }
  }
}

app-header {
  grid-area: body;
}
</style>
