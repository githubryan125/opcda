$(function(){
	$("#tree").fancytree({
       extensions: ["contextMenu"],
       contextMenu: {
         menu: {
           "Connect": { "name": "Connect", "icon": "fas fa-plug" }, 
           "DisConnect": { "name": "DisConnect", "icon": "fas fa-unlink" }, 
           "Add Groups": { "name": "Add Groups", "icon": "fas fa-users" }, 
           "Delete Group": { "name": "Delete Group", "disabled": true, "icon": "fas fa-trash-alt" }, 
           "Add Tags": { "name": "Add Tags", "disabled": true, "icon": "fas fa-tags" }, 
           "sep1": "---------",
           "quit": { "name": "Quit", "icon": "fas fa-sign-out-alt" },
           "sep2": "---------",
         },
       },
     });
   });
