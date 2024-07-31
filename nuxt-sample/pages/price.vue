<script setup lang="ts">
import { useRoute } from "vue-router";
import type { User } from '../models'

const route = useRoute();

definePageMeta({
  //   layout: false,
  middleware: 'auth',
});

const enableCustomLayout = () => {
  route.meta.layout = 'custom';
};

</script>

<template>
  <div>
    <!-- <NuxtLayout name="custom"> -->
      <h1>料金ページ</h1>
      <hr />
      <NuxtLink to="/">トップページへ</NuxtLink>
      <div>
        <button @click="enableCustomLayout">Update layout</button>
      </div>
    <!-- </NuxtLayout> -->
  </div>
</template>