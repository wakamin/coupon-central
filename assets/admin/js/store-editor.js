jQuery(document).ready(function ($) {
    "use strict";
    /*=============== Meta box media uploader ====================== */
    // Instantiates the variable that holds the media library frame.
    var metaImageFrame;

    // Runs when the media button is clicked.
    $("body").click(function (e) {
        // Get the btn
        var btn = e.target;

        // Check if it's the upload button
        if (!btn || !$(btn).attr("data-target-input")) return;
        if (!btn || !$(btn).attr("data-target-preview")) return;

        // Get the field target
        var field_target = $(btn).data("target-input");
        var preview_target = $(btn).data("target-preview");

        // Prevents the default action from occuring.
        e.preventDefault();

        // Sets up the media library frame
        metaImageFrame = wp.media.frames.metaImageFrame = wp.media({
            title: store_logo_picker.title,
            button: { text: store_logo_picker.button },
        });

        // Runs when an image is selected.
        metaImageFrame.on("select", function () {
            // Grabs the attachment selection and creates a JSON representation of the model.
            var media_attachment = metaImageFrame
                .state()
                .get("selection")
                .first()
                .toJSON();

            // Sends the attachment URL to our custom image input field.
            $(field_target).val(media_attachment.url);
            $(preview_target).attr("src", media_attachment.url);
            $(".sd-coupon-store-logo-preview").removeClass("sd-coupon-hide");
        });

        // Opens the media library frame.
        metaImageFrame.open();
    });
});
