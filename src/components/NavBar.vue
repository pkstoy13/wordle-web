<script setup lang="ts"></script>

<template>
  <div class="bar">
    <div class="bar-content">
      <span>Wordle</span>
      <span>Friends</span>
      <span>About</span>
      <span>Sign-In</span>
    </div>
  </div>
</template>

<style scoped>
.bar {
  background-color: var(--primary-color);
  height: 3rem;
}

.bar-content {
  display: flex;
  gap: 3rem;
  height: 3rem;
  justify-content: end;
  align-items: center;
  margin-right: 1rem;
}

.bar-content span:first-child {
  position: absolute;
  left: 10px;
}
</style>
