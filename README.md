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
  mode->注册模式.要注册主页,模式是'def';要注册普通页面，模式是'reg'.如果注册了主页，加载页面时如果url没有hash，则会自动跳转到主页.
  key->注册的页面hash键.
  func/html->该页面要执行的函数/要打印的html.
  category->注册页面的分类（不支持问号?），**如果不填，默认是'!'**.假设category是'!',key是'page',则访问 http://xxx/#!page 时会执行func/html.
  id->注册页面的id，如果不填就是自动生成，通过自定义你可以定义文章的页面唯一id.  
