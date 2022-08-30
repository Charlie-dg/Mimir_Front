<template lang="pug">
v-card.designer-card(elevation='10')
  v-row(style="height: 50px")
  v-col.d-flex.justify-center
    v-avatar(size="300px")
      v-img(:src='designer.avatar')
  v-card-title.text-center.my-2
    .text-h5.font-weight-bold {{  designer.name  }}
  v-card-text
    v-container
      v-row.justify-center.align-center
        v-col(cols='10')
          .text-h6.font-weight-bold.text-center 簡介:
          .text-h6.font-weight-bold.text-center.my-2 {{  designer.description  }}
      v-row.justify-center.align-center(style="height: 100px;")
        .text-h6.font-weight-bold.text-center.my-2 作品集:
      v-row.justify-center.align-center
        .portfolio(style="width: 80%; height: 50%;" )
          v-slide-group(:show-arrows="true" class="pa-4")
            v-slide-group-item(v-for='(item, idx) in designer.portfolio' :key='idx + 1')
              v-img(:src='item' :class="m - 4" style="width: 300px; height: 300px;")
</template>

<script setup>
import { reactive, ref } from 'vue'

defineProps(['designer'])
</script>
