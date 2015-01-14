if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/datasource-arrayschema/datasource-arrayschema.js']) {
   __coverage__['build/datasource-arrayschema/datasource-arrayschema.js'] = {"path":"build/datasource-arrayschema/datasource-arrayschema.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0},"b":{"1":[0,0],"2":[0,0,0],"3":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":34},"end":{"line":1,"column":53}}},"2":{"name":"(anonymous_2)","line":15,"loc":{"start":{"line":15,"column":28},"end":{"line":15,"column":39}}},"3":{"name":"(anonymous_3)","line":64,"loc":{"start":{"line":64,"column":17},"end":{"line":64,"column":34}}},"4":{"name":"(anonymous_4)","line":82,"loc":{"start":{"line":82,"column":22},"end":{"line":82,"column":34}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":106,"column":82}},"2":{"start":{"line":15,"column":0},"end":{"line":17,"column":2}},"3":{"start":{"line":16,"column":4},"end":{"line":16,"column":72}},"4":{"start":{"line":19,"column":0},"end":{"line":54,"column":3}},"5":{"start":{"line":56,"column":0},"end":{"line":101,"column":3}},"6":{"start":{"line":65,"column":8},"end":{"line":65,"column":59}},"7":{"start":{"line":83,"column":8},"end":{"line":85,"column":35}},"8":{"start":{"line":88,"column":8},"end":{"line":93,"column":9}},"9":{"start":{"line":89,"column":12},"end":{"line":92,"column":14}},"10":{"start":{"line":95,"column":8},"end":{"line":95,"column":36}},"11":{"start":{"line":97,"column":8},"end":{"line":97,"column":51}},"12":{"start":{"line":99,"column":8},"end":{"line":99,"column":79}},"13":{"start":{"line":103,"column":0},"end":{"line":103,"column":68}}},"branchMap":{"1":{"line":83,"type":"cond-expr","locations":[{"start":{"line":83,"column":128},"end":{"line":83,"column":147}},{"start":{"line":83,"column":150},"end":{"line":83,"column":156}}]},"2":{"line":83,"type":"binary-expr","locations":[{"start":{"line":83,"column":20},"end":{"line":83,"column":35}},{"start":{"line":83,"column":40},"end":{"line":83,"column":83}},{"start":{"line":83,"column":88},"end":{"line":83,"column":124}}]},"3":{"line":88,"type":"if","locations":[{"start":{"line":88,"column":8},"end":{"line":88,"column":8}},{"start":{"line":88,"column":8},"end":{"line":88,"column":8}}]}},"code":["(function () { YUI.add('datasource-arrayschema', function (Y, NAME) {","","/**"," * Extends DataSource with schema-parsing on array data."," *"," * @module datasource"," * @submodule datasource-arrayschema"," */","","/**"," * Adds schema-parsing to the DataSource Utility."," * @class DataSourceArraySchema"," * @extends Plugin.Base"," */","var DataSourceArraySchema = function() {","    DataSourceArraySchema.superclass.constructor.apply(this, arguments);","};","","Y.mix(DataSourceArraySchema, {","    /**","     * The namespace for the plugin. This will be the property on the host which","     * references the plugin instance.","     *","     * @property NS","     * @type String","     * @static","     * @final","     * @value \"schema\"","     */","    NS: \"schema\",","","    /**","     * Class name.","     *","     * @property NAME","     * @type String","     * @static","     * @final","     * @value \"dataSourceArraySchema\"","     */","    NAME: \"dataSourceArraySchema\",","","    /////////////////////////////////////////////////////////////////////////////","    //","    // DataSourceArraySchema Attributes","    //","    /////////////////////////////////////////////////////////////////////////////","","    ATTRS: {","        schema: {","            //value: {}","        }","    }","});","","Y.extend(DataSourceArraySchema, Y.Plugin.Base, {","    /**","    * Internal init() handler.","    *","    * @method initializer","    * @param config {Object} Config object.","    * @private","    */","    initializer: function(config) {","        this.doBefore(\"_defDataFn\", this._beforeDefDataFn);","    },","","    /**","     * Parses raw data into a normalized response.","     *","     * @method _beforeDefDataFn","     * @param tId {Number} Unique transaction ID.","     * @param request {Object} The request.","     * @param callback {Object} The callback object with the following properties:","     *     <dl>","     *         <dt>success (Function)</dt> <dd>Success handler.</dd>","     *         <dt>failure (Function)</dt> <dd>Failure handler.</dd>","     *     </dl>","     * @param data {Object} Raw data.","     * @protected","     */","    _beforeDefDataFn: function(e) {","        var data = (Y.DataSource.IO && (this.get(\"host\") instanceof Y.DataSource.IO) && Y.Lang.isString(e.data.responseText)) ? e.data.responseText : e.data,","            response = Y.DataSchema.Array.apply.call(this, this.get(\"schema\"), data),","            payload = e.details[0];","","        // Default","        if (!response) {","            response = {","                meta: {},","                results: data","            };","        }","","        payload.response = response;","","        this.get(\"host\").fire(\"response\", payload);","","        return new Y.Do.Halt(\"DataSourceArraySchema plugin halted _defDataFn\");","    }","});","","Y.namespace('Plugin').DataSourceArraySchema = DataSourceArraySchema;","","","}, 'patched-v3.17.0', {\"requires\": [\"datasource-local\", \"plugin\", \"dataschema-array\"]});","","}());"]};
}
var __cov_kL84FxfZGYNBp8ZzY3CHzQ = __coverage__['build/datasource-arrayschema/datasource-arrayschema.js'];
__cov_kL84FxfZGYNBp8ZzY3CHzQ.s['1']++;YUI.add('datasource-arrayschema',function(Y,NAME){__cov_kL84FxfZGYNBp8ZzY3CHzQ.f['1']++;__cov_kL84FxfZGYNBp8ZzY3CHzQ.s['2']++;var DataSourceArraySchema=function(){__cov_kL84FxfZGYNBp8ZzY3CHzQ.f['2']++;__cov_kL84FxfZGYNBp8ZzY3CHzQ.s['3']++;DataSourceArraySchema.superclass.constructor.apply(this,arguments);};__cov_kL84FxfZGYNBp8ZzY3CHzQ.s['4']++;Y.mix(DataSourceArraySchema,{NS:'schema',NAME:'dataSourceArraySchema',ATTRS:{schema:{}}});__cov_kL84FxfZGYNBp8ZzY3CHzQ.s['5']++;Y.extend(DataSourceArraySchema,Y.Plugin.Base,{initializer:function(config){__cov_kL84FxfZGYNBp8ZzY3CHzQ.f['3']++;__cov_kL84FxfZGYNBp8ZzY3CHzQ.s['6']++;this.doBefore('_defDataFn',this._beforeDefDataFn);},_beforeDefDataFn:function(e){__cov_kL84FxfZGYNBp8ZzY3CHzQ.f['4']++;__cov_kL84FxfZGYNBp8ZzY3CHzQ.s['7']++;var data=(__cov_kL84FxfZGYNBp8ZzY3CHzQ.b['2'][0]++,Y.DataSource.IO)&&(__cov_kL84FxfZGYNBp8ZzY3CHzQ.b['2'][1]++,this.get('host')instanceof Y.DataSource.IO)&&(__cov_kL84FxfZGYNBp8ZzY3CHzQ.b['2'][2]++,Y.Lang.isString(e.data.responseText))?(__cov_kL84FxfZGYNBp8ZzY3CHzQ.b['1'][0]++,e.data.responseText):(__cov_kL84FxfZGYNBp8ZzY3CHzQ.b['1'][1]++,e.data),response=Y.DataSchema.Array.apply.call(this,this.get('schema'),data),payload=e.details[0];__cov_kL84FxfZGYNBp8ZzY3CHzQ.s['8']++;if(!response){__cov_kL84FxfZGYNBp8ZzY3CHzQ.b['3'][0]++;__cov_kL84FxfZGYNBp8ZzY3CHzQ.s['9']++;response={meta:{},results:data};}else{__cov_kL84FxfZGYNBp8ZzY3CHzQ.b['3'][1]++;}__cov_kL84FxfZGYNBp8ZzY3CHzQ.s['10']++;payload.response=response;__cov_kL84FxfZGYNBp8ZzY3CHzQ.s['11']++;this.get('host').fire('response',payload);__cov_kL84FxfZGYNBp8ZzY3CHzQ.s['12']++;return new Y.Do.Halt('DataSourceArraySchema plugin halted _defDataFn');}});__cov_kL84FxfZGYNBp8ZzY3CHzQ.s['13']++;Y.namespace('Plugin').DataSourceArraySchema=DataSourceArraySchema;},'patched-v3.17.0',{'requires':['datasource-local','plugin','dataschema-array']});
