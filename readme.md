# Timeline 时间轴

### 用途
* 当有一系列信息需要从上至下按时间排列时；
* 需要有一条时间轴进行视觉上的串联时；

### 用法
import Timeline from '@myfe/cat-timeline';

```
<Timeline {...data} />
```
data
```
{
	pending : true,
	items	: [{
		texts  : ['heheheheheheaa'],
		color  : 'blue'
	},{
		texts  : ['hehehehehhe','hehehehehhe'],
		color  : 'red'
	},{
		texts  : ['yeyeyeyeyeye'],
		color  : 'green'
	},{
		texts  : ['diudiudiudiud'],
		color  : 'blue'
	}]
}
```

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| -------- |:-------:|:------:|:--:| ----:|
| pending  | 幽灵节点  | bool | false |
| items | 节点对象数组  | array | [] |
| color | 节点状态 | string | blue | blue,green,red |
| texts | 节点展示文本 | array | [] |