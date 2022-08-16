<template>
	<div class="demo">
		<div class="custom-loading-spinner"></div>
		Quis enim aut eum diligat quem metuat, aut eum a quo se metui putet?
		Coluntur tamen simulatione dumtaxat ad tempus. Quod si forte, ut fit
		plerumque, ceciderunt, tum intellegitur quam fuerint inopes amicorum. Quod
		Tarquinium dixisse ferunt, tum exsulantem se intellexisse quos fidos amicos
		habuisset, quos infidos, cum iam neutris gratiam referre posset.
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.demo {
	width: 200px;
	margin: 0 auto;
	position: relative;
	text-align: justify;
}
.custom-loading-spinner {
	cursor: progress;
	position: absolute;
	width: 100%;
	height: 100%;
}
.custom-loading-spinner::before {
	content: '';
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 10001;
	overflow: hidden;
	background: #0b0b0b;
	opacity: 0.6;
}
.custom-loading-spinner::after {
	box-sizing: border-box;
	z-index: 10002;
	content: '';
	position: absolute;
	top: 50%;
	left: 50%;
	margin: -25px 0 0 -25px;
	border: 3px solid #f3f3f3;
	border-top: 3px solid #3498db;
	border-radius: 50%;
	width: 50px;
	height: 50px;
	animation: custom-loading 1s linear infinite;
}
@keyframes custom-loading {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
