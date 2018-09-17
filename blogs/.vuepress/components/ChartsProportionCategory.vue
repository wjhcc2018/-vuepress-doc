<template>
  <div class="category">
    <div class="com-description">
    说明：显示同一维度上的占比关系
    </div>
    <div class="c-wrap1 zbl-category">
      <a v-for="(item,index) in cArr" :class="[item.name,item.category&&item.category>1?'muti-category':'']" target="_blank" :href="item.file">
          {{item.title}}
          <span v-if="item.category&&item.category>1">-（{{item.category}}）</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      cArr:[
         {name:"ht",title:'环图',file:''},
         {name:"mskt",title:'马赛克图',file:'',category:2},
         {name:"bt",title:'饼图',file:''},
         {name:"ddmjt",title:'堆叠面积图',file:'',category:5},
         {name:"ddzht",title:'堆叠柱状图',file:'ios',category:2},
         {name:"jxst",title:'矩形树图',file:'es6',category:3}
      ]
    }
 } 
}
</script>
<style @scope>
.zbl-category a{background-image:url(assets/images/zbl.png);background-repeat:no-repeat;}

.zbl-category a.ht{background-position:7px 5px;}
.zbl-category a.mskt{background-position:-226px 5px;}
.zbl-category a.bt{background-position:-467px 5px;}
.zbl-category a.ddmjt{background-position:-708px 5px;}
.zbl-category a.ddzht{background-position:-951px 5px;}
.zbl-category a.jxst{background-position:7px -58px;}
</style>