if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-image-viewer-swipe/aui-image-viewer-swipe.js']) {
   __coverage__['build/aui-image-viewer-swipe/aui-image-viewer-swipe.js'] = {"path":"build/aui-image-viewer-swipe/aui-image-viewer-swipe.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0},"b":{},"f":{"1":0,"2":0,"3":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":34},"end":{"line":1,"column":53}}},"2":{"name":"ImageViewerSwipe","line":13,"loc":{"start":{"line":13,"column":0},"end":{"line":13,"column":28}}},"3":{"name":"(anonymous_3)","line":39,"loc":{"start":{"line":39,"column":16},"end":{"line":39,"column":32}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":62,"column":111}},"2":{"start":{"line":10,"column":0},"end":{"line":11,"column":26}},"3":{"start":{"line":13,"column":0},"end":{"line":13,"column":30}},"4":{"start":{"line":15,"column":0},"end":{"line":18,"column":2}},"5":{"start":{"line":20,"column":0},"end":{"line":57,"column":2}},"6":{"start":{"line":40,"column":12},"end":{"line":43,"column":15}},"7":{"start":{"line":59,"column":0},"end":{"line":59,"column":61}}},"branchMap":{},"code":["(function () { YUI.add('aui-image-viewer-swipe', function (A, NAME) {","","/**"," * This adds the functionality of swiping to go to the previous/ image in the"," * viewer. Will be mixed into ImageViewer automatically when loaded."," *"," * @module aui-image-viewer-swipe"," */","","var DEFAULT_HEIGHT = '90%',","    DEFAULT_WIDTH = '90%';","","function ImageViewerSwipe() {}","","ImageViewerSwipe.prototype = {","    WIDGET_INDEX_ATTRIBUTE: 'currentIndex',","    WIDGET_ITEM_SELECTOR: '.image-viewer-image-container'","};","","ImageViewerSwipe.ATTRS = {","    /**","     * The height of the image viewer.","     *","     * @attribute height","     * @default '90%'","     * @type {String | Number}","     */","    height: {","        value: DEFAULT_HEIGHT","    },","","    /**","     * Turns the swipe interaction on/off.","     *","     * @attribute swipe","     * @type {Object|Boolean}","     */","    swipe: {","        getter: function(value) {","            return A.merge(value, {","                boundingBox: this.get('contentBox'),","                contentBox: this.getStdModNode('body')","            });","        }","    },","","    /**","     * The width of the image viewer.","     *","     * @attribute width","     * @default '90%'","     * @type {String | Number}","     */","    width: {","        value: DEFAULT_WIDTH","    }","};","","A.Base.mix(A.ImageViewer, [A.WidgetSwipe, ImageViewerSwipe]);","","","}, '3.0.0pr1', {\"requires\": [\"aui-image-viewer-base\", \"aui-widget-swipe\", \"event-resize\"], \"skinnable\": true});","","}());"]};
}
var __cov_jqeCgVB08DY9aDe2uNRELQ = __coverage__['build/aui-image-viewer-swipe/aui-image-viewer-swipe.js'];
__cov_jqeCgVB08DY9aDe2uNRELQ.s['1']++;YUI.add('aui-image-viewer-swipe',function(A,NAME){__cov_jqeCgVB08DY9aDe2uNRELQ.f['1']++;__cov_jqeCgVB08DY9aDe2uNRELQ.s['2']++;var DEFAULT_HEIGHT='90%',DEFAULT_WIDTH='90%';__cov_jqeCgVB08DY9aDe2uNRELQ.s['3']++;function ImageViewerSwipe(){__cov_jqeCgVB08DY9aDe2uNRELQ.f['2']++;}__cov_jqeCgVB08DY9aDe2uNRELQ.s['4']++;ImageViewerSwipe.prototype={WIDGET_INDEX_ATTRIBUTE:'currentIndex',WIDGET_ITEM_SELECTOR:'.image-viewer-image-container'};__cov_jqeCgVB08DY9aDe2uNRELQ.s['5']++;ImageViewerSwipe.ATTRS={height:{value:DEFAULT_HEIGHT},swipe:{getter:function(value){__cov_jqeCgVB08DY9aDe2uNRELQ.f['3']++;__cov_jqeCgVB08DY9aDe2uNRELQ.s['6']++;return A.merge(value,{boundingBox:this.get('contentBox'),contentBox:this.getStdModNode('body')});}},width:{value:DEFAULT_WIDTH}};__cov_jqeCgVB08DY9aDe2uNRELQ.s['7']++;A.Base.mix(A.ImageViewer,[A.WidgetSwipe,ImageViewerSwipe]);},'3.0.0pr1',{'requires':['aui-image-viewer-base','aui-widget-swipe','event-resize'],'skinnable':true});
