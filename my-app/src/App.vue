<template>
  <div id="app">
    <p>{{ message }}</p>
    <!-- <router /> -->
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/product">상품정보</router-link>
    </nav>
    <router-view />
    <!-- <HelloWorld />
    <EditForm1 />
    <EditForm2 /> -->
  </div>
</template>

<script>
// import EditForm1 from "@/components/EditForm-1.vue";
// import EditForm2 from "@/components/EditForm-2.vue";
// import HelloWorld from "@/components/HelloWorld.vue";
import store from "./store";
export default {
  name: "app",
  // components: { EditForm1, EditForm2, HelloWorld },
  computed: {
    // 로컬 message와 스토어의 message 동기화
    message: () => store.getters.message
    // message: () => store.getter.message
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
