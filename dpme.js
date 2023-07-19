function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username.length >= 4 && password.length >= 3) {
        if (password === "123456") {
            localStorage.setItem("username", username);
            window.location.href = "index.html";
        } else {
            alert("sai thông tin đănng nhập")
        }

    } else {
        alert("thong tin dang nhap khong hop le")
    }
}