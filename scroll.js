
document.addEventListener('DOMContentLoaded', function () {
    const newsContainer = document.querySelector('.news-container');
    const scrollStep = 2;
    const scrollInterval = 30;

    let scrollIntervalId;

    function autoScroll() {
        const maxScrollLeft = newsContainer.scrollWidth - newsContainer.clientWidth;

        if (newsContainer.scrollLeft >= maxScrollLeft) {
            newsContainer.scrollLeft = 0;
        } else {
            newsContainer.scrollLeft += scrollStep;
        }
    }

    function startAutoScroll() {
        stopAutoScroll();
        scrollIntervalId = setInterval(autoScroll, scrollInterval);
    }

    function stopAutoScroll() {
        clearInterval(scrollIntervalId);
    }

    newsContainer.addEventListener('mouseenter', stopAutoScroll);
    newsContainer.addEventListener('mouseleave', startAutoScroll);

    startAutoScroll();
});
