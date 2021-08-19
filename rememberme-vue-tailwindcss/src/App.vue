<template>
<section class="dark:bg-black w-4/12 p-10 mx-auto mt-12 rounded">
  <Header></Header>
  <Main></Main> 
  </section>
</template>

<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';

export default {
  name: 'App',
  components: {
    Header,
    Main
  }
}
</script>

<style>
  
</style>
