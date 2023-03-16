<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h2>{{ msg }}</h2>
  <div class="card">
    <p>
      Seed Phrase Import
    </p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
