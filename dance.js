window.onload = function () {
    var icons = document.querySelectorAll('.dance-icon');
    var container = document.querySelector('.white-blur');

    function moveIcons() {
        icons.forEach(function (icon) {
            var containerWidth = container.offsetWidth - icon.offsetWidth;
            var containerHeight = container.offsetHeight - icon.offsetHeight;
            var newX = Math.floor(Math.random() * containerWidth);
            var newY = Math.floor(Math.random() * containerHeight);
            icon.style.left = newX + 'px';
            icon.style.top = newY + 'px';
        });
    }
    moveIcons();
    setInterval(moveIcons, 2000);
};