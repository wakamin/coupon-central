import $ from "jquery";

$(document).ready(function () {
    /*============ Coupon Card =============*/
    let sdcc_card = {
        els: {
            show_excerpt: $(".sdcc-card__excerpt-show"),
        },
        data: {},
    };

    sdcc_card.els.show_excerpt.on("click", function () {
        let type = $(this).attr("data-type");
        let excerpt_el = $(this).parent(".sdcc-card__excerpt");
        let title_el = excerpt_el.prev(".sdcc-card__title");

        if (type == "more") {
            let excerpt_height = excerpt_el.height();
            let title_height = title_el.height();
            let height = excerpt_height + title_height + 70;
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

    /*============ Coupon Page ============== */
    let sdcc_copy = new ClipboardJS(".sdcc-code__copy-btn");

    sdcc_copy.on("success", function (e) {
        $(".sdcc-code__copy-btn").html(sdcc_script.copied_text);
        e.clearSelection();
    });

    sdcc_copy.on("error", function (e) {
        alert(sdcc_script.something_wrong_text);
    });
});
