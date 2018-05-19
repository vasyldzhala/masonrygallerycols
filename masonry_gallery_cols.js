// Masonry photo gallery in columns
// Scales and aligns photos' thumbnails (original ratio) in columns to fill container.
// Responsive, light and simple to use.
// Number of columns is from one to five and depends on window width.
// JavaScript ES6, CSS3 FlexBox are used, no additional dependencies.

// (c) Vasyl Dzhala 2018, https://github.com/vasyldzhala

(()=> {
    const contSelector = '.masonry-gallery-cols';
    const itemSelector = '.masonry-gallery-cols .thumbnail-item';
    const timeGap = 500; // ms

    window.addEventListener('load', (event)  => {

        let containers = document.querySelectorAll(contSelector);

        for (let cont of containers) {

            let items = cont.querySelectorAll(itemSelector);
            let contH;

            let setContH = ()=> {
                let contW = cont.clientWidth;
                let itemsArea = 0;
                for (let item of items) {
                    itemsArea += item.clientWidth * item.clientHeight;
                }
                contH = itemsArea / contW + 100;
                cont.style.height = `${contH}px`;
                while (cont.clientWidth < cont.scrollWidth) {
                    contH += 10;
                    cont.style.height = `${contH}px`;
                }
                cont.style.opacity = '1';
            };

            setContH();

            window.addEventListener('resize', ()=> {
                cont.style.opacity = '0';
                let timeoutSet = setTimeout(setContH, timeGap);
            });

        }

    })

})();