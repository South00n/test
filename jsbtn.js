var btn1 = document.querySelector('#night')
var btn2 = document.querySelector('#day')
var btn3 = document.querySelector('#oneclick')
var target = document.querySelector('body')
var alist = document.querySelectorAll('a')


btn1.onclick = function(){
  target.style.backgroundColor = "black";
  target.style.color = "white";
}
btn2.onclick = function() {
  target.style.backgroundColor = "white";
  target.style.color = "black";
}

btn3.onclick = function() {
  if (target.dataset.mode === 'day') {
    target.style.backgroundColor = "black";
    target.style.color = "white";
    target.dataset.mode = 'night';
    this.value = 'day';
    var i = 0
    while(i < alist.length){
     alist[i].style.color = 'powderblue'
     i = i + 1;
}
  } else {
    target.style.backgroundColor = "white";
    target.style.color = "black";
    target.dataset.mode = 'day';
    this.value = 'night';
    var i = 0
    while(i < alist.length){
      alist[i].style.color = 'red'
      i = i + 1;
}
  }
}





