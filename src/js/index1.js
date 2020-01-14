const box = document.querySelector('.new_low');
let ajax = new XMLHttpRequest();
ajax.open('get', 'http://localhost/huanlegou/php/huanlegou.php', true);
ajax.send();
ajax.onreadystatechange = function () {
    if (ajax.readyState === 4) {
        let arr = JSON.parse(ajax.responseText);
        let strhtml = '';
    if(arr.length >=4){
        arr.length=4
    }  
        arr.forEach(function (value) {
            strhtml += ` 
                 <div class="new_shangpin">
                    <img src="${value.url}" alt="">
                    <a href="http://localhost/huanlegou/src/detail.html?sid=${value.sid}">${value.title} </a>
                    <h3>￥${value.price}</h3>
                 </div>
        `});
        strhtml += ''
        box.innerHTML = strhtml;
    }
}