var title_text = document.getElementById("title-text");
var textarea = document.getElementById("text-textarea");
var result = document.getElementById("result");
var select = document.getElementById("select");
var arabic = document.getElementById("arabic");
var english = document.getElementById("english");
var title_text = document.getElementById("title-text");
var text = document.getElementById("text");
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var text_Result = document.getElementById("text_Result");
var directions = document.getElementById("direction");
var card_text = document.getElementById("card-text");

textarea.addEventListener("input", () => {
    make_result();
})

select.addEventListener("change", () => {
    make_result();
})

function make_result() {
    if (select.value == "decode") {
        result.value = window.atob(textarea.value);
    } else {
        result.value = window.btoa(textarea.value);
    }

}


arabic.onclick = () => {
    setLanugage("arabic");
    localStorage.setItem("lanug", "arabic")
    let a = directions.style.direction = "rtl";
    localStorage.setItem("Direction", a)
    let c = card_text.style.direction = "rtl";
    localStorage.setItem("text", c)
}

english.onclick = () => {
    setLanugage("english");
    localStorage.setItem("lanug", "english")
    let b = directions.style.direction = "ltr";
    localStorage.setItem("Direction", b)
    let d = card_text.style.direction = "ltr";
    localStorage.setItem("text", d)
}
onload = () => {
    setLanugage(localStorage.getItem("lanug"))
    directions.style.direction = localStorage.getItem("Direction");
    card_text.style.direction = localStorage.getItem("text");
};

function setLanugage(getLanugage) {
    if (getLanugage === "arabic") {
        title = document.title = "فهد العيادي";
        title_text.innerHTML = "فهد العيادي";
        text.innerHTML = "نص";
        b1.innerHTML = "تشفير النص";
        b2.innerHTML = "فك تشفير النص";
        text_Result.innerHTML = "نتيجة";
        card_text.innerHTML = "يتم استخدام هذا موقع لتشفير البيانات النصية إلى تشفير بنظام القاعدة 64 وكذلك يتم إستخدم لفك تشفير نص مشفر بنظام قاعدة 64" ;
    } else if (getLanugage === "english") {
        title_text.innerHTML = "FAHD AYEDI"
        text.innerHTML = "Text";
        b1.innerHTML = "Text encryption";
        b2.innerHTML = "Decrypt text";
        text_Result.innerHTML = "Result";
        title = document.title = "fahd ayedi";
        card_text.innerHTML = "This site is used to encrypt text data into base 64 encryption and is also used to decrypt text encrypted base 64." ;
    }
}
