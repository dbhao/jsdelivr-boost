(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{KErT:function(e,a,t){"use strict";t.r(a),function(e){var n=t("q1tI"),l=t.n(n),r=t("kDDq"),c=t("0cfB"),s=t("/MKj"),i=t("kDLi"),m=t("ZGyg"),u=t("lzJ5"),o=t("sAJe"),d=t("rCnR");function h(){var e=function(e,a){a||(a=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(a)}}))}(["\n      margin-top: 28px;\n    "]);return h=function(){return e},e}var E=function(e){var a="admin/users/edit/".concat(e.id);return l.a.createElement("tr",{key:e.id},l.a.createElement("td",{className:"width-4 text-center link-td"},l.a.createElement("a",{href:a},l.a.createElement("img",{className:"filter-table__avatar",src:e.avatarUrl}))),l.a.createElement("td",{className:"link-td max-width-10"},l.a.createElement("a",{className:"ellipsis",href:a,title:e.login},e.login)),l.a.createElement("td",{className:"link-td max-width-10"},l.a.createElement("a",{className:"ellipsis",href:a,title:e.email},e.email)),l.a.createElement("td",{className:"link-td max-width-10"},l.a.createElement("a",{className:"ellipsis",href:a,title:e.name},e.name)),l.a.createElement("td",{className:"link-td"},e.lastSeenAtAge&&l.a.createElement("a",{href:a},e.lastSeenAtAge)),l.a.createElement("td",{className:"link-td"},e.isAdmin&&l.a.createElement("a",{href:a},l.a.createElement(i.Tooltip,{placement:"top",content:"Grafana Admin"},l.a.createElement(i.Icon,{name:"shield"})))),l.a.createElement("td",{className:"text-right"},Array.isArray(e.authLabels)&&e.authLabels.length>0&&l.a.createElement(d.a,{label:e.authLabels[0],removeIcon:!1,count:0})),l.a.createElement("td",{className:"text-right"},e.isDisabled&&l.a.createElement("span",{className:"label label-tag label-tag--gray"},"Disabled")))},g=Object(i.stylesFactory)((function(){return{table:Object(r.css)(h())}})),f={fetchUsers:o.j,changeQuery:o.c,changePage:o.b};a.default=Object(c.hot)(e)(Object(s.connect)((function(e){return{navModel:Object(u.a)(e.navIndex,"global-users"),users:e.userListAdmin.users,query:e.userListAdmin.query,showPaging:e.userListAdmin.showPaging,totalPages:e.userListAdmin.totalPages,page:e.userListAdmin.page}}),f)((function(e){var a=g();return Object(n.useEffect)((function(){e.fetchUsers()}),[]),l.a.createElement(m.a,{navModel:e.navModel},l.a.createElement(m.a.Contents,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement(i.HorizontalGroup,{justify:"space-between"},l.a.createElement(i.Input,{width:40,type:"text",placeholder:"Search user by login, email or name",tabIndex:1,autoFocus:!0,value:e.query,spellCheck:!1,onChange:function(a){return e.changeQuery(a.currentTarget.value)},prefix:l.a.createElement(i.Icon,{name:"search"})}),l.a.createElement(i.LinkButton,{href:"admin/users/create",variant:"primary"},"New user"))),l.a.createElement("div",{className:Object(r.cx)(a.table,"admin-list-table")},l.a.createElement("table",{className:"filter-table form-inline filter-table--hover"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",null,"Login"),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Seen ",l.a.createElement(i.Tooltip,{placement:"top",content:"Time since user was seen using Grafana"},l.a.createElement(i.Icon,{name:"question-circle"}))),l.a.createElement("th",null),l.a.createElement("th",{style:{width:"1%"}}))),l.a.createElement("tbody",null,e.users.map(E)))),e.showPaging&&l.a.createElement(i.Pagination,{numberOfPages:e.totalPages,currentPage:e.page,onNavigate:e.changePage}))))})))}.call(this,t("3UD+")(e))}}]);
//# sourceMappingURL=UserListAdminPage.f6aff061b5e274f402d0.js.map