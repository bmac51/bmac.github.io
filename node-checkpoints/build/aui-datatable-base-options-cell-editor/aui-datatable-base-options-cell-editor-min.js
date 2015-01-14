YUI.add("aui-datatable-base-options-cell-editor",function(e,t){var n,r=e.Lang,i=e.Escape,s=e.getClassName("celleditor","edit"),o=e.getClassName("celleditor","edit","add","option"),u=e.getClassName("celleditor","edit","dd","handle"),a=e.getClassName("celleditor","edit","delete","option"),f=e.getClassName("celleditor","edit","hide","option"),l=e.getClassName("celleditor","edit","input","name"),c=e.getClassName("celleditor","edit","input","value"),h=e.getClassName("celleditor","edit","label"),p=e.getClassName("celleditor","edit","link"),d=e.getClassName("celleditor","edit","option","row"),v=e.getClassName("glyphicon"),m=e.getClassName("glyphicon","resize","vertical");n=e.Component.create({NAME:"optionsCellEditor",ATTRS:{inputFormatter:{value:null},options:{setter:"_setOptions",value:{},validator:r.isObject},outputFormatter:{value:null},selectedAttrName:{value:"selected",validator:r.isString},strings:{value:{add:"Add",cancel:"Cancel",addOption:"Add option",edit:"Edit options",editOptions:"Edit option(s)",name:"Name",remove:"Remove",save:"Save",stopEditing:"Stop editing",value:"Value"}}},EXTENDS:e.BaseCellEditor,UI_ATTRS:["options"],prototype:{EDIT_TEMPLATE:'<div class="'+s+'"></div>',EDIT_OPTION_ROW_TEMPLATE:'<div class="'+d+'">'+'<span class="'+[u,v,m].join(" ")+'"></span>'+'<input class="'+l+'" size="7" placeholder="{titleName}" title="{titleName}" type="text" value="{valueName}" /> '+'<input class="'+c+'" size="7" placeholder="{titleValue}" title="{titleValue}" type="text" value="{valueValue}" /> '+'<a class="'+[p,a].join(" ")+'" href="javascript:void(0);">{remove}</a> '+"</div>",EDIT_ADD_LINK_TEMPLATE:'<a class="'+[p,o].join(" ")+'" href="javascript:void(0);">{addOption}</a> ',EDIT_LABEL_TEMPLATE:'<div class="'+h+'">{editOptions}</div>',editContainer:null,editSortable:null,options:null,initializer:function(){var e=this;e.on("edit",e._onEditEvent),e.on("save",e._onSave),e.after("initToolbar",e._afterInitToolbar)},addNewOption:function(t,n){var r=this,i=r.editContainer.one("."+o),s=e.Node.create(r._createEditOption(t||"",n||""));i.placeBefore(s),s.one("input").focus()},removeOption:function(e){e.remove()},saveOptions:function(){var e=this,t=e.editContainer;if(t){var n=t.all("."+l),r=t.all("."+c),i={};n.each(function(e,t){var n=e.val(),s=r.item(t).val();i[s]=n}),e.set("options",i),e._uiSetValue(e.get("value")),e.toggleEdit()}},toggleEdit:function(){var e=this;e.editContainer.toggle()},_createOptions:function(t){var n=this,s=n.elements,o=[],u=[],a=n.OPTION_TEMPLATE,f=n.OPTION_WRAPPER;e.each(t,function(t,n){var s={id:e.guid(),label:i.html(t),name:i.html(n),value:i.html(n)};a&&o.push(r.sub(a,s)),f&&u.push(r.sub(f,s))});var l=e.NodeList.create(o.join("")),c=e.NodeList.create(u.join(""));c.size()?(c.each(function(e,t){e.prepend(l.item(t))}),s.setContent(c)):s.setContent(l),n.options=l},_createEditBuffer:function(){var t=this,n=t.getStrings(),i=[];return i.push(r.sub(t.EDIT_LABEL_TEMPLATE,{editOptions:n.editOptions})),e.each(t.get("options"),function(e,n){i.push(t._createEditOption(e,n))}),i.push(r.sub(t.EDIT_ADD_LINK_TEMPLATE,{addOption:n.addOption})),i.join("")},_createEditOption:function(e,t){var n=this,s=n.getStrings();return r.sub(n.EDIT_OPTION_ROW_TEMPLATE,{remove:s.remove,titleName:i.html(s.name),titleValue:i.html(s.value),valueName:i.html(e),valueValue:i.html(t)})},_defInitEditFn:function(){var t=this,n=e.Node.create(t.EDIT_TEMPLATE);n.delegate("click",e.bind(t._onEditLinkClickEvent,t),"."+p),n.delegate("keydown",e.bind(t._onEditKeyEvent,t),"input"),t.editContainer=n,t.setStdModContent(e.WidgetStdMod.BODY,n.hide(),e.WidgetStdMod.AFTER),t.editSortable=(new e.Sortable({container:n,handles:["."+u],nodes:"."+d,opacity:".3"})).delegate.dd.plug(e.Plugin.DDConstrained,{constrain:n,stickY:!0}),t._syncEditOptionsUI()},_getSelectedOptions:function(){var t=this,n=[];return t.options.each(function(e){e.get(t.get("selectedAttrName"))&&n.push(e)}),e.all(n)},_onEditEvent:function(){var e=this;e._handleInitEditEvent(),e.toggleEdit(),e._syncEditOptionsUI()},_onEditLinkClickEvent:function(e){var t=this,n=e.currentTarget;n.test("."+o)?t.addNewOption():n.test("."+f)?t.toggleEdit():n.test("."+a)&&t.removeOption(n.ancestor("."+d)),e.halt()},_onEditKeyEvent:function(e){var t=this,n=e.currentTarget;if(e.isKey("return")){var r=n.next("input");r?r.selectText():t.addNewOption(),e.halt()}},_onSave:function(){var e=this;e.saveOptions()},_setOptions:function(t){var n={};return r.isArray(t)?e.Array.each(t,function(e){n[e]=e}):r.isObject(t)&&(n=t),n},_syncEditOptionsUI:function(){var e=this;e.editContainer.setContent(e._createEditBuffer())},_uiSetOptions:function(e){var t=this;t._createOptions(e),t._uiSetValue(t.get("value")),t._syncElementsName()},_uiSetValue:function(t){var n=this,s=n.options;return s&&s.size()&&(s.set(n.get("selectedAttrName"),!1),r.isValue(t)&&(r.isArray(t)||(t=String(t).split(",")),e.Array.each(t,function(e){s.filter('[value="'+i.html(r.trim(e))+'"]').set(n.get("selectedAttrName"),!0)}))),t}}}),e.BaseOptionsCellEditor=n},"3.0.0pr1",{requires:["aui-datatable-base-cell-editor","escape"]});
