function create(parent,data){
    parent.innerHTML=''
    for(var i=0;i<data.length;i++){

    var list='<div class="text-a">'+
    '<p class="p1">'+data[i].name+'</p>'+
    '<p class="p2">'+data[i].value+'</p>'+
    '<p class="p3" data-id='+data[i].id+'>编辑</p>'+
    '<div class="text-b">'+
    '<span class="span-a">'+data[i].age+'</span><span class="span-b">'+data[i].shouji+'</span><span class="span-c"></span>'+
'</div>'
'</div>'

    parent.innerHTML+=list
}
}