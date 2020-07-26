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
            add_action('admin_enqueue_scripts', array($this, 'coupon_editor_scripts'));
        }

        /**
         * Coupon editor scripts
         *
         * @param String $hook
         * @return void
         */
        public function coupon_editor_scripts($hook)
        {
            // Current post type
            global $typenow;

            if ($typenow == 'sd_coupon' || $typenow == 'sd_coupon_store') {
                wp_enqueue_style('sdcoupon', SDCOUPON_PLUGIN_URL . 'assets/admin/css/coupon-central.css');
            }

            if ($typenow == 'sd_coupon') {
                wp_enqueue_style('sdcoupon-jquery-ui', 'http://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.min.css');
                wp_enqueue_style('sdcoupon-coupon-editor', SDCOUPON_PLUGIN_URL . 'assets/admin/css/coupon-editor.css');
                wp_enqueue_script('sdcoupon-coupon-editor-script', SDCOUPON_PLUGIN_URL . 'assets/admin/js/coupon-editor.js', array('jquery', 'jquery-ui-datepicker'), '1.0.0', false);
            }

            if ($typenow == 'sd_coupon_store') {
                wp_enqueue_style('sdcoupon-store-editor', SDCOUPON_PLUGIN_URL . 'assets/admin/css/store-editor.css');
                wp_register_script('sdcoupon-store-editor-script', SDCOUPON_PLUGIN_URL . 'assets/admin/js/store-editor.js', array('jquery'), '1.0.0', false);
                wp_localize_script(
                    'sdcoupon-store-editor-script',
                    'store_logo_picker',
                    array(
                        'title' => __('Choose or Upload Media', 'sd_coupon_central'),
                        'button' => __('Use this media', 'sd_coupon_central'),
                    )
                );
                wp_enqueue_script('sdcoupon-store-editor-script');
            }
        }
    }
    
    $SDCOUPON_Admin_Script = new SDCOUPON_Admin_Script();
}
