<script setup lang="ts">
import { useRoute } from "vue-router";
import type { User } from '../../models'

const route = useRoute();

useHead({
  title: 'Nuxt 3',
  meta: [
    {
      name: 'description',
      content: `User Id: ${route.params.id}`,
    },
  ],
});

// const { data: user, error, pending } = await useFetch<User>("https://jsonplaceholder.typicode.com/users/" + route.params.id );

</script>
<template>
  <div>
    <p v-if="pending">データ読み込み中...</p>
    <p class='hhhhhhhit' v-else-if="error">エラーが発生しました: {{ error?.message }}</p>
    <!-- <h1 v-if="!!user">users/{{ user.id }} : {{ user.name }}</h1> -->
  </div>
</template>