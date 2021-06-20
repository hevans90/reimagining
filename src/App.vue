<template>
  <div id="nav">
    <img class="logo" alt="logo" src="./assets/logo.svg" />
    <div class="link-menu">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
  <router-view />
</template>

<style lang="scss">
#nav {
  padding: 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  user-select: none;

  img.logo {
    height: 50px;

    @media screen and (min-width: map-get($breakpoints, 'medium-max')) {
      height: 75px;
    }
  }

  a {
    font-weight: bold;
    color: var(--primary);
    text-decoration: underline;

    &.router-link-exact-active {
      color: var(--shade-5);
      text-decoration: unset;
      pointer-events: none;
    }
  }
}
</style>
