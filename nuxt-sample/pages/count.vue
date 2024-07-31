<script setup lang="ts">
const { counter, updateCounter, decCounter } = useCounter(100);
// const { $hello } = useNuxtApp();
const nuxtApp = useNuxtApp();

const title = ref('countページ');
useHead({
    title,
});

</script>
<template>
  <h2>{{ nuxtApp.$hello('LLLL') }}</h2>
  <div>
    Counter: {{ counter }}
    <button @click="updateCounter(2)">+</button>
    <button @click="decCounter(1)">-</button>
    <button @click="counter--">-</button>
  </div>
</template>