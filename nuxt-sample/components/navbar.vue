<template>
  <nav>
    <NuxtLink to="/">HOME</NuxtLink>
    <br />
    <NuxtLink to="/price">料金ページへ</NuxtLink>
    <br />
    <NuxtLink to="/count">countUp</NuxtLink>
    <br />
    <NuxtLink :to="{ name: 'users-list' }">User List</NuxtLink>
    <br />
    <NuxtLink to="https://www.google.co.jp/">Google</NuxtLink>
  </nav>
</template>