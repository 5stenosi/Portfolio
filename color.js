document.addEventListener('DOMContentLoaded', () => {
    const boxes = [
        document.getElementById('box1'),
        document.getElementById('box3'),
        document.getElementById('box4'),
        document.getElementById('box5'),
        document.getElementById('box6')
    ];

    const portfolio = document.getElementById('portfolio');

    const changePortfolioColor = (box) => {
        const bgColor = window.getComputedStyle(box).backgroundColor;
        portfolio.style.color = bgColor;
    };

    boxes.forEach(box => {
        box.addEventListener('mouseover', () => changePortfolioColor(box));
    });
});