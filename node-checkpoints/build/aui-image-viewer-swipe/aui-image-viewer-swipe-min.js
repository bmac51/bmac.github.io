YUI.add("aui-image-viewer-swipe",function(e,t){function i(){}var n="90%",r="90%";i.prototype={WIDGET_INDEX_ATTRIBUTE:"currentIndex",WIDGET_ITEM_SELECTOR:".image-viewer-image-container"},i.ATTRS={height:{value:n},swipe:{getter:function(t){return e.merge(t,{boundingBox:this.get("contentBox"),contentBox:this.getStdModNode("body")})}},width:{value:r}},e.Base.mix(e.ImageViewer,[e.WidgetSwipe,i])},"3.0.0pr1",{requires:["aui-image-viewer-base","aui-widget-swipe","event-resize"],skinnable:!0});
