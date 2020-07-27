<?php

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit();
}

/**
 * Admin scripts class
 */
if (!class_exists('SDCOUPON_Admin_Script')) {
    class SDCOUPON_Admin_Script
    {
        /**
         * Class constructor
         */
        public function __construct()
        {
            add_action('admin_enqueue_scripts', array($this, 'scripts'));
        }

        /**
         * Coupon scripts
         *
         * @param String $hook
         * @return void
         */
        public function scripts($hook)
        {
            // Current post type
            global $typenow;

            if ($typenow == 'sd_coupon') {
                wp_enqueue_style('sdcoupon-jquery-ui', 'http://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.min.css');
                wp_enqueue_style('sdcoupon-central', SDCOUPON_PLUGIN_URL . 'assets/admin/css/coupon-central.css');
                wp_register_script('sdcoupon-central-script', SDCOUPON_PLUGIN_URL . 'assets/admin/js/coupon-central.js', array('jquery', 'jquery-ui-datepicker'), '1.0.0', false);
                
                wp_localize_script(
                    'sdcoupon-central-script',
                    'sdc_media_upload',
                    array(
                        'title' => __('Choose or Upload', 'sd_coupon_central'),
                        'button' => __('Use this media', 'sd_coupon_central'),
                    )
                );
                wp_enqueue_script('sdcoupon-central-script');
            }
        }
    }
    
    $SDCOUPON_Admin_Script = new SDCOUPON_Admin_Script();
}
