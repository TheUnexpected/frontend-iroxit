<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/columns">User Columns</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
nav {
  padding: 1em;
  background-color: #f8f9fa;
}
nav a {
  margin: 0 1em;
  text-decoration: none;
  color: #007bff;
}
nav a.router-link-exact-active {
  font-weight: bold;
  color: #0056b3;
}
</style>
