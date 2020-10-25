<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
@font-face {
  font-family: 'Roboto';
  src: url('./assets/Roboto-Regular.ttf') format('ttf');
}

@font-face {
  font-family: 'Roboto';
  src: url('./assets/Roboto-Bold.ttf') format('ttf');
  font-weight: bold;
}

#app {
  font-family: 'Roboto', sans-serif;
  max-width: 900px;
  margin: auto;
  display: flex;
  justify-content: center;
  padding: 20px;
}

.common-link {
  color: #e01304;
}
</style>