{
    const images = [
        'img/baby-yoda.svg',
        'img/banana.svg',
        'img/girl.svg',
        'img/viking.svg'
    ]

    let currentIdx = 0;
    function showCurrent() {
        const imgElement = document.querySelector('.carousel .current-img');
        imgElement.src = images[currentIdx];
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
    document.querySelector('.carousel .next').addEventListener('click', showNext);
    document.querySelector('.carousel .prev').addEventListener('click', showPrev);
    showCurrent();
}