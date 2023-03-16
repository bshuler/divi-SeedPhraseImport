<script setup lang="ts">
import { ref, computed } from 'vue';
import * as bitcoin from 'bitcoinjs-lib';
import * as bip39 from 'bip39';

defineProps<{ msg: string }>();

const seedPhrase = ref('');

const decodeSeedPhrase = computed(() => {
  if (bip39.validateMnemonic(seedPhrase.value)) {
    return bip39.mnemonicToSeedSync(seedPhrase.value).toString('hex');
  } else {
    return (
      'Not a BIP39 valid seed phrase. Need a valid seed phrase for testing? Try: ' +
      bip39.generateMnemonic(256)
    );
  }
});
</script>

<template>
  <h2>{{ msg }}</h2>
  <div class="card">
    <p>Seed Phrase Import</p>
    <p>Seed Phrase: <input v-model="seedPhrase" /></p>
    <p>Decode Seed Phrase</p>
    <p>{{ decodeSeedPhrase }}</p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
