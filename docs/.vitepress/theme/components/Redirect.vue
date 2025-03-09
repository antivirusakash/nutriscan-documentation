<script setup>
import { onMounted } from 'vue'

const props = defineProps({
  to: {
    type: String,
    required: true
  }
})

onMounted(() => {
  window.location.href = props.to
})
</script>

<template>
  <div class="redirect-message">
    <h1>Redirecting...</h1>
    <p>If you are not redirected automatically, <a :href="to">click here</a>.</p>
  </div>
</template>

<style scoped>
.redirect-message {
  padding: 2rem;
  text-align: center;
}
</style> 