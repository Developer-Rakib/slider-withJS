let imgs = [
    "img/img-1.jpg",
    "img/img-2.jpg",
    "img/img-3.jpg",
    "img/img-5.jpg",
]
let imgIndex = 1;
setInterval(() => {
    if (imgIndex == imgs.length) {
        imgIndex = 0;
    }
    document.querySelector("img").setAttribute("src", imgs[imgIndex]);
    imgIndex++;
}, 2000);
