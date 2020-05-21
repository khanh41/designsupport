function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
}
var list = [
    { title: 'Nhờ làm hộ', content: 'Ko co noi dung',require:'-Thiết kế nhanh gọn lẹ, giá cả liên hệ', price: 30,path:'./data/1/' },
    { title: 'Thiết kế mẫu như hình', content: 'Xem noi dung',require:'Không cần gấp nhưng phải đảm bảo chất lượng', price: 15,path:'./data/2/' },
    { title: 'Anh Huy cần thiết kế cái này', content: 'Ko co noi dung',require:'-Thiết kế nhanh gọn lẹ, giá cả liên hệ', price: 20,path:'./data/3/' },
    { title: 'Ko co noi dung', content: 'Ko co noi dung',require:'-Thiết kế nhanh gọn lẹ, giá cả liên hệ', price: 20,path:'./data/4/' },
    { title: 'Ko co noi dung', content: 'Ko co noi dung',require:'-Thiết kế nhanh gọn lẹ, giá cả liên hệ', price: 26,path:'./data/5/' },
    { title: 'Ko co noi dung', content: 'Ko co noi dung',require:'-Thiết kế nhanh gọn lẹ, giá cả liên hệ', price: 26,path:'./data/5/' },
    { title: 'Ko co noi dung', content: 'Ko co noi dung',require:'-Thiết kế nhanh gọn lẹ, giá cả liên hệ', price: 28,path:'./data/6/' }
];
var prmstr = window.location.search.substr(1);
console.log(prmstr);
var index = parseInt(prmstr)-1;
document.getElementById('title').innerHTML=list[index].title;
document.getElementById('script').innerHTML=list[index].content;
document.getElementById('price').innerHTML='$'+list[index].price;
document.getElementById('more').innerHTML=list[index].require;
current = 1;
document.getElementById('image').innerHTML+=
        '<img id="main-image" src="'+list[index].path+current+'.jpg" class="border p-1">'+
				'<span class="sub-img">'+
					'<img id="2" onclick="swapImage(this.id)" src="'+list[index].path+'2.jpg" class="border p-2">'+
					'<img id="3" onclick="swapImage(this.id)" src="'+list[index].path+'3.jpg" class="border p-2">'+
					'<img id="4" onclick="swapImage(this.id)" src="'+list[index].path+'4.jpg" class="border p-2">'+
					'<img id="5" onclick="swapImage(this.id)" src="'+list[index].path+'5.jpg" class="border p-2">'+
        '</span>';
 function swapImage(id){
   $( "#main-image" ).replaceWith( '<img id="main-image" src="'+list[index].path+id+'.jpg" class="border p-1">' );
   //$( "#"+id ).replaceWith( '<img id="'+id+'" src="'+list[index].path+current+'.jpg" class="border p-1">' );
   //current = id;
 }