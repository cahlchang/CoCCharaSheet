<template>
  <v-app dark>
    <h1>
      {{ title }}
    </h1>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'

export default Vue.extend({
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  computed: {
    title(): string {
      return this.error.statusCode === 404 ? '404 Not Found' : 'An error occurred'
    },
  },
  head(): MetaInfo {
    return {
      title: this.title,
    }
  },
})
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
