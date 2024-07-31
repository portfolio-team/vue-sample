<script setup lang="ts">
import { useRoute } from "vue-router";
import type { User } from '../models'

const title = ref('userslistページ');
const description = ref('userslistページ');
useHead({
    title,
    meta: [
        {
        name: 'description',
        content: description,
        },
    ],
});

const route = useRoute();
const { data: users, error, refresh, pending } = await useLazyFetch<User[]>("https://jsonplaceholder.typicode.com/users");
console.log('error', error.value);
if (!users.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' });
}


const { data: _posts, _error } = await useLazyAsyncData('posts', () =>
    {
        console.log('fetch'); //追加の処理
        return $fetch('https://jsonplaceholder.typicode.com/posts/');
    }
);

const inc = () => {
  throw createError('エラー発生');
};
</script>

<template>
    <h1>User Listページ</h1>
    <p v-if="error">{{ error }}</p>
    <p v-if="pending">Loading...</p>
    <button @click="inc()">再取得</button>
    <ul>
        <li v-for="user in users" :key="user.id">
            <NuxtLink :to="'/users/' + user.id">
                {{ user.id }} : {{ user.name }}
            </NuxtLink>
        </li>
    </ul>
    <ul>
      <li v-for="post in _posts" :key="post.id">{{ post.title }}</li>
    </ul>

</template>