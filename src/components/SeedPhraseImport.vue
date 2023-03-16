<script setup lang="ts">
import { ref, reactive } from 'vue';

defineProps<{ msg: string }>();

const count = ref(0);
const seedPhrase = ref('');
</script>

<template>
  <h2>{{ msg }}</h2>
  <div class="card">
    <p>Seed Phrase Import</p>
    <p>Seed Phrase: <input v-model="seedPhrase" /></p>
    <p><button @click="decodeSeedPhrase">Decode Seed Phrase</button></p>
    <p>Decoded Seed Phrase</p>
    <p>{{ reverseSeedPhrase() }}</p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
