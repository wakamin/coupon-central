<?php

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit();
}

/**
 * Frontend scripts class
 */
if (!class_exists('SDCOUPON_Frontend_Script')) {
    class SDCOUPON_Frontend_Script
    {
        /**
         * Class constructor
         */
        public function __construct()
        {
            add_action('wp_enqueue_scripts', array($this, 'scripts'));
        }

        public function scripts()
        {
            wp_enqueue_style('sdcc-frontend', SDCOUPON_PLUGIN_URL . 'assets/css/frontend-coupon-central.css', [], '1.0.0', 'all');

            wp_enqueue_script('sdcc-frontend-script', SDCOUPON_PLUGIN_URL . 'assets/js/frontend-coupon-central.js', ['jquery'], false);
        }
    }

    $SDCOUPON_Frontend_Script = new SDCOUPON_Frontend_Script();
}
