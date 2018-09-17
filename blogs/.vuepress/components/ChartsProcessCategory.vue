<template>
  <div class="category">
    <div class="com-description">
    说明：显示流程流转和流程流量。一般流程都会呈现出多个环节，每个环节之间会有相应的流量关系，这类图可以很好的表示这些关系。
    </div>
    <div class="c-wrap1 lcl-category">
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
         {name:"sst",title:'桑甚图',file:'https://antv.alipay.com/zh-cn/vis/chart/stacked-bar.html'},
         {name:"ldt",title:'漏斗图',file:'https://antv.alipay.com/zh-cn/vis/chart/bar.html',category:2}
      ]
    }
 } 
}
</script>
<style @scope>
.lcl-category a{background-image:url(assets/images/lcl.png);background-repeat:no-repeat;}

.lcl-category a.sst{background-position:-228px 0;}
.lcl-category a.ldt{background-position:10px 0;}
</style>