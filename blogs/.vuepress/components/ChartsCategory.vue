<template>
  <div class="category">
    <div class="c-wrap1 c-category">
    	<a v-for="(item,index) in cArr" :class="item.name" :href="item.file">
          {{item.title}}
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      cArr:[
         {name:"bjl",title:'比较类-18',file:'#比较类'},
         {name:"fbl",title:'分布类-9',file:'#分布类'},
         {name:"lcl",title:'流程类-2',file:'#流程类'},
         {name:"dtl",title:'地图类-3',file:'#地图类'},
         {name:"zbl",title:'占比类-6',file:'#占比类'},
         {name:"qjl",title:'区间类-2',file:'#区间类'},
         {name:"gll",title:'关联类-5',file:'#关联类'},
         {name:"sjl",title:'时间类-6',file:'#时间类'},
         {name:"qsl",title:'趋势类-6',file:'#趋势类'}
      ]
    }
 } 
}
</script>
<style @scope>
  .c-category a{background-image:url(assets/images/fl.png);background-repeat:no-repeat;width:140px;}
  .c-category a.bjl{background-position: 0px -6px;}
  .c-category a.fbl{background-position: -192px -6px;}
  .c-category a.lcl{background-position: -380px -5px}
  .c-category a.dtl{background-position: 0px -95px}
  .c-category a.zbl{background-position: -188px -95px}
  .c-category a.qjl{background-position: -379px -97px}
  .c-category a.gll{background-position: 0px -188px}
  .c-category a.sjl{background-position: -187px -187px}
  .c-category a.qsl{background-position: -379px -187px}
</style>