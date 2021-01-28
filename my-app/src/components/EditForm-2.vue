<template>
  <div class="edit-form">
    <input type="text" :value="message" @input="doUpdate" />
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "EditForm",
  computed: {
    message: () => store.getters.message
  },
  methods: {
    doUpdate(event) {
      // input 값을 기반으로 디스패치
      store.dispatch("doUpdate", event.target.value);
    }
  }
};
</script>
<style></style>
