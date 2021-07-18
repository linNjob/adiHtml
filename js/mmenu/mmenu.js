// 參考plug   http://mmenu.frebsite.nl/

jQuery(document).ready(function($) {
    $("#menu").mmenu({
        "extensions": [
            "pagedim-black",
            // "theme-dark"
        ],
        "counters": true,
        "navbars": [{
                "position": "top",
                "content": [
                    "searchfield"
                ]
            },
            true, {
                "position": "bottom",
                "content": [
                    "<a class='fa fa-envelope' href='#/'></a>",
                    "<a class='fa fa-twitter' href='#/'></a>",
                    "<a class='fa fa-facebook' href='#/'></a>"
                ]
            }
        ]
    });
});
