function showLogin() {
    document.getElementById('registerContainer').classList.remove('active');
    document.getElementById('loginContainer').classList.add('active');
}

function showRegister() {
    document.getElementById('loginContainer').classList.remove('active');
    document.getElementById('registerContainer').classList.add('active');
}

// Xử lý form đăng nhập
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Xử lý đăng nhập ở đây
    alert(`Logged in with Username: ${username}`);
});

// Xử lý form đăng ký
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Xử lý đăng ký ở đây
    alert(`Registered with Username: ${username} and Email: ${email}`);
});