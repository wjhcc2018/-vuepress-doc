<template>
  <div class="category">
    <div class="com-description">
    说明：显示值与值之间的不同和相似之处。使用图形的长度、宽度、位置、面积、角度和颜色来比较数值的大小，通常用于展示不同分类间的数值对比，不同时间点的数值对比。
    </div>
    <div class="c-wrap1 bj-category">
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
         {name:"zht",title:'柱状图',file:'https://antv.alipay.com/zh-cn/vis/chart/bar.html'},
         {name:"sxzht",title:'双向柱状图',file:'https://antv.alipay.com/zh-cn/vis/chart/bi-directional-bar.html'},
         {name:"fzzzt",title:'分组柱状图',file:'https://antv.alipay.com/zh-cn/vis/chart/multi-set-bar.html'},
         {name:"cdzzt",title:'堆叠柱状图',file:'https://antv.alipay.com/zh-cn/vis/chart/stacked-bar.html'},
         {name:"qpt",title:'气泡图',file:'https://antv.alipay.com/zh-cn/vis/chart/bubble.html',category:2},
         {name:"zdt",title:'子弹图',file:'https://antv.alipay.com/zh-cn/vis/chart/bullet.html'},
         {name:"skt",title:'色块图',file:'ios',category:2},
         {name:"ldt",title:'漏斗图',file:'android',category:2},
         {name:"zft",title:'直方图',file:'es6',category:2},
         {name:"kxt",title:'K线图',file:'typescript',category:3},
         {name:"mskt",title:'马赛克图',file:'webpack',category:2},
         {name:"leidt",title:'雷达图',file:'ios'},
         {name:"ykt",title:'玉块图',file:'android'},
         {name:"ndgemgt",title:'南丁格尔玫瑰图',file:'es6'},
         {name:"lxt",title:'螺旋图',file:'typescript',category:2},
         {name:"cdmjt",title:'堆叠面积图',file:'webpack',category:5},
         {name:"jxst",title:'矩形树图',file:'ios',category:3},
         {name:"cyt",title:'词云',file:'android'}
      ]
    }
 } 
}
</script>
<style @scope>
.bj-category a{background-image:url(assets/images/bj.png);background-repeat:no-repeat;}

.bj-category a.zht{background-position:0px 0px;}
.bj-category a.qpt{background-position:-262px 4px;}
.bj-category a.sxzht{background-position:-522px 4px;}
.bj-category a.zdt{background-position:-782px 4px;}
.bj-category a.skt{background-position:-1048px 4px;}
.bj-category a.ldt{background-position:0px -77px;}
.bj-category a.zft{background-position:-262px -77px;}
.bj-category a.kxt{background-position:-524px -77px;}

.bj-category a.mskt{background-position:-784px -77px;}
.bj-category a.fzzzt{background-position:-1048px -77px;}
.bj-category a.leidt{background-position:0px -158px;}
.bj-category a.ykt{background-position:-262px -158px;}
.bj-category a.ndgemgt{background-position:-522px -158px;}
.bj-category a.lxt{background-position:-786px -158px;}
.bj-category a.cdmjt{background-position:-1048px -158px;}

.bj-category a.cdzzt{background-position:0px -235px;}
.bj-category a.jxst{background-position:-262px -238px;}
.bj-category a.cyt{background-position:-522px -235px;}
</style>