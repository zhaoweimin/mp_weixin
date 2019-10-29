<template>
  <div class="z-question">
    <div class="quest">
      {{sort}}. {{data.question}}（<span class="val">{{val}}</span>）
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
  props: ['data', 'sort', 'sign'],
  data() {
    return {
      val: ''
    };
  },
  mounted () {
  },
  methods: {
    choose (val) {
      this.val = val
      this.change();
    },
    change () {
      this.$emit('change', this.val, this.sign);
    }
  }
};
</script>
<style lang="less">
.z-question{
  padding: 15px;

  .quest {
    .val{
      display: inline-block;
      min-width: 20px;
      text-align: center;
    }
  }

  .answer {
    padding-top: 10px;
    .item{
      display: flex;
      margin-bottom: 10px;
      .val{
        width: 20px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        margin-right: 10px;

        &.active{
          background: #57befd;
          color: #fff;
          border-radius: 10px;
        }
      }
    }
  }
}
</style>