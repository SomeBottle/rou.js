var rou={ps:{def:{},cg:{}},statu:!1,id:0,el:"",c:function(){var a=window.location.href,c=this.sp(a),b,e,d,g=this.ps.def.ky;c?(b=c.substring(0,1),d=c.split("/")):(b="",d=[]);1<d.length&&(c=d[0]);for(var f in this.ps.cg)if(""!==b&&-1!==f.indexOf(b)&&-1!==c.indexOf(f)){e=c.replace(f,"");b=f;break}d.shift();-1!==a.indexOf("#")&&c!==g?(a=this.j(b,e).c,b=this.j(b,e).id,"function"==typeof a?a(e,b,d):""!==a&&(this.el.innerHTML=a)):g&&(a=this.ps.def.c,b=this.ps.def.id,c||(window.location.href+="#"+g),"function"==typeof a?a("home",b,d):this.el.innerHTML=a)},j:function(a,c){var b={};return(this.ps.cg[a]||(b[c]={c:"",i:""},b))[c]||{c:"",i:""}},x:function(a){this.el=document.getElementById(a);return this},sp:function(a){return a.split("?")[0].split("/#")[1]},r:function(){this.statu?(window.removeEventListener("hashchange",this.c.bind(this)),this.statu=!1):(window.addEventListener("hashchange",this.c.bind(this)),this.c(),this.statu=!0);return this},a:function(a,c,b,e,d){e=void 0===e?!1:e;d=void 0===d?!1:d;d||(d=this.id,this.id+=1);e||(e="!");"def"==a?this.ps.def={ky:c,id:d,c:b}:"reg"==a&&(this.ps.cg[e]||(this.ps.cg[e]={}),this.ps.cg[e][c]={id:d,c:b});return this},d:function(a,c,b){(b=void 0===b?!1:b)||(b="!");"def"==a?this.ps.def={}:"reg"==a&&delete this.ps.cg[b][c];return this}};