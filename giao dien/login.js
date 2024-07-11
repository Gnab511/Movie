document.addEventListener('DOMContentLoaded', function() {
    const loginContainer = document.querySelector('.login-container');
    const registerContainer = document.querySelector('.register-container');
    const showRegisterLink = document.getElementById('showRegister');
    const showLoginLink = document.getElementById('showLogin');

    showRegisterLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginContainer.classList.remove('active');
        registerContainer.classList.add('active');
    });

    showLoginLink.addEventListener('click', function(event) {
        event.preventDefault();
        registerContainer.classList.remove('active');
        loginContainer.classList.add('active');
    });

    // Show login form by default
    loginContainer.classList.add('active');

    // Handle login form submit
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Ngăn chặn gửi form mặc định

        // Lấy giá trị của các input
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        // Lấy thông tin đăng ký từ localStorage
        const registeredUsername = localStorage.getItem('registeredUsername');
        const registeredPassword = localStorage.getItem('registeredPassword');

        // Kiểm tra thông tin đăng nhập
        if (username === registeredUsername && password === registeredPassword) {
            window.location.href = 'index.html';
        } else {
            alert('Tên đăng nhập hoặc mật khẩu không đúng!');
        }
    });

    // Handle register form submit
    document.getElementById('registerForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Ngăn chặn gửi form mặc định

        // Lấy giá trị của các input
        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;

        // Lưu trữ thông tin đăng ký vào localStorage
        localStorage.setItem('registeredUsername', username);
        localStorage.setItem('registeredPassword', password);
        alert('Đăng ký thành công!');

        // Chuyển sang form đăng nhập
        registerContainer.classList.remove('active');
        loginContainer.classList.add('active');
    });
});
