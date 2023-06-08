<template>
  <div>
    <h1>Welcome to the {{ name }}</h1>
    <b-button >B Button</b-button>
    <personal-button text="Personal Button" />
  </div>
</template>

<script setup lang="ts">
const name = "HomePage";
</script>