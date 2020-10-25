<template>
  <button class="common-button" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {}
</script>

<style>
.common-button {
  padding: 10px;
  background: #fff;
  border: none;
  color: #e01304;
  outline: none;
  border: 2px solid #e01304;
  font-weight: bold;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0px 7px 11px -11px #e01304;
  transition: all 0.1s ease-in;
}

.common-button:hover {
  background: #e01304;
  color: #fff;
}
</style>