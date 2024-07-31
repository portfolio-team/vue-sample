<script setup lang="ts">
import { ref } from 'vue'
// import '@/assets/css/style.css';

definePageMeta({
  layout: false,
});

const { data } = useFetch('/api/hello');

const show = ref(false);

const handleClick = () => {
  show.value = true;
};

</script>

<template>
  <div>
    <h2>{{ data }}</h2>
    <NuxtLayout name="default">
      <template #header>ヘッダー</template>
      <h1>トップページ</h1>
      <img src="~/assets/img/nuxt.png" alt="Discover Nuxt 3" />
      <img src="~/assets/img/icon-green.png" alt="Nuxt3 Icon" />
      <hr />
      <button @click="handleClick">Coupon Get</button>
      <LazyCoupon v-if="show" />
    </NuxtLayout>
  </div>
</template>

<style scoped>
@import '@/assets/css/style.css';
</style>