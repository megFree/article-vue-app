<template>
  <div class="common-text-area">
    <textarea
      @input="$emit('input', value)"
      v-model="value"
      class="textarea"
      name="text"
      id="text"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: 'CommonTextArea',
  data() {
    return {
      value: '',
    }
  },
}
</script>

<style scoped>
.textarea {
  width: 100%;
  height: 100px;
  resize: none;
  font-size: 16px;
}
</style>