import{l as e,o,c,g as a,h as t,F as l,p,a as n,q as u}from"./app.7cb6c2a7.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const r={},k=p(`<h2 id="\u5B89\u88C5\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u4F7F\u7528" aria-hidden="true">#</a> \u5B89\u88C5\u4F7F\u7528</h2><div class="custom-container tip"><p class="custom-container-title">\u4ECB\u7ECD</p><p>\u672C\u7EC4\u4EF6\u662F\u4E00\u4E2A\u57FA\u4E8E <code>vue3</code> \u7F16\u5199\u7684\u56FE\u7247\u9884\u89C8\u63D2\u4EF6\uFF0C\u652F\u6301\u5355\u56FE\u548C\u591A\u56FE\u9884\u89C8\uFF0C\u652F\u6301\u56FE\u7247\u65CB\u8F6C\uFF0C\u7F29\u653E\uFF0C\u79FB\u52A8\u7B49\u529F\u80FD</p></div><h3 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> v3-img-preview --save
<span class="token comment"># or</span>
<span class="token function">yarn</span> <span class="token function">add</span> v3-img-preview
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h3><ol><li>\u5728 <code>main.js</code> \u4E2D\u5F15\u5165</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>
<span class="token keyword">import</span> v3ImgPreview <span class="token keyword">from</span> <span class="token string">&#39;v3-img-preview&#39;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>v3ImgPreview<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">/* \u5168\u5C40\u914D\u7F6E */</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="2"><li>\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528</li></ol><blockquote><p>\u7EC4\u4EF6\u652F\u6301\u4E24\u79CD\u8C03\u7528\u65B9\u5F0F\uFF1A\u7ECF\u8FC7 <code>app.use</code> \u6CE8\u518C\u540E\uFF0C\u5168\u5C40\u5C5E\u6027\u4E0A\u4F1A\u7ED1\u5B9A <code>$v3ImgPreviewFn</code> \u65B9\u6CD5\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8C03\u7528\uFF0C\u60A8\u4E5F\u53EF\u4EE5\u901A\u8FC7\u76F4\u63A5\u5BFC\u5165 <code>v3ImgPreviewFn</code> \u65B9\u6CD5\u4F7F\u7528\uFF0C\u4F7F\u7528\u65B9\u5F0F\u5982\u4E0B\uFF1A</p></blockquote><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleClick<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5BFC\u51FA\u65B9\u6CD5\u8C03\u7528<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleImgPreview<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5B9E\u4F8B\u8C03\u7528<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> v3ImgPreviewFn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;v3-img-preview&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ServeDev&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5BFC\u51FA\u65B9\u6CD5\u8C03\u7528</span>
      <span class="token function">v3ImgPreviewFn</span><span class="token punctuation">(</span>
        <span class="token string">&#39;https://t7.baidu.com/it/u=1595072465,3644073269&amp;fm=193&amp;f=GIF&#39;</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// or</span>
    <span class="token keyword">const</span> <span class="token function-variable function">handleImgPreview</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5168\u5C40\u65B9\u6CD5\u8C03\u7528</span>
      instance<span class="token punctuation">.</span>proxy<span class="token punctuation">.</span><span class="token function">$v3ImgPreviewFn</span><span class="token punctuation">(</span>
        <span class="token string">&#39;https://t7.baidu.com/it/u=1595072465,3644073269&amp;fm=193&amp;f=GIF&#39;</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> handleClick<span class="token punctuation">,</span> handleImgPreview <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h3 id="\u672C\u5730\u56FE\u7247\u9884\u89C8" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u56FE\u7247\u9884\u89C8" aria-hidden="true">#</a> \u672C\u5730\u56FE\u7247\u9884\u89C8</h3><blockquote><p>\u6CE8\uFF1A\u672C\u5730\u56FE\u7247\u4E0D\u80FD\u4F7F\u7528\u76F8\u5BF9\u8DEF\u5F84\u65B9\u5F0F\u4F20\u9012\u5C5E\u6027\u53EA\u80FD\u901A\u8FC7 <code>require</code> \u65B9\u5F0F\u5F15\u5165\u56FE\u7247\u8FDB\u884C\u9884\u89C8\uFF0C\u82E5\u60A8\u7684\u56FE\u7247\u653E\u5728\u9879\u76EE <code>public</code> \u76EE\u5F55\u4E0B\uFF0C\u5219\u53EF\u4EE5\u901A\u8FC7<code>/images/xxx.png</code> \u7684\u65B9\u5F0F\u8BBF\u95EE</p></blockquote><blockquote><p>\u539F\u56E0\uFF1A\u5728 <code>webpack</code> or <code>vite</code> \u4E2D\u4F1A\u5C06\u56FE\u7247\u56FE\u7247\u6765\u5F53\u505A\u6A21\u5757\u6765\u7528\uFF0C\u56E0\u4E3A\u662F\u52A8\u6001\u52A0\u8F7D\u7684\uFF0C\u6240\u4EE5 <code>url-loader</code> \u5C06\u65E0\u6CD5\u89E3\u6790\u56FE\u7247\u5730\u5740\uFF0C\u7136\u540E <code>npm run serve</code> \u4E4B\u540E\u5BFC\u81F4\u8DEF\u5F84\u6CA1\u6709\u88AB\u52A0\u5DE5\uFF0C\u6545\u800C\u65E0\u6CD5\u4F7F\u7528\u76F8\u5BF9\u8DEF\u5F84\u5F15\u5165\u7ECF\u8FC7\u6253\u5305\u6784\u5EFA\u8FC7\u7684\u56FE\u7247\u8D44\u6E90</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> v3ImgPreviewFn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;v3-img-preview&#39;</span>
<span class="token keyword">const</span> imgUrl1 <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./images/1.jpg&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> imgUrl2 <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./images/2.jpg&#39;</span><span class="token punctuation">)</span>

<span class="token function">v3ImgPreviewFn</span><span class="token punctuation">(</span><span class="token string">&#39;./images/2.jpg&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u274C \u9519\u8BEF\u7684\u5F15\u7528\u65B9\u5F0F</span>

<span class="token comment">// \u5355\u5F20\u56FE\u7247</span>
<span class="token function">v3ImgPreviewFn</span><span class="token punctuation">(</span>imgUrl1<span class="token punctuation">)</span> <span class="token comment">// \u2705 \u6B63\u786E\u65B9\u5F0F</span>

<span class="token comment">// \u591A\u5F20\u56FE\u7247</span>
<span class="token function">v3ImgPreviewFn</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">images</span><span class="token operator">:</span> <span class="token punctuation">[</span>imgUrl1<span class="token punctuation">,</span> imgUrl2<span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// \u2705 \u6B63\u786E\u65B9\u5F0F</span>
<span class="token comment">// or</span>
<span class="token function">v3ImgPreviewFn</span><span class="token punctuation">(</span><span class="token punctuation">[</span>imgUrl1<span class="token punctuation">,</span> imgUrl2<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// \u2705 \u6B63\u786E\u65B9\u5F0F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h3><h4 id="\u5355\u5F20\u56FE\u7247" tabindex="-1"><a class="header-anchor" href="#\u5355\u5F20\u56FE\u7247" aria-hidden="true">#</a> \u5355\u5F20\u56FE\u7247</h4><ol><li>\u672C\u5730\u56FE\u7247</li></ol>`,17),E=n("p",null,"single-img",-1),C=n("ol",{start:"2"},[n("li",null,"\u7F51\u7EDC\u56FE\u7247")],-1),d=n("p",null,"link-src",-1),D=n("h4",{id:"\u591A\u56FE\u9884\u89C8",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u591A\u56FE\u9884\u89C8","aria-hidden":"true"},"#"),u(" \u591A\u56FE\u9884\u89C8")],-1),m=n("p",null,"multiple-img",-1),F=p(`<h3 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h3><blockquote><p>\u4EE5\u4E0B\u5C5E\u6027\u9002\u7528\u4E8E\u4F20\u9012\u5BF9\u8C61\u65F6\u4F7F\u7528\uFF0C\u82E5\u53EA\u4F20\u9012 url\uFF0C\u60A8\u4E5F\u53EF\u4EE5\u76F4\u63A5\u8C03\u7528\u65B9\u6CD5\u4F20\u9012 v3ImgPreviewFn(&quot;http://www.xxxxxx.png&quot;)</p></blockquote><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>url</td><td>\u56FE\u7247 url</td><td><code>string</code></td><td>-</td></tr><tr><td>keyboard</td><td>\u662F\u5426\u4F7F\u7528\u952E\u76D8\u5FEB\u6377\u952E</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>images</td><td>\u56FE\u7247\u6570\u7EC4\uFF0C\u7528\u4E8E\u5C55\u793A\u591A\u4E2A\u56FE\u7247\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u8BE5\u5C5E\u6027\u4F20\u9012\u591A\u5F20\u56FE\u7247</td><td><code>Array</code></td><td>-</td></tr><tr><td>escClose</td><td>\u662F\u5426\u652F\u6301 esc \u5173\u95ED\uFF0C\u6CE8\u610F\uFF1A<code>keyboard</code>\u7981\u7528\u65F6\u6B64\u529F\u80FD\u4E5F\u5C06\u7981\u7528</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>showCloseBtn</td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>showToolbar</td><td>\u662F\u5426\u663E\u793A\u5DE5\u5177\u680F</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>showArrowBtn</td><td>\u662F\u5426\u663E\u793A\u5DE6\u53F3\u7BAD\u5934</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>index</td><td>\u591A\u56FE\u5C55\u793A\u65F6\uFF0C\u663E\u793A\u56FE\u7247\u7684\u7D22\u5F15\uFF0C\u9ED8\u8BA4\u4ECE\u7B2C\u4E00\u5F20\u5F00\u59CB</td><td><code>number</code></td><td>0</td></tr></tbody></table><h3 id="\u5168\u5C40\u914D\u7F6E\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u914D\u7F6E\u65B9\u5F0F" aria-hidden="true">#</a> \u5168\u5C40\u914D\u7F6E\u65B9\u5F0F</h3><p>\u6211\u4EEC\u6240\u6709\u7684 API \u90FD\u652F\u6301\u5168\u5C40\u914D\u7F6E\uFF0C\u60A8\u53EF\u4EE5\u5728\u6CE8\u518C\u63D2\u4EF6\u7684\u65F6\u5019\u914D\u7F6E\u5168\u5C40\u5C5E\u6027</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>
<span class="token keyword">import</span> VImagesPreview <span class="token keyword">from</span> <span class="token string">&#39;v3-img-preview&#39;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// \u5168\u5C40\u914D\u7F6E\u5C5E\u6027</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VImagesPreview<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">keyboard</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">escClose</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">showToolbar</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h4 id="\u914D\u7F6E\u4F18\u5148\u7EA7" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u4F18\u5148\u7EA7" aria-hidden="true">#</a> \u914D\u7F6E\u4F18\u5148\u7EA7</h4><blockquote><p>\u914D\u7F6E\u9879\u7684\u4F18\u5148\u7EA7\u4E3A <strong>\u7EC4\u4EF6\u5185\u4F20\u5165\u914D\u7F6E &gt; \u5168\u5C40\u914D\u7F6E &gt; \u9ED8\u8BA4\u503C</strong></p></blockquote><h3 id="\u5FEB\u6377\u952E" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u6377\u952E" aria-hidden="true">#</a> \u5FEB\u6377\u952E</h3><table><thead><tr><th>\u5FEB\u6377\u952E</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>A \u2190</td><td>\u4E0A\u4E00\u5F20</td></tr><tr><td>D \u2192</td><td>\u4E0B\u4E00\u957F</td></tr><tr><td>S \u2193</td><td>\u7F29\u5C0F</td></tr><tr><td>W \u2191</td><td>\u653E\u5927</td></tr><tr><td>Q</td><td>\u5DE6\u65CB\u8F6C 90\xB0</td></tr><tr><td>E</td><td>\u53F3\u65CB\u8F6C 90\xB0</td></tr><tr><td>Space</td><td>\u590D\u4F4D</td></tr></tbody></table>`,10);function g(b,v){const s=e("demo-block");return o(),c(l,null,[k,a(s,{componentName:"single-img",options:JSON.parse(decodeURI("%7B%22components%22:%7B%7D,%22componentsDir%22:%22/Volumes/office/code/Plugins/v3-img-preview/doc/docs/examples%22,%22componentsPatterns%22:%5B%22**/*.vue%22%5D%7D")),description:"",source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eimg%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Esrc%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%2Fimages%2Fimg1.jpg%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Ealt%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click.stop%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EhandlePreview(%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3E%2Fimages%2Fimg1.jpg%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3E)%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20v3ImgPreviewFn%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'v3-img-preview'%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3EhandlePreview%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3E%3Cspan%20class%3D%22token%20literal-property%20property%22%3Esrc%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20string%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Ev3ImgPreviewFn%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3Esrc%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E"},{default:t(()=>[E]),_:1},8,["options"]),C,a(s,{componentName:"link-src",options:JSON.parse(decodeURI("%7B%22components%22:%7B%7D,%22componentsDir%22:%22/Volumes/office/code/Plugins/v3-img-preview/doc/docs/examples%22,%22componentsPatterns%22:%5B%22**/*.vue%22%5D%7D")),description:"",source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eimg%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Asrc%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eurl%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ealt%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EhandlePreview%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20v3ImgPreviewFn%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'v3-img-preview'%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20url%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20string%22%3E'https%3A%2F%2Fimg0.baidu.com%2Fit%2Fu%3D3155150237%2C2943070590%26amp%3Bfm%3D253%26amp%3Bfmt%3Dauto%26amp%3Bapp%3D138%26amp%3Bf%3DJPEG%3Fw%3D667%26amp%3Bh%3D500'%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3EhandlePreview%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20function%22%3Ev3ImgPreviewFn%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3Eurl%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E"},{default:t(()=>[d]),_:1},8,["options"]),D,a(s,{componentName:"multiple-img",options:JSON.parse(decodeURI("%7B%22components%22:%7B%7D,%22componentsDir%22:%22/Volumes/office/code/Plugins/v3-img-preview/doc/docs/examples%22,%22componentsPatterns%22:%5B%22**/*.vue%22%5D%7D")),description:"",source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eimg%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Ewidth%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E200%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Eheight%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E130%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Ev-for%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E(img%2C%20index)%20of%20images%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Asrc%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eimg%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Ealt%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click.stop%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EhandlePreview(index)%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20v3ImgPreviewFn%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'v3-img-preview'%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20images%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E1%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E2%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E3%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E4%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E5%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Emap%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3Ei%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20template-string%22%3E%3Cspan%20class%3D%22token%20template-punctuation%20string%22%3E%60%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E%2Fimages%2Fimg%3C%2Fspan%3E%3Cspan%20class%3D%22token%20interpolation%22%3E%3Cspan%20class%3D%22token%20interpolation-punctuation%20punctuation%22%3E%24%7B%3C%2Fspan%3Ei%3Cspan%20class%3D%22token%20interpolation-punctuation%20punctuation%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E.jpg%3C%2Fspan%3E%3Cspan%20class%3D%22token%20template-punctuation%20string%22%3E%60%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3EhandlePreview%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3E%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eindex%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20number%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20console%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Elog%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'-%3E%20index'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20index%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20function%22%3Ev3ImgPreviewFn%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20images%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20index%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E"},{default:t(()=>[m]),_:1},8,["options"]),F],64)}var f=i(r,[["render",g]]);export{f as default};
