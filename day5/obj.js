const a={
    id: 101,
    name:"Tanmay",
    salary:15000,
    incsal: function(){
        this.salary=this.salary+5000;
    },
    show:function(){
        console.log("My id is: "+this.id);
        console.log("My name is: "+this.name);
        console.log("My salary is: "+this.salary);
    }
};
a.incsal();
a.show();

dep={
   name:"AIML",
    id:998
}
    
clas={
    name:"jg",
    id:501
}
function clg(){
    console.log("My name is: "+this.name);
    console.log("My id is: "+this.id);
}
dep.clg();