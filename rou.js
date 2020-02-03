var rou = {
    ps: {def: {},cg: {}},
    /*routes*/
    statu: false,
    /*ifrun*/
    id: 0,
    el: '',
    /*element*/
    c: function() { /*checker*/
        var o = this,u = window.location.href,rq = o.sp(u),ctg,k,pagen, hk = o.ps.def.ky;/*homekey*/
		rq ? (ctg=rq.substring(0, 1),pagen=rq.split('/')):(ctg='',pagen=[]); /*获取页面索引category(!,@之类的)，分割"/"*/
		if(pagen.length>1) rq=pagen[0];/*如果存在页码，自动剔除页码*/
        for (var vt in o.ps.cg) if (ctg!==''&&vt.indexOf(ctg) !== -1 && rq.indexOf(vt) !== -1) {
            k = rq.replace(vt, ''); /*获得请求的页面*/
            ctg = vt; /*检索多位索引(@@之类的)*/
            break;
        }
		pagen.shift();
        if (u.indexOf('#') !== -1 && rq !== hk) {
            var r = o.j(ctg, k)['c'],i = o.j(ctg, k)['id'];
            if (typeof r == 'function') {
                r(k, i,pagen); /*(请求的页面,页面id,页码)例如http://xxx/#!index/2，返回的k=index,pagen=[2]*/
            } else if (r !== '') {
                o.el.innerHTML = r;
            }
        } else if (hk) {
            var r = o.ps['def']['c'],i = o.ps['def']['id'];
            if (!rq) window.location.href += '#' + hk;
            if (typeof r == 'function') {
                r('home',i,pagen); /*(page,id)*/
            } else {
                o.el.innerHTML = r;
            }
        }
    },
    j: function(c, k) {
        const b = this.ps['cg'][c] || {[k]: {c: '',i: ''}};
        return b[k] || {c: '',i: ''};
    },
    x: function(e) { /*elementselector*/
        this.el = document.getElementById(e);
        return this;
    },
    sp: function(y) { /*splitter*/
        var s = y.split('?');
        return (s[0].split('/#'))[1];
    },
    r: function() { /*run/stop*/
        var o = this;
        if (!o.statu) {
            window.addEventListener('hashchange', o.c.bind(o));
            o.c();
            o.statu = true;
        } else {
            window.removeEventListener('hashchange', o.c.bind(o));
            o.statu = false;
        }
        return o;
    },
    a: function(t, k, ct, c = false, i = false) { /*add(type,key,content(html/func),category,id)*/
        var o = this;
        if (!i) {
            i = o.id;
            o.id += 1;
        }
        if (!c) {
            c = '!';
        }
        if (t == 'def') {
            o.ps['def'] = {ky: k,id: i,c: ct};
        } else if (t == 'reg') {
            if (!o.ps['cg'][c]) o.ps['cg'][c] = {};
            o.ps['cg'][c][k] = {id: i,c: ct};
        }
        return o;
    },
    d: function(t, k, c = false) { /*del(type,key,category)*/
        var o = this;
        if (!c) {
            c = '!';
        }
        if (t == 'def') {
            o.ps['def'] = {};
        } else if (t == 'reg') {
            delete o.ps['cg'][c][k];
        }
        return o;
    }
};