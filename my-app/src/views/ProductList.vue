<template>
  <div class="productList">
    <h1>상품 정보</h1>
    <ul>
      <li v-for="{ id, name } in list" :key="id">
        <router-link :to="`/product/${ id }`">{{ name }}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import products from "@/api/products.js";
export default {
  computed: {
    list: () => products.fetch()
  }
}

</script>
<style></style>