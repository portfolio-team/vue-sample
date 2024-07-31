<script setup>
import axios from 'axios';
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue';
import Hello from './components/Hello.vue';
import Input from './components/Input.vue';
import User from './components/User.vue';
import Tokyo from './components/Tokyo.vue';
import Kyoto from './components/Kyoto.vue';
import CompA from './components/CompA.vue';
import {
  ref,
  computed,
  provide,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted } from 'vue';

onBeforeMount(() => {
  console.log("before mount");
});

onMounted(() => {
  console.log("mounted");
});

onBeforeUpdate(() => {
  console.log("before update");
});

onUpdated(() => {
  console.log("updated");
});

onBeforeUnmount(() => {
  console.log("before unmount")
});

onUnmounted(() => {
  console.log("unmounted")
});

const users = ref([]);
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((data) => (users.value = data));

const name = ref('John Doe');
const address = ref('');

const person = ref({
  name: 'John',
});

const handleEvent = (newName) => {
  person.value['name'] = newName;
  console.log('名前',person.value['name']);
};

const city = ref('tokyo');
const tabs = {
  tokyo: Tokyo,
  kyoto: Kyoto,
};
const tab = computed(() => tabs[city.value]);

const count = ref(0);
const addCount = () => {
  count.value++;
};

provide('count', {
  count,
  addCount,
});

</script>

<template>
  <nav>
    <RouterLink :to="{ name: 'home' }">Home</RouterLink>
    <RouterLink :to="{ name: 'about' }">About</RouterLink>
    <RouterLink :to="{ name: 'users' }">Users</RouterLink>
    <RouterLink :to="{ name: 'user', params: { userId: 1 } }">User1</RouterLink>
    <RouterLink :to="{ name: 'user', params: { userId: 2 } }">User2</RouterLink>
  </nav>

  <nav>
    <button @click="$router.back()">戻る</button>
    <button @click="$router.go(-1)">戻る</button>
    <button @click="$router.go(1)">進む</button>
  </nav>

  <RouterView />

  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>

    <p>
      {{ address }}
    </p>

    <div class="wrapper">
      <h1>Vue 3 入門</h1>
      <Hello @changeNameEvent="handleEvent" class="active" id="main" style="color:red" :person="person" v-bind:price="1000" v-bind:isAdmin="false"/>
    </div>
    <Input :model-value="address" @update:model-value="address = $event" />

  </header>
  <main>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
    <CompA message="propsでデータ渡し" />

    <div>
      <button @click="city = 'tokyo'">東京</button>
      <button @click="city = 'kyoto'">京都</button>
    </div>
    <keep-alive><component v-bind:is="tab"></component></keep-alive>

    <User>
      <!-- <template #header="{ message }">
        <div>{{ message }}</div>
      </template>
      <template #default="{ message, content }">
        <div>{{ message }}/{{ content }}</div>
      </template> -->
      <!-- <template v-slot:default="{ user }">
        <li>{{ user.name }}</li>
      </template> -->
      <template v-slot="{ user }">
        <li>{{ user.name }}</li>
      </template>
    </User>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.router-link-active {
  font-weight: bold;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
