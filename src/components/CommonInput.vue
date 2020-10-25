<template>
  <div class="fake-text-input" :class="{ focused: isFocused }">
    <input
      :type="inputType"
      :placeholder="placeholder"
      @input="$emit('input', value)"
      @focus="isFocused = true"
      @blur="isFocused = false"
      v-model="value"
      class="input"
    />
    <div class="bottom-border"></div>
  </div>
</template>

<script>
export default {
  name: 'CommonInput',
  props: {
    inputType: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: 'placeholder',
    },
  },
  data() {
    return {
      value: '',
      isFocused: false,
    }
  },
  methods: {},
}
</script>

<style scoped>
.fake-text-input {
  border: 1px solid rgba(0, 0, 0, 0.5);
  padding: 10px 5px;
  width: 100%;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  position: relative;
  border-radius: 3px;
  box-shadow: 0px 7px 11px -11px #e01304;
  overflow: hidden;
}

.bottom-border {
  width: 0px;
}

.fake-text-input.focused {
  border: 1px solid #e01304;
}

.fake-text-input.focused .bottom-border {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  min-height: 3px;
  background: #e01304;
  z-index: 100000;
  transition: width 0.4s ease-in-out;
}

.input {
  width: 100%;
  font-size: 20px;
  outline: none;
  border: none;
}
</style>