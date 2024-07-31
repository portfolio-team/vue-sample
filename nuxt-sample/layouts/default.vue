<script setup lang="ts">

useHead({
  titleTemplate: (title) => {
    return title ? `${title} - Nuxt 3 basic` : 'Nuxt 3 basic';
  },
});

</script>

<template>
  <div>
    <span >
      <img  style="height: 25px" src="/img/icon.png" alt="Nuxt3 Icon" />
    </span>
    <slot name="header" />
    <Navbar />
    <header>Nuxt App</header>
    <!-- 下記slotは、NuxtLayoutコンポーネントの子要素に差し代わる -->
    <slot />
    <NavNavbar />
    <footer>&copy; Sato</footer>
  </div>
</template>

<style>
header {
  background: #000;
  color: #fff;
}
footer {
  background: orange;
  text-align: center;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>