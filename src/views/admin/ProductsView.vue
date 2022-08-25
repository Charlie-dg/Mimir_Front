<template lang="pug">
#admin-products
  v-row.justify-center
    v-col(cols='9')
      h1.text-center.my-2 商品管理
    v-col(cols='9')
      v-row.justify-end.align-center(style="height: 150px;")
        v-btn(icon variant="text" @click="openDialog('', -1)")
          v-icon(color="green lighten-2") mdi-plus
    v-col(cols='9')
      v-table
        thead
          tr
            th.text-center.text-h6 編號
            th.text-center.text-h6 圖片
            th.text-center.text-h6 名稱
            th.text-center.text-h6 種類
            th.text-center.text-h6 上架
            th.text-center.text-h6 編輯
            th.text-center.text-h6 刪除
        tbody
          tr(v-if='products.length > 0' v-for='(product, idx) in products' :key='product._id')
            td.text-center {{ idx + 1 }}
            td
              v-img(:src='product.image')
            td.text-center {{ product.name }}
            td.text-center {{ product.category }}
            td.text-center(v-if='product.sell === true') 已上架
            td.text-center(v-if='product.sell === false') 未上架
            td
              v-row.justify-center
                v-btn(@click="openDialog(product._id, idx)" style="width: 2rem; height: 2rem;" icon variant="text")
                  v-icon(style="font-size: large;" color="blue lighten-2") mdi-pencil-outline
            td
              v-row.justify-center.align-center
                v-btn(@click="deleteProduct(product._id, idx)" style="width: 2rem; height: 2rem;" icon variant="text")
                  v-icon(style="font-size: large;" color="red lighten-2") mdi-delete
          tr(v-else)
            td.text-center(colspan='3') 沒有商品

  v-dialog(v-model='form.dialog' persistent)
    v-form(v-model='form.valid' @submit.prevent='submitForm')
      v-card
        v-card-title.text-center.my-4
          .text-h5 {{ form._id.length > 0 ? '編輯商品' : '新增商品' }}
        v-card-text
          v-container
            v-row.justify-center
              v-col(cols='9')
                v-text-field(v-model='form.name' label='名稱' :rules='[rules.required]')
              v-col(cols='9')
                v-text-field(type='number' min='0' v-model='form.price' label='價格' :rules='[rules.required, rules.price]')
              v-col(cols='9')
                v-checkbox(v-model='form.sell' label='上架')
              v-col(cols='9')
                v-select(:items='categories' v-model='form.category' label='分類' :rules='[rules.required]')
              v-col(cols='9')
                v-file-input(v-model='form.image' show-size accept='image/*' label='商品圖片' :prepend-icon='""' outlined :rules='[rules.size]')
              v-col(cols='9')
                v-textarea(v-model='form.description' label='商品介紹')
        v-card-actions
          v-row.justify-center
            v-btn(type='submit' color='primary' :loading='form.submitting') 確定
            v-btn(color='error' @click='form.dialog = false' :disabled='form.submitting') 取消
</template>

<script setup>
import { reactive } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '@/plugins/axios'

const categories = reactive(['洗髮系列', '護髮系列', '造型梳', '造型夾', '電捲棒', '吹風機'])
const products = reactive([])
const form = reactive({
  _id: '',
  name: '',
  price: 0,
  sell: false,
  category: '',
  image: '',
  description: '',
  idx: -1,
  dialog: false,
  valid: false,
  submitting: false
})
const rules = reactive({
  required(v) {
    return !!v || '必填'
  },
  price(v) {
    return v > -1 || '必須大於等於 0'
  },
  size(v) {
    return !v || !v.length || (v[0]?.type?.includes('image') && v[0]?.size < 1024 * 1024 || '檔案格式不符')
  }
})

const openDialog = (_id, idx) => {
  form._id = _id
  if (idx > -1) {
    form.name = products[idx].name
    form.price = products[idx].price
    form.sell = products[idx].sell
    form.category = products[idx].category
    form.description = products[idx].description
  } else {
    form.name = ''
    form.price = 0
    form.sell = false
    form.category = ''
    form.description = ''
  }
  form.image = []
  form.idx = idx
  form.dialog = true
  form.valid = false
  form.submitting = false
}

const submitForm = async () => {
  if (!form.valid) return
  form.submitting = true

  const fd = new FormData()
  for (const key in form) {
    if (['_id', 'idx', 'dialog', 'valid', 'submitting'].includes(key)) continue
    else if (key === 'image') fd.append(key, form[key][0])
    else fd.append(key, form[key])
  }
  try {
    if (form._id.length === 0) {
      const { data } = await apiAuth.post('/products', fd)
      products.push(data.result)
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '新增成功'
      })
    } else {
      const { data } = await apiAuth.patch('/products/' + form._id, fd)
      console.log(fd.name)
      products[form.idx] = data.result
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '編輯成功'
      })
    }
    form.dialog = false
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
  form.submitting = false
}

const deleteProduct = async (_id, idx) => {
  try {
    if (_id.length !== 0) {
      const { data } = await apiAuth.delete('/products/' + _id)
      products.splice(idx, 1)
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '刪除成功'
      })
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}

const init = async () => {
  try {
    const { data } = await apiAuth.get('/products/all')
    products.push(...data.result)
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}
init()
</script>
