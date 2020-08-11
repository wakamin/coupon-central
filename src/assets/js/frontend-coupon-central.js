import $ from "jquery";

$(document).ready(function () {
    let sdcc_card_els = {
        show_excerpt: $(".sdcc-card__excerpt-show"),
    };

    let sdcc_card_data = {};

    sdcc_card_els.show_excerpt.on("click", function () {
        let type = $(this).attr("data-type");

        if (type == "more") {
            let height = $(this).parent(".sdcc-card__excerpt").height();
            height = height + 85;
            $(this)
                .closest(".sdcc-card")
                .css({ height: `${height}px` });

            $(this).attr("data-type", "less");
            $(this).attr("title", sdcc_script.show_less_text);
            $(this).html(sdcc_script.show_less_text);
        }

        if (type == "less") {
            $(this).closest(".sdcc-card").removeAttr("style");
            $(this).attr("data-type", "more");
            $(this).attr("title", sdcc_script.show_more_text);
            $(this).html(sdcc_script.show_more_text);
        }
    });
});
