document.addEventListener("DOMContentLoaded", function () {
    const image = document.getElementById("myImage");
    let borderActive = false;

    function actBorder() {
        if (borderActive) {
            image.classList.remove("border");
        } else {
            image.classList.add("border");
        }
        borderActive = !borderActive;
    }

    image.addEventListener("click", actBorder);
    const stickers = [
        { id: "sticker1", inputId: "quantity1" },
        { id: "sticker2", inputId: "quantity2" },
        { id: "sticker3", inputId: "quantity3" }
    ];

    const validateButton = document.getElementById("validateButton");
    validateButton.addEventListener("click", function () {
        validateStickerCount();
    });

    function validateStickerCount() {
        let total = 0;

        stickers.forEach(sticker => {
            const input = document.getElementById(sticker.inputId);
            total += parseInt(input.value) || 0;
        });

        const resultParagraph = document.getElementById("result");

        if (total <= 10) {
            resultParagraph.textContent = `Llevas ${total} stickers.`;
        } else {
            resultParagraph.textContent = "Llevas demasiados stickers.";
        }
    }

    const inputs = document.querySelectorAll("input[type='number']");
    inputs.forEach(input => {
        input.addEventListener("input", function () {
            if (this.value < 0) {
                this.value = 0;
            } else if (this.value > 10) {
                this.value = 10;
            }
        });
    });

    const password1 = document.getElementById("password1");
    const password2 = document.getElementById("password2");
    const password3 = document.getElementById("password3");
    const verifyPasswordButton = document.getElementById("verifyPasswordButton");
    const passwordResult = document.getElementById("passwordResult");

    verifyPasswordButton.addEventListener("click", function () {
        const enteredPassword = password1.value + password2.value + password3.value;
        if (enteredPassword === "911") {
            passwordResult.textContent = "Password 1 correcto";
        } else if (enteredPassword === "714") {
            passwordResult.textContent = "Password 2 es correcto";
        } else {
            passwordResult.textContent = "Password incorrecto";
        }
    });
});
