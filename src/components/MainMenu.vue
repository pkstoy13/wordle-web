<script setup lang="ts"></script>

<template>
  <div class="outer">
    <div class="inner">
      <h1>
        <span style="--i: 0">W</span>
        <span style="--i: 1">O</span>
        <span style="--i: 2">R</span>
        <span style="--i: 3">D</span>
        <span style="--i: 4">L</span>
        <span style="--i: 5">E</span>
        <span style="--i: 6">_</span>
        <span style="--i: 7">T</span>
        <span style="--i: 8">O</span>
        <span style="--i: 9">G</span>
        <span style="--i: 10">E</span>
        <span style="--i: 11">T</span>
        <span style="--i: 12">H</span>
        <span style="--i: 13">E</span>
        <span style="--i: 14">R</span>
      </h1>
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

.bounce {
  animation: bounce 0.6s infinite ease-in-out;
}
</style>
