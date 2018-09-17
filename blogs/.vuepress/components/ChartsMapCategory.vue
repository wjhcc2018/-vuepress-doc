<template>
  <div class="category">
    <div class="com-description">
    说明：显示地理区域上的数据。使用地图作为背景，通过图形的位置来表现数据的地理位置，通常来展示数据在不同地理区域上的分布情况。
    </div>
    <div class="c-wrap1 dtl-category">
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
         {name:"dqpddt",title:'带气泡的地图',file:'https://antv.alipay.com/zh-cn/vis/chart/bubble-map.html'},
         {name:"fjtjdt",title:'分级统计地图',file:'https://antv.alipay.com/zh-cn/vis/chart/choropleth-map.html'},
         {name:"dmfdt",title:'点描法地图',file:'https://antv.alipay.com/zh-cn/vis/chart/dot-map.html',category:2}
      ]
    }
 } 
}
</script>
<style @scope>
.dtl-category a{background-image:url(assets/images/dtl.png);background-repeat:no-repeat;}

.dtl-category a.dqpddt{background-position:5px -9px;}
.dtl-category a.fjtjdt{background-position:-228px -9px;}
.dtl-category a.dmfdt{background-position:-476px -9px;}
</style>