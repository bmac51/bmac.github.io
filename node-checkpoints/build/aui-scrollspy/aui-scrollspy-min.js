YUI.add("aui-scrollspy",function(e,t){var n=e.getClassName,r=e.Lang,i="activate",s=n("active");e.Scrollspy=e.Base.create("scrollspy",e.Base,[],{activeLink:null,cachedLinks:null,initializer:function(){var t=this.get("scrollNode");this.publish(i,{defaultFn:this._defActivateEventFn}),t.on("scroll",e.bind(this._onScroll,this)),this.refresh()},clearCachedLinks:function(){this.cachedLinks=null},refresh:function(){var e=this._findLinkBestMatch();if(e===this.activeLink||!e&&!this.activeLink)return;this.fire(i,{newVal:e,prevVal:this.activeLink})},_defActivateEventFn:function(e){this._uiSetLink(e.newVal,e.prevVal)},_findLinkBestMatch:function(){var t=this._getValidLinks();return t.filter(e.bind(this._isLinkInViewport,this)).pop()},_getValidLinks:function(){return this.cachedLinks||(this.cachedLinks=this.get("target").all("a")),this.cachedLinks=this.cachedLinks.filter(function(e){var t=e.getAttribute("href");return t&&t.length>1&&t.charAt(0)==="#"}),this.cachedLinks},_isLinkInViewport:function(e){var t=this.get("offset"),n=this.get("scrollNode"),r=n.one(e.getAttribute("href"));return r&&n.getY()>=r.getY()-t},_onScroll:function(){this.refresh()},_uiSetLink:function(e,t){var n=this.get("activeGroup");t&&(t.ancestors(n).removeClass(s),this.activeLink=null),e&&(e.ancestors(n).addClass(s),this.activeLink=e)}},{ATTRS:{activeGroup:{validator:r.isString,value:"li, .dropdown"},offset:{validator:r.isNumber,value:10},scrollNode:{setter:e.one,writeOnce:"initOnly"},target:{setter:e.one,writeOnce:"initOnly"}}})},"3.0.0pr1",{requires:["base-build","node-screen","aui-classnamemanager"]});
