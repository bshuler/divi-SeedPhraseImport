<script setup lang="ts">
import { ref, computed } from 'vue';

defineProps<{ msg: string }>();

const seedPhrase = ref('');

const reverseSeedPhrase = computed(() => {
  return seedPhrase.reverse();
});
</script>

<template>
  <h2>{{ msg }}</h2>
  <div class="card">
    <p>Seed Phrase Import</p>
    <p>Seed Phrase: <input v-model="seedPhrase" /></p>
    <p><button @click="decodeSeedPhrase">Decode Seed Phrase</button></p>
    <p>Decoded Seed Phrase</p>
    <p>{{ seedPhrase }}</p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
