document.addEventListener("DOMContentLoaded", function () {

    const printButton = document.getElementById("print-cv");

    if (printButton) {
        printButton.addEventListener("click", function () {
            window.print();
        });
    }

    const avatarImage = document.querySelector(".avatar img");

    if (avatarImage) {
        avatarImage.addEventListener("error", function () {
            console.warn(
                "Không tải được ảnh đại diện. " +
                "Hãy kiểm tra tên và vị trí file ảnh."
            );
        });
    }

});
