var list = [
    { title: 'Nhờ làm hộ', content: 'Ko co noi dung',require:'-Thiết kế nhanh gọn lẹ, giá cả liên hệ', price: 30,path:'./data/1/' },
    { title: 'Thiết kế mẫu như hình', content: 'Xem noi dung',require:'Không cần gấp nhưng phải đảm bảo chất lượng', price: 15,path:'./data/2/' },
    { title: 'Anh Huy cần thiết kế cái này', content: 'Ko co noi dung',require:'-Thiết kế nhanh gọn lẹ, giá cả liên hệ', price: 20,path:'./data/3/' },
    { title: 'Ko co noi dung', content: 'Ko co noi dung',require:'-Thiết kế nhanh gọn lẹ, giá cả liên hệ', price: 20,path:'./data/4/' },
    { title: 'Ko co noi dung', content: 'Ko co noi dung',require:'-Thiết kế nhanh gọn lẹ, giá cả liên hệ', price: 26,path:'./data/5/' },
    { title: 'Ko co noi dung', content: 'Ko co noi dung',require:'-Thiết kế nhanh gọn lẹ, giá cả liên hệ', price: 26,path:'./data/5/' },
    { title: 'Ko co noi dung', content: 'Ko co noi dung',require:'-Thiết kế nhanh gọn lẹ, giá cả liên hệ', price: 28,path:'./data/6/' }
];
var loadData = function(){
    for(let i = 0; i<list.length;i++)
    {
        document.getElementById("product-list").innerHTML += 
        '<div class="col-lg-4 col-md-6 mb-4">'+
        '<div class="card h-100">'+
          '<img class="card-img-top" src="'+list[i].path+'1.jpg'+'" alt="">'+
          '<div class="card-body">'+
            '<h4 class="card-title">'+
              '<p>'+list[i].title+'</p>'+
            '</h4>'+
            '<h5>$'+list[i].price+'</h5>'+
            '<p class="card-text">'+list[i].content+'</p>'+
          '</div>'+
          '<div class="card-footer">'+
            '<button id="'+i+'" class="btn btn-success w-100" onclick="viewDetail(this.id)" data-toggle="modal" data-target="#myModal">View detail</button'+
          '</div>'+   
        '</div>'+
      '</div>';
    }
}
load = new loadData();

function viewDetail(id){
    id = parseInt(id);
    id = id+1;
    window.location="detail?"+id;
    document.getElementById("title").innerHTML+=list[id].title;
   
}