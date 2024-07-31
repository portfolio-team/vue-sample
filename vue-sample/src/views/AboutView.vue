<script setup lang="ts">
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

onBeforeRouteLeave((to, from) => {
  const answer = window.confirm(
    'Do you really want to leave? you have unsaved changes!'
  )
  // cancel the navigation and stay on the same page
  if (!answer) return false
});

// const createPaymentIntent = async () => {
//   const { clientSecret, error: backendError } = await fetch("/api/create-payment-intent").then((res) => res.json());
//   return clientSecret;
// };

const _stripe = Stripe('pk_test_51IshQkEALsyzhUMWkeRGcXdEGem7blbLd76XJGTbSQ972N4LlSbRV3PsQxRFpj7hEYXoTrHy2tL3XmGbslURreWP00hnVuyT0D');
console.log('payment Stripe',  Stripe);
console.log('payment _stripe',  _stripe);

fetch("/api/create-payment-intent").then((aa: any) => {
    let secret = 'pi_3PbEVMEALsyzhUMW01vXZfoS_secret_dPJ7ZWLwIrTeKPATtdGi0GSCa';
    console.log('clientSecret',secret);

    const appearance = { /* appearance */ };
    const options = { /* options */ };
    const elements = _stripe.elements({clientSecret: secret});

    const elem = document.getElementById("payment-element");
    console.log('payment-element',elem);

    const paymentElement = elements.create('payment', options);
    paymentElement.mount(elem);
  }
);




</script>


<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div id='payment-element'>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
