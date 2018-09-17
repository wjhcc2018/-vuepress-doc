module.exports = {
	title:'暖暖的风儿的博客',
	description:'你若盛开，清风自来',
	port:"8888",
	themeConfig: {
	    //menu栏
	    nav: [
	      { text: '主页', link: '/' },
	      { text: '数据可视化',
	      	items:[
		        { text: '可视化基础', link: '/charts/base/' },
	          	{ text: 'VueRouter', link: '/vuejs/vuerouter'},
	          	{ text: 'Vuex', link: '/vuejs/vuex'},
	          	{ text: 'ElectronVue', link: '/vuejs/electron'},
	          	{ text: 'Vue源码', link: '/vuejs/scode'}
		     ]
		   },
	      { text: 'Vue全家桶',
	      	items:[
		        { text: 'Vue基础', link: '/vuejs/base' },
	          	{ text: 'VueRouter', link: '/vuejs/vuerouter'},
	          	{ text: 'Vuex', link: '/vuejs/vuex'},
	          	{ text: 'ElectronVue', link: '/vuejs/electron'},
	          	{ text: 'Vue源码', link: '/vuejs/scode'}
		     ]
		   },
	      { text: 'NodeJS', 
	        items:[
		        { text: 'NodeJS基础', link: '/nodejs/base' },
	          	{ text: 'Express', link: '/nodejs/express'},
	          	{ text: 'Koa', link: '/nodejs/koa'}
		    ]
		  },
		  // { text: 'React', 
	   //      items:[
		  //       { text: 'React基础', link: '/react/base' },
	   //        	{ text: 'ReactNative', link: '/react/reactnative'},
	   //        	{ text: 'React高级', link: '/react/gao'}
		  //   ]
		  // },
		  { text: '技术前沿', 
	        items:[
		        { text: 'NodeJS基础', link: '/nodejs/base' },
	          	{ text: 'Express', link: '/nodejs/express'},
	          	{ text: 'Koa', link: '/nodejs/koa'}
		    ]
		  },
		  { text: '关于我', 
	        items:[
		        { text: 'NodeJS基础', link: '/nodejs/base' },
	          	{ text: 'Express', link: '/nodejs/express'},
	          	{ text: 'Koa', link: '/nodejs/koa'}
		    ]
		  }
	    ],
	    sidebar:{
	      '/charts/base/':[{
	      	title:'图表用法',
	      	collapsable: false,
	      	children:[
	      		// "category"
	        ]
	      },{
	      	title:'图表构成',
	      	collapsable: false,
	      	children:[

	        ]
	      },{
	      	title:'设计原则',
	      	collapsable: false,
	      	children:[

	        ]
	      }]
	    },
	    //搜索
	    search: true,
	    searchMaxSuggestions: 10,
  }
}