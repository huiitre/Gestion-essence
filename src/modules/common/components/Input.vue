<template>
<label class="field__label" :for="inputId">{{ label }}</label>
	<input
		@change="handleChangeInput"
		:id="inputId"
		:type="inputType"
		v-model="value"
    class="field__input"
    :class="inputClass"
    :placeholder="inputPlaceHolder"
	/>
</template>

<script>
export default {
  name: 'Input',
  props: {
    label: String,
    name: String,
    inputClass: String,
    inputType: String,
    inputPlaceHolder: String,
    inputId: String,
    defaultValue: {
      type: String,
      default: ''
    },
    updated: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      value: ''
    }
  },
  methods: {
    handleChangeInput() {
      this.$emit('onChangeValue', { name: this.name, value: this.value })
    }
  },
  /* mounted() {
    if (this.defaultValue) {
      this.value = this.defaultValue;
      this.$emit('onChangeValue', { name: this.name, value: this.value })
    }
  },
  updated() {
    if (this.updated.length > 0) {
      this.value = this.updated
      this.$emit('onChangeValue', { name: this.name, value: this.value })
    }
  } */
};
</script>

<style lang="scss" scoped></style>
