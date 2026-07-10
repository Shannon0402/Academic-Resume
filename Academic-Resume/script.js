// =========================
// 鼠标绿色光晕
// =========================

const light = document.querySelector(".light");

document.addEventListener("mousemove", (e) => {

    light.animate(
        {
            left: e.clientX + "px",
            top: e.clientY + "px"
        },
        {
            duration: 250,
            fill: "forwards"
        }
    );

});

// =========================
// 照片轻微3D效果
// =========================

const photo = document.querySelector(".photo-card");

photo.addEventListener("mousemove", (e) => {

    const rect = photo.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    const rotateY = (x - rect.width / 2) / 20;

    const rotateX = -(y - rect.height / 2) / 20;

    photo.style.transform =
        `perspective(1000px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         translateY(-10px)`;

});

photo.addEventListener("mouseleave", () => {

    photo.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg)";

});

// =========================
// 标签浮动
// =========================

const tags = document.querySelectorAll(".research span");

tags.forEach(tag => {

    tag.addEventListener("mouseenter", () => {

        tag.style.transform = "translateY(-8px) scale(1.05)";

    });

    tag.addEventListener("mouseleave", () => {

        tag.style.transform = "translateY(0px) scale(1)";

    });

});

// =========================
// 数据卡片动画
// =========================

const cards = document.querySelectorAll(".item");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.04)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px) scale(1)";

    });

});