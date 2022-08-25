<template lang="pug">
v-card.designer-card
  v-row.justify-center
    v-col
      v-img.ma-2(
        :src='designer.avatar'
        v-if='this.display === md' width="500px" height="200px"
      )
      v-img.ma-2(
        :src='designer.avatar'
        v-else-if='this.display === lg' width="400px" height="150px"
      )
      v-img.ma-2(
        :src='designer.avatar'
        v-else-if='this.display === xl' width="300px" height="100px"
      )
  v-card-title.text-center
    h4 {{ designer.name }}
</template>

<script setup>
import { reactive, ref } from 'vue'

defineProps(['designer'])
</script>
