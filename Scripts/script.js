var sider = document.getElementById('sider');
var btnSider = document.getElementById('btn-sider');
btnSider.onclick = () => {
        btnSider.classList.toggle('clicked');
        sider.classList.toggle('show');
    }
    



var message = document.getElementById('message');
var count = document.getElementById('count');


document.onclick = (event) => {
    if (event.target.id !== "btn-sider" && event.target.id !== "sider") {
        if(btnSider.classList.contains('clicked') && sider.classList.contains('show')){
        btnSider.classList.remove('clicked');
        sider.classList.remove('show');
    }

    }
}