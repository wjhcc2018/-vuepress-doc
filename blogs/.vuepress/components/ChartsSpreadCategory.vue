<template>
  <div class="category">
    <div class="com-description">
    说明：显示频率，数据分散在一个区间或分组。使用图形的位置、大小、颜色的渐变程度来表现数据的分布，通常用于展示连续数据上数值的分布情况。
    </div>
    <div class="c-wrap1 fbl-category">
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
         {name:"xxt",title:'箱型图',file:'https://antv.alipay.com/zh-cn/vis/chart/bar.html'},
         {name:"dgx",title:'等高线',file:'https://antv.alipay.com/zh-cn/vis/chart/stacked-bar.html'},
         {name:"fbqxt",title:'分布曲线图',file:'https://antv.alipay.com/zh-cn/vis/chart/bubble.html'},
         {name:"dmfdt",title:'点描法地图',file:'https://antv.alipay.com/zh-cn/vis/chart/bullet.html',category:2},
         {name:"rlt",title:'热力图',file:'ios'},
         {name:"sdt",title:'散点图',file:'es6'},
         {name:"zft",title:'直方图',file:'android',category:2},
         {name:"qpt",title:'气泡图',file:'https://antv.alipay.com/zh-cn/vis/chart/bi-directional-bar.html',category:2},
         {name:"skt",title:'色块图',file:'https://antv.alipay.com/zh-cn/vis/chart/multi-set-bar.html',category:2},
      ]
    }
 } 
}
</script>
<style @scope>
.fbl-category a{background-image:url(assets/images/fbl.png);background-repeat:no-repeat;}

.fbl-category a.xxt{background-position:0px -2px;}
.fbl-category a.dgx{background-position:-716px -1px;}
.fbl-category a.fbqxt{background-position:-957px -1px;}
.fbl-category a.dmfdt{background-position:0px -64px;}
.fbl-category a.rlt{background-position:-239px -64px;}
.fbl-category a.sdt{background-position:-716px -64px;}
.fbl-category a.zft{background-position:-475px -64px;}
.fbl-category a.qpt{background-position:-235px -1px;}
.fbl-category a.skt{background-position:-476px -1px;}
</style>