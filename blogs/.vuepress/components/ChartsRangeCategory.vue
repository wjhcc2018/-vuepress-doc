<template>
  <div class="category">
    <div class="com-description">
    说明：显示同一维度上值的上限和下限之间的差异。使用图形的大小和位置表示数值的上限和下限，通常用于表示数据在某一分类(时间点)上的最大值和最小值。
    </div>
    <div class="c-wrap1 qjl-category">
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
         {name:"ybp",title:'仪表盘',file:''},
         {name:"ddmjt",title:'堆叠面积图',file:'',category:5}
      ]
    }
 } 
}
</script>
<style @scope>
.qjl-category a{background-image:url(assets/images/qjl.png);background-repeat:no-repeat;}

.qjl-category a.ybp{background-position:10px 5px;}
.qjl-category a.ddmjt{background-position:-228px 0;}
</style>