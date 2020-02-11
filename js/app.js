$(function () {

    const $width = window.matchMedia('(max-width: 720px)');
    showMenu($width);
    $width.addListener(showMenu);

    function showMenu(width) {
        const $openIcon = $('.header-menu-open-icon');
        const $closeIcon = $('.header-menu-close-icon');
        const $menu = $('.header-menu');

        if(width.matches)
        {
            $openIcon.show();
            $menu.hide();

            $openIcon.on('click', function () {

                if ($menu.css('display') === 'none')
                {
                    $menu.show();
                }

                if ($openIcon.css('display') !== 'none')
                {
                    $openIcon.hide();
                    $closeIcon.show();
                }
            });

            $closeIcon.on('click', function () {

                if ($menu.css('display') !== 'none')
                {
                    $menu.hide();
                }

                if ($closeIcon.css('display') !== 'none')
                {
                    $openIcon.show();
                    $closeIcon.hide();
                }
            });
        }
        else
        {
            $menu.show();
            $closeIcon.hide();
            $openIcon.hide();
        }

    }

});

