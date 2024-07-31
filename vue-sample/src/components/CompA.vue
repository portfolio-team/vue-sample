<script setup>
import CompB from './CompB.vue';
import { useStoreCounter } from '../store/countStore';

const { message } = defineProps(['message']);
const counter = useStoreCounter();
</script>
<template>
  <h2>CompAコンポーネント</h2>
  <p>Count:{{ counter.count }}</p>
  <CompB :message="message"/>
</template>

