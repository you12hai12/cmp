<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>实例</h2>
    <ol>
    	<li v-for="item in items">{{item.name}}</li>
    </ol>
   <h2>必要连接</h2>
    <ul>
      <li v-for="demo in demos"><a :href="demo.hrefs" target="_blank">{{demo.content}}</a></li>
    </ul>
    <h2>生态系统</h2>
    <ul>
      <li v-for="system in systems"><a :href="system.hrefs" target="_blank">{{system.content}}</a></li>
    </ul>-->
    <div id="column" :style="{width:'1000px',height:'400px'}"></div>
    <div id="line" :style="{width:'1000px',height:'400px',float:'right',position:'relative',top:'-400px'}"></div>
    <div id="pie" :style="{width:'1000px',height:'400px',position:'relative',top:'-400px'}"></div>
    <div id="area" :style="{width:'1000px',height:'400px',float:'right',position:'relative',top:'-400px'}"></div>
  </div>
</template>

<script>
	export default {
	  name: 'app',
	  data () {
	    return {
	      msg: '简单模板',
	      items:[
	      	{name:'Vue.js'},
	      	{name:'HTML5'},
	      	{name:'CSS3'},
	      	{name:'C++'},
	      	{name:'Java'}
	      ],
	      demos:[
	      	{hrefs:"https://vuejs.org",content:"核心文档"},
	      	{hrefs:"https://forum.vuejs.org",content:"Forum"},
	      	{hrefs:"https://chat.vuejs.org",content:"社区聊天"},
	      	{hrefs:"https://twitter.com/vuejs",content:"Twitter"}
	      ],
	      systems:[
	      	{hrefs:"http://router.vuejs.org/",content:"vue路由"},
	      	{hrefs:"http://vuex.vuejs.org/",content:"vuex"},
	      	{hrefs:"http://vue-loader.vuejs.org/",content:"vue-loader"},
	      	{hrefs:"https://github.com/vuejs/awesome-vue",content:"awesome-vue"}
	      ]
	    }
	  },
	  mounted(){
	  	this.drawBar();
	  	this.drawLine();
	  	this.drawPie();
	  	this.drawArea();
	  },
	  methods:{
	  	drawBar(){
	  		let chart = this.$echarts.init(document.getElementById('column'));
	  		chart.setOption({
	  			title:{
	  				text:'一周人数统计',
	  				x:'center',
        		y:'top'
	  			},
	  			tooltip:{},
	  			xAxis:{
	  				data:['星期一','星期二 ','星期三','星期四','星期五','星期六','星期日'],
	  				axisLabel:{
	  					inside:true,
	  					textStyle:{
	  						color:'#00FF00'
	  					},
	  					axisTick:{
	  						show:false
	  					},
	  					axisLine:{
	  						show:false
	  					}
	  				}
	  			},
	  			yAxis:{
	  				axisLine:{
	  					show:false
	  				},
	  				axisTick:{
	  					show:false
	  				},
	  				axisLabel:{
	  					textStyle:{
	  						color:'#999'
	  					}
	  				}
	  			},
	  			series:[{
	  				name:'人数',
	  				type:'bar',
	  				itemStyle:{
	  					 normal: {color: 'rgba(200,152,0,0.5)'}
	  				},
	  				data:[152,562,369,789,452,203,968]
	  			}]
	  		});
	  	},
	  	drawLine(){
	  		let line = this.$echarts.init(document.getElementById('line'));
	  		line.setOption({
	  			title:{
	  				text:'季度人数统计',
	  				x:'center',
        		y:'top'
	  			},
	  			tooltip:{},
	  			xAxis:{
	  				data:['第一季度','第二季度','第三季度','第四季度'],
	  				axisLabel:{
	  					inside:true,
	  					textStyle:{
	  						color:'#00FF00'
	  					},
	  					axisTick:{
	  						show:false
	  					},
	  					axisLine:{
	  						show:false
	  					}
	  				}
	  			},
	  			yAxis:{
	  				axisLine:{
	  					show:false
	  				},
	  				axisTick:{
	  					show:false
	  				},
	  				axisLabel:{
	  					textStyle:{
	  						color:'#999'
	  					}
	  				}
	  			},
	  			series:[{
	  				name:'人数',
	  				type:'line',
	  				data:[5689,6321,7458,9856,2031,4789,3562]
	  			}]
	  		});
	  	},
	  	drawPie(){
	  		let pie = this.$echarts.init(document.getElementById('pie'));
	  		pie.setOption({
	  			legend:{
	  				orient:'vertical',
	  				x:'left',
	  				data:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
	  			},
	  			series:[
	  				{
	  					name:'人数比例',
	  					type:'pie',
	  					radius:['50%','70%'],
	  					avoidLabelOverlap:false,
	  					label:{
	  						normal:{
	  							show:false,
	  							position:'center'
	  						},
	  						emphasis:{
	  							show:true,
	  							textStyle:{
	  								fontSize:'30',
	  								fontWeight:'bold'
	  							}
	  						}
	  					},
	  					labelLine:{
	  						normal:{
	  							show:false
	  						}
	  					},
	  					data:[
	  						{name:'一月',value:695},
	  						{name:'二月',value:546},
	  						{name:'三月',value:789},
	  						{name:'四月',value:342},
	  						{name:'五月',value:879},
	  						{name:'六月',value:231},
	  						{name:'七月',value:453},
	  						{name:'八月',value:963},
	  						{name:'九月',value:203},
	  						{name:'十月',value:125},
	  						{name:'十一月',value:785},
	  						{name:'十二月',value:365},
	  					]
	  				}
	  			]
	  		});
	  	},
	  	drawArea(){
	  		let area = this.$echarts.init(document.getElementById('area'));
	  		area.setOption({
	  			title:{
	  				text:'季度人数统计',
	  				x:'center',
        		y:'top'
	  			},
	  			tooltip:{},
	  			xAxis:{
	  				data:['第一季度','第二季度','第三季度','第四季度'],
	  				axisLabel:{
	  					inside:true,
	  					textStyle:{
	  						color:'#00FF00'
	  					},
	  					axisTick:{
	  						show:false
	  					},
	  					axisLine:{
	  						show:false
	  					}
	  				}
	  			},
	  			yAxis:{
	  				axisLine:{
	  					show:false
	  				},
	  				axisTick:{
	  					show:false
	  				},
	  				axisLabel:{
	  					textStyle:{
	  						color:'#999'
	  					}
	  				}
	  			},
	  			series:[{
	  				name:'人数',
	  				type:'line',
	  				data:[5689,6321,7458,9856,2031,4789,3562],
	  				areaStyle:{
	  					
	  				}
	  			}]
	  		});
	  	}
	  }
	}
</script>

<style lang="scss">
	@import './assets/todos.less';
	#app {
	  font-family: 'Avenir', Helvetica, Arial, sans-serif;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  text-align: center;
	  color: #2c3e50;
	  margin-top: 60px;
	}
	
	h1, h2 {
	  font-weight: normal;
	}
	
	ul {
	  list-style-type: none;
	  padding: 0;
	}
	
	li {
	  display: inline-block;
	  margin: 0 10px;
	}
	
	a {
	  color: #42b983;
	}
</style>
