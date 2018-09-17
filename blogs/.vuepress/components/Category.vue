<template>
  <div class="category">
    <div class="com-tit">
    	基础必备 <span>→代码是写给人看的，顺便给机器运行→</span>
    </div>
    <div class="c-wrap">
        <a v-for="(item,index) in baseArr" :href="item.file" target="_blank">
            <h1>{{item.title}}</h1>
        </a>
    </div>
    <div class="com-tit">
        中级进阶 <span>→学习，是为了变成更好的自己， 将来的你，一定会感谢现在努力的自己！→</span>
    </div>
    <div class="c-wrap">
    	<a v-for="(item,index) in uponArr" :href="item.file" target="_blank">
            <h1>{{item.title}}</h1>
        </a>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      baseArr:[
        {title:'HTML',file:'html'},
        {title:'CSS',file:'css'},
        {title:'JavaScript',file:'javascript'},
      ],
      uponArr:[
         {title:'ES6',file:'es6'},
         {title:'TypeScript',file:'typescript'},
         {title:'WebPack',file:'webpack'},
         {title:'Electron',file:'electron'},
         {title:'IOS',file:'ios'},
         {title:'Android',file:'android'},
      ]
    }
 } 
}
</script>
<style @scope>
	.com-tit{font-size: 1.8rem;}
	.com-tit span{font-size: 1rem;}
	.category{border-top: 1px solid #eaecef;padding: 1.2rem 0;margin-top: 2.5rem;}
	.c-wrap{display: flex;flex-wrap: wrap;    align-items: flex-start;align-content: stretch;justify-content: space-between;}
	.c-wrap a{display: block;flex-grow: 1;flex-basis: 30%;max-width: 30%;background:#ff4341;color: #fff;text-align: center; height:6rem;margin: 1rem 0 1.5rem 0;}
</style>