<template>
  <div class="category">
    <div class="com-description">
    说明：显示以时间为特定维度的数据。使用图形的位置表现出数据在时间上的分布，通常用于表现数据在时间维度上的趋势和变化。
    </div>
    <div class="c-wrap1 time-category">
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
         {name:"area",title:'面积图',file:'https://antv.alipay.com/zh-cn/vis/chart/area.html',category:2},
         {name:"j-chart",title:'K线图',file:'https://antv.alipay.com/zh-cn/vis/chart/k-chart.html',category:3},
         {name:"kagi",title:'卡吉图',file:'https://antv.alipay.com/zh-cn/vis/chart/kagi.html',category:2},
         {name:"line",title:'折线图',file:'https://antv.alipay.com/zh-cn/vis/chart/line.html',category:2},
         {name:"spiral",title:'螺旋图',file:'https://antv.alipay.com/zh-cn/vis/chart/spiral.html',category:2},
         {name:"stacked-area",title:'堆叠面积图',file:'https://antv.alipay.com/zh-cn/vis/chart/stacked-area.html',category:5}
      ]
    }
 } 
}
</script>
<style @scope>
.time-category a{background-image:url(assets/images/time.png);background-repeat:no-repeat;}

.time-category a.area{background-position:7px 5px;}
.time-category a.j-chart{background-position:-226px 5px;}
.time-category a.kagi{background-position:-467px 5px;}
.time-category a.line{background-position:-708px 5px;}
.time-category a.spiral{background-position:-951px 5px;}
.time-category a.stacked-area{background-position:7px -58px;}
</style>