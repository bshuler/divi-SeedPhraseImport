<script setup lang="ts">
import { ref, computed } from 'vue';
import * as bitcoin from 'bitcoinjs-lib';
import * as bip39 from 'bip39';

defineProps<{ msg: string }>();

const seedPhrase = ref('');

const reverseSeedPhrase = computed(() => {
  return seedPhrase.value.split('').reverse().join('');
});

const decodeSeedPhrase = computed(() => {
  if (bip39.validateMnemonic(seedPhrase)) {
    return bip39.mnemonicToSeedSync(seedPhrase).toString('hex');
  } else {
    return (
      'Not a BIP39 valid seed phrase. Need a valid seed phrase for testing? Try: ' +
      bip39.generateMnemonic()
    );
  }
});
</script>

<template>
  <h2>{{ msg }}</h2>
  <div class="card">
    <p>Seed Phrase Import</p>
    <p>Seed Phrase: <input v-model="seedPhrase" /></p>
    <p><button @click="decodeSeedPhrase">Decode Seed Phrase</button></p>
    <p>Reverse Seed Phrase</p>
    <p>{{ reverseSeedPhrase }}</p>
    <p>Decode Seed Phrase</p>
    <p>{{ decodeSeedPhrase }}</p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
