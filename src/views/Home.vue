<template>
  <div class="container">
    <iframe
      src="https://player.vimeo.com/video/559058818"
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
    ></iframe>
    <p>
      <a href="https://vimeo.com/559058818"
        >Values in Business: an introduction by Neil Hawkes</a
      >
      from <a href="https://vimeo.com/user33823728">Nigel Cohen</a> on
      <a href="https://vimeo.com">Vimeo</a>.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'home',
  components: {
    // appHeader,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  iframe {
    width: 100vw;
    height: 500px;
  }
}
</style>
