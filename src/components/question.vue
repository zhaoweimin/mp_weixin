<template>
  <div class="z-question">
    <div class="quest">
      {{sort}}、 {{data.question}}（<span class="val">{{val}}</span>）
    </div>
    <div class="answer">
      <div class="item" v-for="(vo, key) in data.options" :key="key" @click="choose(vo.val)">
        <div class="val" :class="{active: val == vo.val}">{{vo.val}}</div>
        <div class="text">{{vo.text}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['data', 'sort', 'sign', 'reveal'],
  data () {
    return {
      val: ''
    }
  },
  mounted(){
      this.val = this.reveal||''
  },
  onLoad (options) {
		Object.assign(this.$data, this.$options.data())
  },
  methods: {
    choose (val) {
      this.val = val
      this.change()
    },
    change () {
      this.$emit('change', this.val, this.sign)
    }
  }
}
</script>
<style >
.z-question{
  padding: 15px;
}

.z-question .quest{
  color: #000;
}
.z-question .quest .val{
  display: inline-block;
  min-width: 20px;
  text-align: center;
}

.z-question .answer {
    padding-top: 10px;
    color: #999;
}
.z-question .answer .item{
  display: flex;
  margin-bottom: 10px;
}

.z-question .answer .item .val{
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  margin-right: 10px;
}

.z-question .answer .item .val.active{
  background: #57befd;
  color: #fff;
  border-radius: 10px;
}
</style>