"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var affix_1 = require("antd/lib/affix");
var anchor_1 = require("antd/lib/anchor");
var alert_1 = require("antd/lib/alert");
var avatar_1 = require("antd/lib/avatar");
var back_top_1 = require("antd/lib/back-top");
var badge_1 = require("antd/lib/badge");
var breadcrumb_1 = require("antd/lib/breadcrumb");
var button_1 = require("antd/lib/button");
var calendar_1 = require("antd/lib/calendar");
var card_1 = require("antd/lib/card");
var collapse_1 = require("antd/lib/collapse");
var carousel_1 = require("antd/lib/carousel");
var cascader_1 = require("antd/lib/cascader");
var checkbox_1 = require("antd/lib/checkbox");
var col_1 = require("antd/lib/col");
var date_picker_1 = require("antd/lib/date-picker");
var divider_1 = require("antd/lib/divider");
var dropdown_1 = require("antd/lib/dropdown");
var form_1 = require("antd/lib/form");
var icon_1 = require("antd/lib/icon");
var input_1 = require("antd/lib/input");
var input_number_1 = require("antd/lib/input-number");
var layout_1 = require("antd/lib/layout");
var list_1 = require("antd/lib/list");
var locale_provider_1 = require("antd/lib/locale-provider");
var message_1 = require("antd/lib/message");
var menu_1 = require("antd/lib/menu");
var modal_1 = require("antd/lib/modal");
var notification_1 = require("antd/lib/notification");
var pagination_1 = require("antd/lib/pagination");
var popconfirm_1 = require("antd/lib/popconfirm");
var popover_1 = require("antd/lib/popover");
var progress_1 = require("antd/lib/progress");
var radio_1 = require("antd/lib/radio");
var rate_1 = require("antd/lib/rate");
var row_1 = require("antd/lib/row");
var select_1 = require("antd/lib/select");
var slider_1 = require("antd/lib/slider");
var spin_1 = require("antd/lib/spin");
var steps_1 = require("antd/lib/steps");
var switch_1 = require("antd/lib/switch");
var table_1 = require("antd/lib/table");
var transfer_1 = require("antd/lib/transfer");
var tree_1 = require("antd/lib/tree");
var tree_select_1 = require("antd/lib/tree-select");
var tabs_1 = require("antd/lib/tabs");
var tag_1 = require("antd/lib/tag");
var time_picker_1 = require("antd/lib/time-picker");
var timeline_1 = require("antd/lib/timeline");
var tooltip_1 = require("antd/lib/tooltip");
var mention_1 = require("antd/lib/mention");
var upload_1 = require("antd/lib/upload");
var version_1 = require("antd/lib/version");
function inspect(type, Comp) {
    console.log(type + " is", typeof Comp);
    if (typeof Comp === 'object' || typeof Comp === 'function')
        console.log("\t" + type + ' has keys:', Object.keys(Comp));
}
inspect("affix", affix_1.default);
inspect("anchor", anchor_1.default);
inspect("alert", alert_1.default);
inspect("avatar", avatar_1.default);
inspect("back-top", back_top_1.default);
inspect("badge", badge_1.default);
inspect("breadcrumb", breadcrumb_1.default);
inspect("button", button_1.default);
inspect("calendar", calendar_1.default);
inspect("card", card_1.default);
inspect("collapse", collapse_1.default);
inspect("carousel", carousel_1.default);
inspect("cascader", cascader_1.default);
inspect("checkbox", checkbox_1.default);
inspect("col", col_1.default);
inspect("date-picker", date_picker_1.default);
inspect("divider", divider_1.default);
inspect("dropdown", dropdown_1.default);
inspect("form", form_1.default);
inspect("icon", icon_1.default);
inspect("input", input_1.default);
inspect("input-number", input_number_1.default);
inspect("layout", layout_1.default);
inspect("list", list_1.default);
inspect("locale-provider", locale_provider_1.default);
inspect("message", message_1.default);
inspect("menu", menu_1.default);
inspect("modal", modal_1.default);
inspect("notification", notification_1.default);
inspect("pagination", pagination_1.default);
inspect("popconfirm", popconfirm_1.default);
inspect("popover", popover_1.default);
inspect("progress", progress_1.default);
inspect("radio", radio_1.default);
inspect("rate", rate_1.default);
inspect("row", row_1.default);
inspect("select", select_1.default);
inspect("slider", slider_1.default);
inspect("spin", spin_1.default);
inspect("steps", steps_1.default);
inspect("switch", switch_1.default);
inspect("table", table_1.default);
inspect("transfer", transfer_1.default);
inspect("tree", tree_1.default);
inspect("tree-select", tree_select_1.default);
inspect("tabs", tabs_1.default);
inspect("tag", tag_1.default);
inspect("time-picker", time_picker_1.default);
inspect("timeline", timeline_1.default);
inspect("tooltip", tooltip_1.default);
inspect("mention", mention_1.default);
inspect("upload", upload_1.default);
inspect("version", version_1.default);