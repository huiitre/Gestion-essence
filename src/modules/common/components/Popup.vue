<script>
export default {
  name: 'Popup',
};
</script>

<template>
  <div id="modal">
    <div class="mask"></div>
    <div class="container auto">
      <div class="message">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptate dolore illo tempore libero repellat neque inventore fugit qui, sequi, rerum temporibus laborum. Incidunt asperiores et itaque, suscipit eveniet distinctio voluptatum aspernatur officiis laborum nemo reiciendis quos voluptatibus molestias iste praesentium eum in 
      </div>
      <span href="#" class="close">&times;</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#modal {
  color: #000;
	position: fixed;
	z-index: 99999;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	// display: none;

  & .mask {
    // background: black;
    opacity: 0.8;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  & .container {
    position: relative;
    background: white;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 300px;
    height: auto;
    min-height: 50px;

    & .message {
      padding: 15% 15% 5% 5%;
    }

    & .close {
      position: absolute;
      right: 5%;
      top:2%;
      color: #444;
      font-size: 30px;
    }
  }
}
</style>