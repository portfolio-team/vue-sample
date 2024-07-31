<script setup lang="ts">
import { ref, reactive, Ref, computed, useAttrs, watch, watchEffect } from 'vue';
import Input from './Input.vue';

// 通知ボタン
const emit = defineEmits({'changeNameEvent': (name) => {
    console.log(name);
    if (name) return true;
    return false;
  }});
// const sendNotification = () => {
//   emit('notification');
// };s

// カウント・wacther
const count = ref(0);
const state = reactive({
  count: 1,
});

const addRefCount = () => {
  count.value++;
};

const addReactiveCount = () => {
  state.count++;
};

watch(count, (count) => {
  console.log('count:', count);
});

watch(() => state.count, (count, previousCount) => {
  console.log('count:', count);
  console.log('previousCount:', previousCount);
});

// watch(
//   () => state,
//   (state, previousState) => {
//     console.log('state:', state);
//     console.log('previousState:', previousState);
//   },
//   { deep: true }
// );

// watch(
//   state,
//   (state, previousState) => {
//     console.log('state:', state);
//     console.log('previousState:', previousState);
//   },
//   { immediate: true }
// );

// watchEffect(() => console.log(count.value));
watchEffect(() => console.log(`${count.value}/${state.count}`));

// computedセッター・wacther
const user = reactive({
  firstName: 'John',
  lastName: 'Doe',
});

const myName = computed({
  get() {
    return `${user.firstName} ${user.lastName}`;
  },
  set(newValue) {
    const names = newValue.split(' ');
    user.firstName = names[0];
    user.lastName = names[names.length - 1];
  },
});

const changeMyName = () => {
  myName.value = 'HAAAi Doe';
};

watch(myName, (myName) => {
  console.log('myName:', myName);
});


// defineProps・Ref・Inputの検証
interface PersonObject {
  name: string;
}
const { person, message, price, isAdmin } = defineProps({
  message: {
    type: String,
    required: true,
  },
  person: {
    type: Object as () => PersonObject,
    required: true,
  },
  price: Number,
  isAdmin: Boolean,
});

const personObj: Ref<PersonObject> = computed(() => ({ ...person }));

const changeName = (event) => {
  emit('changeNameEvent', personObj.value.name)
};

// attrsの受け取り
const attrs = useAttrs();

</script>


<script lang="ts">
// attrsの受け取りについての設定
export default {
  inheritAttrs: false,
};
</script>


<template>
  <div>
    <h2>初めてのコンポーネント</h2>
    <p>{{ personObj.name }} {{ message }}</p>
    <p>{{ price + 100 }}</p>

    <p>{{ myName }}</p>


    <p :style="attrs.style" v-if="isAdmin">管理者です。</p>
    <p :style="attrs.style" v-else>管理者ではありません。</p>

    <!-- 3パターン -->
    <!-- <input type="text" v-model="personObj.name" @input="changeName" /> -->
    <!-- <input
      type="text"
      :value="personObj.name"
      @input="$emit('changeNameEvent', $event.target.value)"
    /> -->
    <Input
      :value="personObj.name"
      @input="$emit('changeNameEvent', $event.target.value)"
      :model-value="personObj.name"
      @update:model-value="personObj.name = $event"
    />

    <button @click="sendNotification">通知</button>
    <button @click="changeName">名前変更</button>

    <button @click="changeMyName">changeMyName</button>

    <p>Ref Count:{{ count }}</p>
    <p>Reactive Count:{{ state.count }}</p>
    <div>
      <button :class="attrs.class" @click="addRefCount">Ref Count+</button>
      <button @click="addReactiveCount">Reactive Count+</button>
    </div>
  </div>
</template>


