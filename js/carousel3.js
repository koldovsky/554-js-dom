{
    const images = [
        'img/baby-yoda.svg',
        'img/banana.svg',
        'img/girl.svg',
        'img/viking.svg'
    ]

    let currentIdx = 0;
    function showCurrent() {
        const imgElement1 = document.querySelector('.carousel3 .img1');
        const imgElement2 = document.querySelector('.carousel3 .img2');
        const imgElement3 = document.querySelector('.carousel3 .img3');
        const idx2 = currentIdx + 1 >= images.length ? 0 : currentIdx + 1;
        const idx3 = idx2 + 1 >= images.length ? 0 : idx2 + 1;
        console.log(currentIdx, idx2, idx3);
        imgElement1.src = images[currentIdx];
        imgElement2.src = images[idx2];
        imgElement3.src = images[idx3];
    }

    function showNext() {
        currentIdx++;
        if (currentIdx >= images.length) currentIdx = 0;
        showCurrent();
    }

    function showPrev() {
        currentIdx--;
        if (currentIdx < 0) currentIdx = images.length - 1;
        showCurrent();
    }

    setInterval(showNext, 3000);
    document.querySelector('.carousel3 .next').addEventListener('click', showNext);
    document.querySelector('.carousel3 .prev').addEventListener('click', showPrev);
    showCurrent();
}