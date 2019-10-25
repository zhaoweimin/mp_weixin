<template>
    <div class="header bg-blue">
        <div class="dis-flex">
            <div class="nav flex-1" :class="[nav == key ? 'active' : '']" v-for="(vo, key) in info" :key="key" @click="tabNav(key)">{{vo}}</div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      nav: 0
    }
  },
  props: ['info'],
  methods: {
    tabNav (nav) {
      this.nav = nav
      this.$emit('changeNav', nav)
    }
  }
}
</script>

<style>
.header {
	position: fixed;
	height: 50px;
	left: 0;
	top: 0;
	right: 0;
	text-align: center;
	color: #ffffff;
	z-index: 10;
}
.header .nav {
	font-size: 14px;
	height: 30px;
	line-height: 30px;
	margin: 10px 0;
	position: relative;
	border-left: 1px solid rgba(0, 0, 0, 0.1);
}
.header .nav:first {
	border-left: 0px;
}
.header .nav.active {
	font-weight: bold;
}
.header .nav.active::after {
	content: '';
	position: absolute;
	width: 40px;
	height: 3px;
	background: #ffffff;
	bottom: -5px;
	left: 50%;
	margin-left: -20px;
}
</style>
