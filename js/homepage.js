function showPage(pageId) {
    // Ẩn tất cả các trang
    var pages = document.querySelectorAll('.page');
    pages.forEach(function(page) {
        page.classList.remove('active');
    });

    // Hiển thị trang được chọn
    var selectedPage = document.getElementById(pageId);
    selectedPage.classList.add('active');
}
