YUI.add("aui-form-builder",function(e,t){var n=e.Lang,r=n.isObject,i=e.Array,s=e.PropertyBuilderAvailableField.getAvailableFieldById,o=function(t){return t instanceof e.PropertyBuilderAvailableField},u=function(t){return t instanceof e.FormBuilderField},a=e.namespace("FormBuilder.types"),f=e.getClassName,l="availableFields_field_",c="fields_field_",h=f("dd","dragging"),p=f("property","builder","field","draggable"),d=f("form","builder","field","hover"),v=f("form","builder","drop","zone"),m=f("form","builder","field"),g=f("form","builder","placeholder"),y='<div class="'+g+'"></div>',b=e.Component.create({NAME:"form-builder",ATTRS:{allowRemoveRequiredFields:{validator:e.Lang.isBoolean,value:!1},enableEditing:{value:!0},fieldsSortableListConfig:{setter:"_setFieldsSortableListConfig",validator:r,value:null},strings:{value:{addNode:"Add field",close:"Close",propertyName:"Property Name",save:"Save",settings:"Settings",value:"Value"}}},EXTENDS:e.PropertyBuilder,UI_ATTRS:["allowRemoveRequiredFields"],FIELDS_TAB:0,SETTINGS_TAB:1,prototype:{selectedFieldsLinkedSet:null,uniqueFieldsMap:null,initializer:function(){var t=this;t.uniqueFieldsMap=new e.Map,t.uniqueFieldsMap.after({put:e.bind(t._afterUniqueFieldsMapPut,t),remove:e.bind(t._afterUniqueFieldsMapRemove,t)}),t.selectedFieldsLinkedSet=new e.LinkedSet,t.selectedFieldsLinkedSet.after({add:e.bind(t._afterSelectedFieldsSetAdd,t),remove:e.bind(t._afterSelectedFieldsSetRemove,t)}),t.on({cancel:t._onCancel,"drag:end":t._onDragEnd,"drag:start":t._onDragStart,"drag:mouseDown":t._onDragMouseDown,save:t._onSave}),t.after("*:focusedChange",t._afterFieldFocusedChange),t.dropContainer.delegate("click",e.bind(t._onClickField,t),"."+m),t.dropContainer.delegate("mouseover",e.bind(t._onMouseOverField,t),"."+m),t.dropContainer.delegate("mouseout",e.bind(t._onMouseOutField,t),"."+m)},syncUI:function(){var e=this;e._setupAvailableFieldsSortableList(),e._setupFieldsSortableList()},closeEditProperties:function(){var t=this;t.tabView.selectChild(e.FormBuilder.FIELDS_TAB),t.tabView.disableTab(e.FormBuilder.SETTINGS_TAB)},createField:function(t){var n=this,r={builder:n,parent:n};return u(t)?t.setAttrs(r):(e.each(t,function(e,n){e===undefined&&delete t[n]}),t=new(n.getFieldClass(t.type||"field"))(e.mix(r,t))),t.addTarget(n),t},duplicateField:function(e){var t=this,n=t._getFieldNodeIndex(e.get("boundingBox")),r=t._cloneField(e,!0),i=r.get("boundingBox");i.setStyle("opacity",0),t.insertField(r,++n,e.get("parent")),i.show(!0)},editField:function(e){var t=this;u(e)&&(t.editingField=e,t.unselectFields(),t.selectFields(e))},getFieldClass:function(t){var n=a[t];return n?n:(e.log("The field type: ["+t+"] couldn't be found."),null)},getFieldProperties:function(e,t){return e.getProperties(t)},insertField:function(e,t,n){var r=this;n=n||r,e.get("parent").removeField(e),n.addField(e,t)},openEditProperties:function(t){var n=this;n.tabView.enableTab(e.FormBuilder.SETTINGS_TAB),n.tabView.selectChild(e.FormBuilder.SETTINGS_TAB),n.propertyList.set("data",n.getFieldProperties(t,!0))},plotField:function(e,t){var n=this,r=e.get("boundingBox");e.get("rendered")?t.append(r):e.render(t),n._syncUniqueField(e),n.fieldsSortableList.add(r)},plotFields:function(t,n){var r=this;n=n||r.dropContainer,t=t||r.get("fields"),n.setContent(""),e.each(t,function(e){r.plotField(e,n)})},selectFields:function(e){var t=this,n=t.selectedFieldsLinkedSet;i.each(i(e),function(e){n.add(e)})},simulateFocusField:function(e){var t=this,n=t.lastFocusedField;n&&n.blur(),t.lastFocusedField=e.focus()},unselectFields:function(e){var t=this,n=t.selectedFieldsLinkedSet;e||(e=n.values()),i.each(i(e),function(e){n.remove(e)})},_afterFieldFocusedChange:function(e){var t=this,n=e.target;e.newVal&&u(n)&&t.editField(n)},_afterSelectedFieldsSetAdd:function(e){var t=this;e.value.set("selected",!0),t.openEditProperties(e.value)},_afterSelectedFieldsSetRemove:function(e){var t=this;e.value.set("selected",!1),t.closeEditProperties()},_afterUniqueFieldsMapPut:function(e){var t=s(e.key),n;o(t)&&(n=t.get("node"),t.set("draggable",!1),n.unselectable())},_afterUniqueFieldsMapRemove:function(e){var t=s(e.key),n;o(t)&&(n=t.get("node"),t.set("draggable",!0),n.selectable())},_cloneField:function(t,n){var r=this,i=t.getAttributesForCloning();return n&&(i.fields=[],e.each(t.get("fields"),function(e,t){e.get("unique")||(i.fields[t]=r._cloneField(e,n))})),r.createField(i)},_dropField:function(t){var n=this,r=t.getData("availableField"),i=e.Widget.getByNode(t);if(o(r)){var s={hiddenAttributes:r.get("hiddenAttributes"),label:r.get("label"),localizationMap:r.get("localizationMap"),options:r.get("options"),predefinedValue:r.get("predefinedValue"),readOnlyAttributes:r.get("readOnlyAttributes"),required:r.get("required"),showLabel:r.get("showLabel"),tip:r.get("tip"),type:r.get("type"),unique:r.get("unique"),width:r.get("width")};s.unique&&(s.id=n._getFieldId(r),s.name=r.get("name")),i=n.createField(s)}if(u(i)){var a=t.get("parentNode"),f=e.Widget.getByNode(a),l=n._getFieldNodeIndex(t);u(f)||(f=n),n.insertField(i,l,f)}},_getFieldId:function(e){var t=e.get("id"),n;return o(e)?n=l:n=c,t.replace(n,"")},_getFieldNodeIndex:function(e){return e.get("parentNode").all("> *:not(."+g+")").indexOf(e)},_onCancel:function(e){var t=this;t.unselectFields(),e.halt()},_onDragEnd:function(t){var n=this,r=t.target,i=r.get("node");n._dropField(i),u(e.Widget.getByNode(i))||(i.remove(),r.set("node",n._originalDragNode))},_onClickField:function(t){var n=this,r=e.Widget.getByNode(t.target);n.simulateFocusField(r),t.stopPropagation()},_onDragMouseDown:function(t){var n=t.target.get("node"),r=e.PropertyBuilderAvailableField.getAvailableFieldByNode(n);o(r)&&!r.get("draggable")&&t.halt()},_onDragStart:function(t){var n=this,r=t.target,i=r.get("node");if(u(e.Widget.getByNode(i)))return;n._originalDragNode=i;var s=i.clone();i.placeBefore(s),r.set("node",s);var o=i.getData("availableField");s.setData("availableField",o),s.attr("id",""),s.hide(),i.removeClass(h),i.show(),n.fieldsSortableList
.add(s)},_onMouseOutField:function(t){var n=e.Widget.getByNode(t.currentTarget);n.controlsToolbar.hide(),n.get("boundingBox").removeClass(d),t.stopPropagation()},_onMouseOverField:function(t){var n=e.Widget.getByNode(t.currentTarget);n.controlsToolbar.show(),n.get("boundingBox").addClass(d),t.stopPropagation()},_onSave:function(){var e=this,t=e.editingField;if(t){var n=e.propertyList.get("data");n.each(function(e){t.set(e.get("attributeName"),e.get("value"))}),e._syncUniqueField(t)}},_setAvailableFields:function(t){var n=[];return i.each(t,function(t){n.push(o(t)?t:new e.FormBuilderAvailableField(t))}),n},_setFieldsSortableListConfig:function(t){var n=this,r=n.dropContainer;return e.merge({bubbleTargets:n,dd:{groups:["availableFields"],plugins:[{cfg:{horizontal:!1,scrollDelay:150},fn:e.Plugin.DDWinScroll}]},dropCondition:function(t){var n=t.drop.get("node"),r=e.Widget.getByNode(n);return u(r)?!0:!1},placeholder:e.Node.create(y),dropOn:"."+v,sortCondition:function(e){var t=e.drop.get("node");return t!==n.dropContainer&&r.contains(t)}},t||{})},_setupAvailableFieldsSortableList:function(){var t=this;if(!t.availableFieldsSortableList){var n=t.fieldsContainer.all("."+p);t.availableFieldsSortableList=new e.SortableList(e.merge(t.get("fieldsSortableListConfig"),{nodes:n}))}},_setupFieldsSortableList:function(){var t=this;t.fieldsSortableList||(t.fieldsSortableList=new e.SortableList(t.get("fieldsSortableListConfig")))},_syncUniqueField:function(e){var t=this,n=t._getFieldId(e),r=s(n);o(r)&&(r.get("unique")||e.get("unique"))&&t.uniqueFieldsMap.put(n,e)},_uiSetAllowRemoveRequiredFields:function(){var e=this;e.get("fields").each(function(e){e._uiSetRequired(e.get("required"))})}}});e.FormBuilder=b},"3.0.0pr1",{requires:["aui-button","aui-collection","aui-form-builder-available-field","aui-form-builder-field","aui-form-builder-field-button","aui-form-builder-field-checkbox","aui-form-builder-field-fieldset","aui-form-builder-field-file-upload","aui-form-builder-field-multiple-choice","aui-form-builder-field-radio","aui-form-builder-field-select","aui-form-builder-field-text","aui-form-builder-field-textarea","aui-property-builder","aui-property-builder-settings","aui-sortable-list","aui-tabview","aui-tooltip-base","escape","transition"],skinnable:!0});
