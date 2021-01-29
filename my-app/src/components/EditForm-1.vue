<template>
  <div class="edit-form">
    <input type="text" v-model="message" />
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "EditForm",
  computed: {
    message: {
      get() {
        return store.getters.message;
      },
      set(value) {
        store.dispatch("doUpdate", value);
      }
    }
  }
};
</script>
<style></style>
