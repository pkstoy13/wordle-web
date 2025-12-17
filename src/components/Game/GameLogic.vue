<script setup lang="ts">
import { ref } from 'vue'

const word = ref('')

methods: {
}
</script>

<template>
  <main>
    <input v-model="word" placeholder="type guess here" />
    <p>User guess: {{ word }}</p>
    <button>Submit</button>
  </main>
</template>

<style scoped></style>
