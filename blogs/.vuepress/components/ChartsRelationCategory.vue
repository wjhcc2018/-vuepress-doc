<template>
  <div class="category">
    <div class="com-description">
    说明：显示数据之间相互关系。使用图形的嵌套和位置表示数据之间的关系，通常用于表示数据之间的前后顺序、父子关系以及相关性。
    </div>
    <div class="c-wrap1 gll-category">
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
         {name:"arc",title:'弦长链接图',file:'https://antv.alipay.com/zh-cn/vis/chart/arc.html'},
         {name:"chord",title:'和弦图',file:'https://antv.alipay.com/zh-cn/vis/chart/chord.html'},
         {name:"sankey",title:'桑甚图',file:'https://antv.alipay.com/zh-cn/vis/chart/sankey.html',category:2},
         {name:"treemap",title:'矩形树图',file:'https://antv.alipay.com/zh-cn/vis/chart/treemap.html',category:3},
         {name:"venn",title:'韦恩图',file:'https://antv.alipay.com/zh-cn/vis/chart/venn.html'}
      ]
    }
 } 
}
</script>
<style @scope>
.gll-category a{background-image:url(assets/images/gll.png);background-repeat:no-repeat;}

.gll-category a.arc{background-position:5px -4px;}
.gll-category a.chord{background-position:-228px -4px;}
.gll-category a.sankey{background-position:-476px -5px;}
.gll-category a.treemap{background-position:-712px -5px;}
.gll-category a.venn{background-position:-949px -5px;}
</style>