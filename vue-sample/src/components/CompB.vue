<script setup>
import { inject } from 'vue';
import { useStoreCounter } from '../store/countStore';
import { storeToRefs } from 'pinia';
const counter = useStoreCounter();
const { count, doubleCount } = storeToRefs(counter);
const { addCount } = counter;

// counter.$subscribe((mutation, state) => {
//   console.log('mutation:', mutation);
//   console.log('state:', JSON.stringify(state));
// });

const unsubscribe = counter.$onAction(
  ({
    name, // name of the action
    store, // store instance, same as `someStore`
    args, // array of parameters passed to the action
    after, // hook after the action returns or resolves
    onError, // hook if the action throws or rejects
  }) => {
    // a shared variable for this specific action call
    const startTime = Date.now();
    // this will trigger before an action on `store` is executed
    console.log(`Start "${name}" with params [${args.join(', ')}].`);

    // this will trigger if the action succeeds and after it has fully run.
    // it waits for any returned promised
    after((result) => {
      console.log(
        `Finished "${name}" after ${
          Date.now() - startTime
        }ms.\nResult: ${result}.`
      );
    });

    // this will trigger if the action throws or returns a promise that rejects
    onError((error) => {
      console.warn(
        `Failed "${name}" after ${Date.now() - startTime}ms.\nError: ${error}.`
      );
    });
  }
);


const { message } = defineProps(['message']);

// const { count, addCount } = inject('count');
</script>

<template>
  <h3>CompBコンポーネント</h3>
  <p>{{message}}</p>
  <p>{{count}}</p>
  <p>✖️2: {{doubleCount}}</p>
  <button @click="counter.$reset">Reset</button>
  <button @click="addCount">addCount</button>
</template>