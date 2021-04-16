<template>
  <div class="light_custom_input_holder">
    <label :for="id">{{ label }}</label>
    <input :type="type" :id="id" :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  name: "LightCustomTextInput",
  props: ['type', 'label', 'id', 'placeholder']
}
</script>

<style lang="scss" scoped>
.light_custom_input_holder {
    display: flex;
    flex-direction: column;

    & label {
      font-weight: bold;
    }

    & input {
      @include auth-input-border;

      font-size: 100%;
      padding: 0 1.5rem;
      outline: none;
    }
}
</style>