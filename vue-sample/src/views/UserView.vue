<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRoute, onBeforeRouteUpdate } from 'vue-router';

const props = defineProps({
  first_name: String,
  last_name: String,
  userId: String,
});

const route = useRoute();
const user = ref([]);

const fetchUser = async (userId) => {
    // const id = parseInt(route.params.userId);
    const id = parseInt(userId);
    console.log(id)
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const data = await response.json();
    user.value = data;
};

onMounted(() => {
    fetchUser();
    // watch(props, () => {
    //     fetchUser();
    // });
});

onBeforeRouteUpdate(async (to, from) => {
  console.log('onBeforeRouteUpdate');
  fetchUser(to.params.userId);
});

</script>

<template>
    <h2>User詳細</h2>
        <!-- <RouterLink to="/users">戻る</RouterLink> -->
        <button @click="$router.push({ name: 'users' })">戻る</button>
        <RouterLink :to="'/users/' + user.id + '/profile'">Profile</RouterLink>
    <ul>
        <li>User Id: {{ user.id }}</li>
        <li>User Name: {{ user.name }}</li>
        <li>User Email: {{ user.email }}</li>
    </ul>
    <RouterView />
</template>