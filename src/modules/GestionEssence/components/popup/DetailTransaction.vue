<template>
  <Overlay :opened="true" :visible="true" @closed="opened = visible = false">
    <span>My popup</span>
  </Overlay>
</template>

<script>
import Overlay from 'vuejs-overlay';

export default {
  name: 'DetailTransaction',
  props: ['isOpen'],
  components: {
    Overlay
  }
};
</script>

<style lang="scss" scoped>

</style>