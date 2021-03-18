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
  rou.a(mode,key,func(key,id,pn)/html,category,id);  
  ````
  1. mode->注册模式.要注册主页,模式是'def';要注册普通页面，模式是'reg'.如果注册了主页，加载页面时如果url没有hash，则会自动跳转到主页.  
  2. key->注册的页面hash键.  
  3. func/html->该页面要执行的函数/要打印的html.**当该项为函数时**，默认有**三个回调变量key和id还有pn**,key是该页的hash键,id是该页的注册id,pn是**分割"/"后的数组**，例如请求的url是http://xxx/#!page/1/site ,则返回的数组是['1','site'].  
  4. category->注册页面的索引符（**不支持问号?** ），**如果不填，默认是'!'，如果填'',则不需要索引符**.假设category是'!',key是'page',则访问 http://xxx/#!page 时会执行func/html.  
  5. id->注册页面的id，如果不填就是自动生成，通过自定义你可以定义文章的页面唯一id.    
 
* 小贴士  
  
  当注册的mode为def，也就是**注册主页**的时候，是没有指定索引符的，如果你要把#!index设为主页，你可以这样写：```rou.a('def','!index','hello!')```.当有回调函数的时候，也就是这样：```rou.a('def','!index',function(key,b,pn){})```，回调函数**在主页**的第一个参数(```function(key,b,pn)```中的key)为```home```.  
  
* 运转吧！  
  ```javascript
  rou.r();  
  ```
  这样能让rou.js开始监听hash改变的事件，当然，**再次执行语句能让其停止监听**.  
  
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
	  <a href="#@@ct1/1/2">运行函数</a>
	  <a href="#blank">空白</a>
  </nav>
  </div>
  <div id='m'></div>
  <script src='./rou.m.js'></script>
  <script>
  rou.x('m').a('def','hm',function(key,id,pn){
      console.log('welcome page:'+key+' id:'+id);
      console.log(pn);
  }).a('reg','about','<h1>这里是关于页面</h1>')
  .a('reg','link','<h1>这里是友情链接</h1>')
  .a('reg','ct1',function(key,id,pn){
	  var r='这里是以@@为索引的页面!\n页码分割:';
	  for(var i in pn) r+=pn[i]+' ';
	  alert(r);
  },'@@')
  .a('reg','blank','<h1>这里是没有索引符的页面</h1>','')
  .r();
  </script>
  ``` 
  
### In the end
  I'll appreciate it if you can help me improve it~  
