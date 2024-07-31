// import { reactive } from 'vue';

// export const counter = reactive({
//   count: 0,
//   addCount() {
//     this.count++;
//   },
// });


import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useStoreCounter = defineStore('counter', {
  state: () => ({
    count: 1,
    count2: 2,
    user: {
      name: 'John Doe',
    },
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    addCount() {
      this.count++;
    },
  },
});

// export const useStoreCounter = defineStore('counter', () => {
//   const count = ref(1);

//   const addCount = () => {
//     count.value++;
//   };

//   const doubleCount = computed(() => count.value * 2);

//   return { count, addCount, doubleCount };
// });