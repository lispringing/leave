function getTime() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var element = document.getElementById('time');
    element.innerHTML = '当前时间：' + year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second ;
    }
    setInterval(getTime, 1000);

    s
    function closecard(){
        document.getElementById("tapinfo").style.display = "none";
    }