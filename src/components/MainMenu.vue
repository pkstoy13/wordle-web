<script setup lang="ts"></script>

<template>
  <div class="outer">
    <div class="inner">
      <h1>Wordle Together</h1>
      <RouterLink to="/play">PLAY</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.outer {
  background-color: var(--background-color);
  color: var(--text-color);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}

.inner {
  background-color: var(--primary-color);
  color: var(--text-color);
  width: 85vw;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-style: outset;
  border-width: 1rem;
  border-color: var(--secondary-color);
}
</style>
