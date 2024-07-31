<script setup>
import { ref, onBeforeMount, onMounted, } from 'vue';

const users = ref([]);

const fetchPost = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  users.value = await res.json();
};
fetchPost();

</script>

<template>
  <!-- <div>
    <div>
        <slot name="title"></slot>
    </div>
    <div>
        <slot></slot>
    </div>
    <div>
        <slot name="actions"></slot>
    </div>
  </div> -->
  <!-- <div>
    <slot name="header" message="ヘッダー"></slot>
    <slot message="ユーザ" content="コンテント"></slot>
  </div> -->
  <div>
    <slot v-for="user in users" :user="user"></slot>
  </div>
</template>
