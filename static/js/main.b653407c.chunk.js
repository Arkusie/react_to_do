(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(21)},17:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(10),i=n.n(o),c=(n(17),n(1)),l=n(2),s=n(4),u=n(3),p=n(5),h=n(6),d=n.n(h),m=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"deleteProject",value:function(e){console.log("delete test"),this.props.onDelete(e)}},{key:"render",value:function(){return r.a.createElement("li",null,r.a.createElement("a",{href:"#",onClick:this.deleteProject.bind(this,this.props.project.id)}," ","X"),this.props.project.title," - ",this.props.project.category," ")}}]),t}(a.Component),j=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"deleteProject",value:function(e){this.props.onDelete(e)}},{key:"render",value:function(){var e,t=this;return this.props.projects&&(e=this.props.projects.map(function(e){return r.a.createElement(m,{onDelete:t.deleteProject.bind(t),key:e.title,project:e})})),console.log(this.props),r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"do it!"),e)}}]),t}(a.Component),f=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={newProject:{}},e}return Object(p.a)(t,e),Object(l.a)(t,[{key:"handleSubmit",value:function(e){""===this.refs.title.value?alert("title is required"):this.setState({newProject:{id:d.a.v4(),title:this.refs.title.value,category:this.refs.category.value}},function(){console.log(this.state),this.props.addProject(this.state.newProject)}),console.log(this.refs.title.value),e.preventDefault()}},{key:"render",value:function(){var e=this.props.categories.map(function(e){return r.a.createElement("option",{key:e,value:e},e)});return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Add new ToDos"),r.a.createElement("form",{onSubmit:this.handleSubmit.bind(this)},r.a.createElement("div",null,r.a.createElement("label",null,"What is there to do? "),r.a.createElement("input",{type:"text",ref:"title"})),r.a.createElement("div",null,r.a.createElement("label",null,"level of importance "),r.a.createElement("select",{ref:"category"},e)),r.a.createElement("input",{type:"submit",value:"submit"})))}}]),t}(a.Component);f.defaultProps={categories:["common","important"," uber important"]};var v=f,b=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={projects:[]},e}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.setState({projects:[{id:d.a.v4(),title:"Wake up",category:"1"},{id:d.a.v4(),title:"eat breakfast",category:"2"},{id:d.a.v4(),title:"do nothing",category:"3"}]})}},{key:"handleAddProject",value:function(e){var t=this.state.projects;t.push(e),this.setState({projects:t})}},{key:"handleDeleteProject",value:function(e){var t=this.state.projects,n=t.findIndex(function(t){return t.id===e});t.splice(n,1),this.setState({projects:t})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App"},"React ToDo List"),r.a.createElement(v,{addProject:this.handleAddProject.bind(this)}),r.a.createElement(j,{projects:this.state.projects,onDelete:this.handleDeleteProject.bind(this)}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.b653407c.chunk.js.map