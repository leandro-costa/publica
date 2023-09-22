import{aK as H,aL as ot,x as ht,y as ut,s as pt,g as ft,b as yt,a as gt,aM as dt,A as _t,d as mt,c as nt,l as st,aN as vt,aJ as bt,i as kt,aO as xt}from"./mermaid.core-d3f37006.js";import{a as it}from"./arc-a367375b.js";import{o as St}from"./ordinal-ba9b4969.js";import{a as Et}from"./array-9f3ba611.js";import{c as z}from"./path-53f90ab3.js";import"./app-cc1a2de7.js";import"./commonjsHelpers-de833af9.js";import"./init-77b53fdd.js";function At(t,c){return c<t?-1:c>t?1:c>=t?0:NaN}function wt(t){return t}function $t(){var t=wt,c=At,_=null,d=z(0),A=z(H),x=z(0);function o(a){var u,h=(a=Et(a)).length,S,I,N=0,m=new Array(h),k=new Array(h),v=+d.apply(this,arguments),p=Math.min(H,Math.max(-H,A.apply(this,arguments)-v)),$,V=Math.min(Math.abs(p)/h,x.apply(this,arguments)),w=V*(p<0?-1:1),D;for(u=0;u<h;++u)(D=k[m[u]=u]=+t(a[u],u,a))>0&&(N+=D);for(c!=null?m.sort(function(C,g){return c(k[C],k[g])}):_!=null&&m.sort(function(C,g){return _(a[C],a[g])}),u=0,I=N?(p-h*w)/N:0;u<h;++u,v=$)S=m[u],D=k[S],$=v+(D>0?D*I:0)+w,k[S]={data:a[S],index:u,value:D,startAngle:v,endAngle:$,padAngle:V};return k}return o.value=function(a){return arguments.length?(t=typeof a=="function"?a:z(+a),o):t},o.sortValues=function(a){return arguments.length?(c=a,_=null,o):c},o.sort=function(a){return arguments.length?(_=a,c=null,o):_},o.startAngle=function(a){return arguments.length?(d=typeof a=="function"?a:z(+a),o):d},o.endAngle=function(a){return arguments.length?(A=typeof a=="function"?a:z(+a),o):A},o.padAngle=function(a){return arguments.length?(x=typeof a=="function"?a:z(+a),o):x},o}var Q=function(){var t=function(g,e,n,s){for(n=n||{},s=g.length;s--;n[g[s]]=e);return n},c=[1,4],_=[1,5],d=[1,6],A=[1,7],x=[1,9],o=[1,11,13,15,17,19,20,26,27,28,29],a=[2,5],u=[1,6,11,13,15,17,19,20,26,27,28,29],h=[26,27,28],S=[2,8],I=[1,18],N=[1,19],m=[1,20],k=[1,21],v=[1,22],p=[1,23],$=[1,28],V=[6,26,27,28,29],w={trace:function(){},yy:{},symbols_:{error:2,start:3,eol:4,directive:5,PIE:6,document:7,showData:8,line:9,statement:10,txt:11,value:12,title:13,title_value:14,acc_title:15,acc_title_value:16,acc_descr:17,acc_descr_value:18,acc_descr_multiline_value:19,section:20,openDirective:21,typeDirective:22,closeDirective:23,":":24,argDirective:25,NEWLINE:26,";":27,EOF:28,open_directive:29,type_directive:30,arg_directive:31,close_directive:32,$accept:0,$end:1},terminals_:{2:"error",6:"PIE",8:"showData",11:"txt",12:"value",13:"title",14:"title_value",15:"acc_title",16:"acc_title_value",17:"acc_descr",18:"acc_descr_value",19:"acc_descr_multiline_value",20:"section",24:":",26:"NEWLINE",27:";",28:"EOF",29:"open_directive",30:"type_directive",31:"arg_directive",32:"close_directive"},productions_:[0,[3,2],[3,2],[3,2],[3,3],[7,0],[7,2],[9,2],[10,0],[10,2],[10,2],[10,2],[10,2],[10,1],[10,1],[10,1],[5,3],[5,5],[4,1],[4,1],[4,1],[21,1],[22,1],[25,1],[23,1]],performAction:function(e,n,s,r,l,i,T){var f=i.length-1;switch(l){case 4:r.setShowData(!0);break;case 7:this.$=i[f-1];break;case 9:r.addSection(i[f-1],r.cleanupValue(i[f]));break;case 10:this.$=i[f].trim(),r.setDiagramTitle(this.$);break;case 11:this.$=i[f].trim(),r.setAccTitle(this.$);break;case 12:case 13:this.$=i[f].trim(),r.setAccDescription(this.$);break;case 14:r.addSection(i[f].substr(8)),this.$=i[f].substr(8);break;case 21:r.parseDirective("%%{","open_directive");break;case 22:r.parseDirective(i[f],"type_directive");break;case 23:i[f]=i[f].trim().replace(/'/g,'"'),r.parseDirective(i[f],"arg_directive");break;case 24:r.parseDirective("}%%","close_directive","pie");break}},table:[{3:1,4:2,5:3,6:c,21:8,26:_,27:d,28:A,29:x},{1:[3]},{3:10,4:2,5:3,6:c,21:8,26:_,27:d,28:A,29:x},{3:11,4:2,5:3,6:c,21:8,26:_,27:d,28:A,29:x},t(o,a,{7:12,8:[1,13]}),t(u,[2,18]),t(u,[2,19]),t(u,[2,20]),{22:14,30:[1,15]},{30:[2,21]},{1:[2,1]},{1:[2,2]},t(h,S,{21:8,9:16,10:17,5:24,1:[2,3],11:I,13:N,15:m,17:k,19:v,20:p,29:x}),t(o,a,{7:25}),{23:26,24:[1,27],32:$},t([24,32],[2,22]),t(o,[2,6]),{4:29,26:_,27:d,28:A},{12:[1,30]},{14:[1,31]},{16:[1,32]},{18:[1,33]},t(h,[2,13]),t(h,[2,14]),t(h,[2,15]),t(h,S,{21:8,9:16,10:17,5:24,1:[2,4],11:I,13:N,15:m,17:k,19:v,20:p,29:x}),t(V,[2,16]),{25:34,31:[1,35]},t(V,[2,24]),t(o,[2,7]),t(h,[2,9]),t(h,[2,10]),t(h,[2,11]),t(h,[2,12]),{23:36,32:$},{32:[2,23]},t(V,[2,17])],defaultActions:{9:[2,21],10:[2,1],11:[2,2],35:[2,23]},parseError:function(e,n){if(n.recoverable)this.trace(e);else{var s=new Error(e);throw s.hash=n,s}},parse:function(e){var n=this,s=[0],r=[],l=[null],i=[],T=this.table,f="",R=0,j=0,Y=2,tt=1,at=i.slice.call(arguments,1),y=Object.create(this.lexer),L={yy:{}};for(var J in this.yy)Object.prototype.hasOwnProperty.call(this.yy,J)&&(L.yy[J]=this.yy[J]);y.setInput(e,L.yy),L.yy.lexer=y,L.yy.parser=this,typeof y.yylloc>"u"&&(y.yylloc={});var K=y.yylloc;i.push(K);var lt=y.options&&y.options.ranges;typeof L.yy.parseError=="function"?this.parseError=L.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function ct(){var P;return P=r.pop()||y.lex()||tt,typeof P!="number"&&(P instanceof Array&&(r=P,P=r.pop()),P=n.symbols_[P]||P),P}for(var b,F,E,Z,M={},W,O,et,G;;){if(F=s[s.length-1],this.defaultActions[F]?E=this.defaultActions[F]:((b===null||typeof b>"u")&&(b=ct()),E=T[F]&&T[F][b]),typeof E>"u"||!E.length||!E[0]){var q="";G=[];for(W in T[F])this.terminals_[W]&&W>Y&&G.push("'"+this.terminals_[W]+"'");y.showPosition?q="Parse error on line "+(R+1)+`:
`+y.showPosition()+`
Expecting `+G.join(", ")+", got '"+(this.terminals_[b]||b)+"'":q="Parse error on line "+(R+1)+": Unexpected "+(b==tt?"end of input":"'"+(this.terminals_[b]||b)+"'"),this.parseError(q,{text:y.match,token:this.terminals_[b]||b,line:y.yylineno,loc:K,expected:G})}if(E[0]instanceof Array&&E.length>1)throw new Error("Parse Error: multiple actions possible at state: "+F+", token: "+b);switch(E[0]){case 1:s.push(b),l.push(y.yytext),i.push(y.yylloc),s.push(E[1]),b=null,j=y.yyleng,f=y.yytext,R=y.yylineno,K=y.yylloc;break;case 2:if(O=this.productions_[E[1]][1],M.$=l[l.length-O],M._$={first_line:i[i.length-(O||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(O||1)].first_column,last_column:i[i.length-1].last_column},lt&&(M._$.range=[i[i.length-(O||1)].range[0],i[i.length-1].range[1]]),Z=this.performAction.apply(M,[f,j,R,L.yy,E[1],l,i].concat(at)),typeof Z<"u")return Z;O&&(s=s.slice(0,-1*O*2),l=l.slice(0,-1*O),i=i.slice(0,-1*O)),s.push(this.productions_[E[1]][0]),l.push(M.$),i.push(M._$),et=T[s[s.length-2]][s[s.length-1]],s.push(et);break;case 3:return!0}}return!0}},D=function(){var g={EOF:1,parseError:function(n,s){if(this.yy.parser)this.yy.parser.parseError(n,s);else throw new Error(n)},setInput:function(e,n){return this.yy=n||this.yy||{},this._input=e,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var e=this._input[0];this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e;var n=e.match(/(?:\r\n?|\n).*/g);return n?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),e},unput:function(e){var n=e.length,s=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-n),this.offset-=n;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),s.length-1&&(this.yylineno-=s.length-1);var l=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:s?(s.length===r.length?this.yylloc.first_column:0)+r[r.length-s.length].length-s[0].length:this.yylloc.first_column-n},this.options.ranges&&(this.yylloc.range=[l[0],l[0]+this.yyleng-n]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(e){this.unput(this.match.slice(e))},pastInput:function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?"...":"")+e.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var e=this.match;return e.length<20&&(e+=this._input.substr(0,20-e.length)),(e.substr(0,20)+(e.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var e=this.pastInput(),n=new Array(e.length+1).join("-");return e+this.upcomingInput()+`
`+n+"^"},test_match:function(e,n){var s,r,l;if(this.options.backtrack_lexer&&(l={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(l.yylloc.range=this.yylloc.range.slice(0))),r=e[0].match(/(?:\r\n?|\n).*/g),r&&(this.yylineno+=r.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-r[r.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+e[0].length},this.yytext+=e[0],this.match+=e[0],this.matches=e,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(e[0].length),this.matched+=e[0],s=this.performAction.call(this,this.yy,this,n,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),s)return s;if(this._backtrack){for(var i in l)this[i]=l[i];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var e,n,s,r;this._more||(this.yytext="",this.match="");for(var l=this._currentRules(),i=0;i<l.length;i++)if(s=this._input.match(this.rules[l[i]]),s&&(!n||s[0].length>n[0].length)){if(n=s,r=i,this.options.backtrack_lexer){if(e=this.test_match(s,l[i]),e!==!1)return e;if(this._backtrack){n=!1;continue}else return!1}else if(!this.options.flex)break}return n?(e=this.test_match(n,l[r]),e!==!1?e:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var n=this.next();return n||this.lex()},begin:function(n){this.conditionStack.push(n)},popState:function(){var n=this.conditionStack.length-1;return n>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(n){return n=this.conditionStack.length-1-Math.abs(n||0),n>=0?this.conditionStack[n]:"INITIAL"},pushState:function(n){this.begin(n)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(n,s,r,l){switch(r){case 0:return this.begin("open_directive"),29;case 1:return this.begin("type_directive"),30;case 2:return this.popState(),this.begin("arg_directive"),24;case 3:return this.popState(),this.popState(),32;case 4:return 31;case 5:break;case 6:break;case 7:return 26;case 8:break;case 9:break;case 10:return this.begin("title"),13;case 11:return this.popState(),"title_value";case 12:return this.begin("acc_title"),15;case 13:return this.popState(),"acc_title_value";case 14:return this.begin("acc_descr"),17;case 15:return this.popState(),"acc_descr_value";case 16:this.begin("acc_descr_multiline");break;case 17:this.popState();break;case 18:return"acc_descr_multiline_value";case 19:this.begin("string");break;case 20:this.popState();break;case 21:return"txt";case 22:return 6;case 23:return 8;case 24:return"value";case 25:return 28}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n\r]+)/i,/^(?:%%[^\n]*)/i,/^(?:[\s]+)/i,/^(?:title\b)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:pie\b)/i,/^(?:showData\b)/i,/^(?::[\s]*[\d]+(?:\.[\d]+)?)/i,/^(?:$)/i],conditions:{acc_descr_multiline:{rules:[17,18],inclusive:!1},acc_descr:{rules:[15],inclusive:!1},acc_title:{rules:[13],inclusive:!1},close_directive:{rules:[],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},open_directive:{rules:[1],inclusive:!1},title:{rules:[11],inclusive:!1},string:{rules:[20,21],inclusive:!1},INITIAL:{rules:[0,5,6,7,8,9,10,12,14,16,19,22,23,24,25],inclusive:!0}}};return g}();w.lexer=D;function C(){this.yy={}}return C.prototype=w,w.Parser=C,new C}();Q.parser=Q;const Dt=Q,rt=ot.pie,U={sections:{},showData:!1,config:rt};let B=U.sections,X=U.showData;const Tt=structuredClone(rt),It=()=>structuredClone(Tt),Vt=(t,c,_)=>{dt(void 0,t,c,_)},Ct=()=>{B=structuredClone(U.sections),X=U.showData,_t()},Ot=(t,c)=>{t=mt(t,nt()),B[t]===void 0&&(B[t]=c,st.debug(`added new section: ${t}, with value: ${c}`))},Pt=()=>B,Nt=t=>(t.substring(0,1)===":"&&(t=t.substring(1).trim()),Number(t.trim())),Lt=t=>{X=t},Ft=()=>X,zt={getConfig:It,parseDirective:Vt,clear:Ct,setDiagramTitle:ht,getDiagramTitle:ut,setAccTitle:pt,getAccTitle:ft,setAccDescription:yt,getAccDescription:gt,addSection:Ot,getSections:Pt,cleanupValue:Nt,setShowData:Lt,getShowData:Ft},Rt=t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,Mt=Rt,jt=t=>{const c=Object.entries(t).map(d=>({label:d[0],value:d[1]}));return $t().value(d=>d.value)(c)},Wt=(t,c,_,d)=>{var A,x;st.debug(`rendering pie chart
`+t);const o=d.db,a=nt(),u=vt(o.getConfig(),a.pie),h=450,S=((x=(A=document.getElementById(c))==null?void 0:A.parentElement)==null?void 0:x.offsetWidth)??u.useWidth,I=bt(c);I.attr("viewBox",`0 0 ${S} ${h}`),kt(I,h,S,u.useMaxWidth);const N=40,m=18,k=4,v=I.append("g");v.attr("transform","translate("+S/2+","+h/2+")");const{themeVariables:p}=a;let[$]=xt(p.pieOuterStrokeWidth);$??($=2);const V=u.textPosition,w=Math.min(S,h)/2-N,D=it().innerRadius(0).outerRadius(w),C=it().innerRadius(w*V).outerRadius(w*V);v.append("circle").attr("cx",0).attr("cy",0).attr("r",w+$/2).attr("class","pieOuterCircle");const g=o.getSections(),e=jt(g),n=[p.pie1,p.pie2,p.pie3,p.pie4,p.pie5,p.pie6,p.pie7,p.pie8,p.pie9,p.pie10,p.pie11,p.pie12],s=St(n);v.selectAll("mySlices").data(e).enter().append("path").attr("d",D).attr("fill",i=>s(i.data.label)).attr("class","pieCircle");let r=0;Object.keys(g).forEach(i=>{r+=g[i]}),v.selectAll("mySlices").data(e).enter().append("text").text(i=>(i.data.value/r*100).toFixed(0)+"%").attr("transform",i=>"translate("+C.centroid(i)+")").style("text-anchor","middle").attr("class","slice"),v.append("text").text(o.getDiagramTitle()).attr("x",0).attr("y",-(h-50)/2).attr("class","pieTitleText");const l=v.selectAll(".legend").data(s.domain()).enter().append("g").attr("class","legend").attr("transform",(i,T)=>{const f=m+k,R=f*s.domain().length/2,j=12*m,Y=T*f-R;return"translate("+j+","+Y+")"});l.append("rect").attr("width",m).attr("height",m).style("fill",s).style("stroke",s),l.data(e).append("text").attr("x",m+k).attr("y",m-k).text(i=>{const{label:T,value:f}=i.data;return o.getShowData()?`${T} [${f}]`:T})},Gt={draw:Wt},Qt={parser:Dt,db:zt,renderer:Gt,styles:Mt};export{Qt as diagram};
