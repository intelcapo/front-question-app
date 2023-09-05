"use strict";(self.webpackChunkquestion_app_ui=self.webpackChunkquestion_app_ui||[]).push([[637],{3637:(U,u,s)=>{s.r(u),s.d(u,{RoomsModule:()=>A});var a=s(6814),l=s(2058),o=s(5879),p=s(5422),d=s(6385),c=s(5195);let v=(()=>{var t;class r{constructor(){this.room={id:"",name:"",creationDate:new Date,user:{id:"",name:""}}}get roomLink(){return`/questions/${this.room?.id||"1"}`}}return(t=r).\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-rooms-template"]],inputs:{room:"room"},decls:15,vars:7,consts:[[3,"routerLink"]],template:function(e,n){1&e&&(o.TgZ(0,"mat-card",0)(1,"mat-card-content")(2,"p")(3,"span"),o._uU(4,"Nombre: "),o.TgZ(5,"strong"),o._uU(6),o.qZA()(),o._UZ(7,"br"),o.TgZ(8,"span"),o._uU(9),o.ALo(10,"date"),o.qZA(),o._UZ(11,"br"),o.TgZ(12,"span"),o._uU(13),o.qZA(),o._UZ(14,"br"),o.qZA()()()),2&e&&(o.Q6J("routerLink","/questions/"+(null==n.room?null:n.room.id)),o.xp6(6),o.Oqu(null==n.room?null:n.room.name),o.xp6(3),o.hij("Fecha de creacion: ",o.xi3(10,4,null==n.room?null:n.room.creationDate,"dd/MM/yyyy"),""),o.xp6(4),o.hij("Creada por: ",(null==n.room||null==n.room.user?null:n.room.user.name)||"Anonimo",""))},dependencies:[l.rH,c.a8,c.dn,a.uU]}),r})();var i=s(6223),f=s(2032),g=s(9157),R=s(2296);let C=(()=>{var t;class r{constructor(e){this.formBuilder=e,this.frmRoom=this.formBuilder.group({name:""}),this.createRoom=new o.vpe}onSubmit(){this.createRoom.emit(this.frmRoom.value),this.resetForm()}resetForm(){this.frmRoom.reset()}}return(t=r).\u0275fac=function(e){return new(e||t)(o.Y36(i.qu))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-rooms-form"]],outputs:{createRoom:"createRoom"},decls:7,vars:1,consts:[[1,"frm-room",3,"formGroup","ngSubmit"],[1,"example-form-field"],["matInput","","type","text","formControlName","name"],["mat-raised-button","","color","primary","type","submit"]],template:function(e,n){1&e&&(o.TgZ(0,"form",0),o.NdJ("ngSubmit",function(){return n.onSubmit()}),o.TgZ(1,"mat-form-field",1)(2,"mat-label"),o._uU(3,"Nombre de la sala"),o.qZA(),o._UZ(4,"input",2),o.qZA(),o.TgZ(5,"button",3),o._uU(6,"Crear sala"),o.qZA()()),2&e&&o.Q6J("formGroup",n.frmRoom)},dependencies:[f.Nt,g.KE,g.hX,R.lW,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u],styles:[".frm-room[_ngcontent-%COMP%]{display:flex;flex-direction:column}"]}),r})();function h(t,r){if(1&t&&(o.TgZ(0,"div"),o._UZ(1,"app-rooms-template",5)(2,"mat-divider"),o.qZA()),2&t){const m=r.$implicit;o.xp6(1),o.Q6J("room",m)}}function Z(t,r){if(1&t&&(o.TgZ(0,"div"),o.YNc(1,h,3,1,"div",4),o.qZA()),2&t){const m=o.oxw();o.xp6(1),o.Q6J("ngForOf",m.rooms)}}const T=[{path:"",component:(()=>{var t;class r{constructor(e){this.roomsService=e,this.rooms=[]}ngOnInit(){this.getRoomList()}getRoomList(){this.roomsService.getAllRooms().subscribe({next:e=>{console.log(e.length),this.rooms=e},error:()=>{this.rooms=[]}})}onCreateRoom(e){this.roomsService.create(e).subscribe({next:n=>{console.log(n)},error:n=>{console.error(n)},complete:()=>{this.getRoomList()}})}}return(t=r).\u0275fac=function(e){return new(e||t)(o.Y36(p.L))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-rooms"]],decls:8,vars:1,consts:[[1,"container-content"],[1,"container-rooms"],[3,"createRoom"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"container-rooms-content",3,"room"]],template:function(e,n){1&e&&(o.TgZ(0,"div",0)(1,"h1"),o._uU(2,"Salas disponibles"),o.qZA(),o.TgZ(3,"div",1)(4,"div")(5,"app-rooms-form",2),o.NdJ("createRoom",function(M){return n.onCreateRoom(M)}),o.qZA()(),o._UZ(6,"mat-divider"),o.YNc(7,Z,2,1,"div",3),o.qZA()()),2&e&&(o.xp6(7),o.Q6J("ngIf",n.rooms.length>0))},dependencies:[a.sg,a.O5,d.d,v,C],styles:[".container-content[_ngcontent-%COMP%]   .container-rooms[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px}.container-content[_ngcontent-%COMP%]   .container-rooms[_ngcontent-%COMP%]   .container-rooms-content[_ngcontent-%COMP%]{margin-top:10px}"]}),r})()}];let y=(()=>{var t;class r{}return(t=r).\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[l.Bz.forChild(T),l.Bz]}),r})(),A=(()=>{var t;class r{}return(t=r).\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({providers:[p.L],imports:[a.ez,y,c.QW,d.t,f.c,R.ot,i.UX]}),r})()}}]);