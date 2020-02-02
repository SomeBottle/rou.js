# rou.js
![](https://wx4.sinaimg.cn/large/ed039e1fly1gbhvzt8ppnj20m808c3ys)  
> 简简单单の单页路由  

这个项目仅是为了写评论框管理后台时方便而诞生的，本人代码水平拙劣，望谅解.  

### 开始  
* 选择操作容器
  ```javascript
  rou.x(id);  
  ```
  请为路由操作的页面元素加上id~  
  
* 注册url  
  ```javascript
  rou.a(mode,key,func/html,category,id);  
  ````
  1. mode->注册模式.要注册主页,模式是'def';要注册普通页面，模式是'reg'.如果注册了主页，加载页面时如果url没有hash，则会自动跳转到主页.  
  2. key->注册的页面hash键.  
  3. func/html->该页面要执行的函数/要打印的html.**当该项为函数时**，默认有两个回调变量key和id,key是该页的hash键,id是该页的注册id.  
  4. category->注册页面的分类（不支持问号?），**如果不填，默认是'!'**.假设category是'!',key是'page',则访问 http://xxx/#!page 时会执行func/html.  
  5. id->注册页面的id，如果不填就是自动生成，通过自定义你可以定义文章的页面唯一id.    
  
* 运转吧！  
  ```javascript
  rou.r();  
  ```
  这样能让rou.js开始监听hash改变的事件，当然，**再次执行语句能让其停止监听**.  
  
* 注销url
  ```javascript
  rou.d(mode,key,category); 
  ```
  函数变量和注册url一样  
  
* 链式语法  
  ```javascript
  rou.x('m').a('def','hm',function(key,id){
    console.log('welcome page:'+key+' id:'+id);
  }).a('reg','about','<h1>这里是关于页面</h1>')
  .a('reg','link','<h1>这里是友情链接</h1>')
  .a('reg','ct1','<h1>这里是分类页面1</h1>','@')
  .r();
  ```
  
### demo  
  ```html 
  <meta charset="UTF-8"/> 
  <div>
  <nav>
	<a href="#hm" class="active">首页</a>
	<a href="#!about">关于</a>
	<a href="#!link">友情链接</a>
	<a href="#@ct1">分类1</a>
  </nav>
  </div>
  <div id='m'></div>
  <script src='./rou.m.js'></script>
  <script>
  rou.x('m').a('def','hm',function(key,id){
      console.log('welcome page:'+key+' id:'+id);
  }).a('reg','about','<h1>这里是关于页面</h1>')
  .a('reg','link','<h1>这里是友情链接</h1>')
  .a('reg','ct1','<h1>这里是分类页面1</h1>','@')
  .r();
  </script>
  ``` 
  
### In the end
  I'll appreciate it if you can help me improve it~  
