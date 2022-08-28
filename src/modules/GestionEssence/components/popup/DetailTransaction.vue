<template>
  <div class="detail-transaction">
    salut c'est le détail de la transaction
  </div>
</template>

<script>
export default {
  name: 'DetailTransaction',
  props: ['isOpen']
};
</script>

<style lang="scss" scoped>
.detail-transaction {
  width: 50%;
  height: 50%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: $white;

}
</style>