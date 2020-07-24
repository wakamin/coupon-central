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
            // wp_die($hook);

            $allowedPages = [
                'post.php',
                'post-new.php'
            ];

            if (!in_array($hook, $allowedPages)) {
                return;
            }

            wp_enqueue_style('sdcoupon-jquery-ui', 'http://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.min.css');
            wp_enqueue_style('sdcoupon-coupon-editor', SDCOUPON_PLUGIN_URL . 'assets/admin/css/coupon-editor.css');
            wp_enqueue_script('sdcoupon-coupon-editor-script', SDCOUPON_PLUGIN_URL . 'assets/admin/js/coupon-editor.js', array('jquery', 'jquery-ui-tabs'), '1.0.0', false);
        }
    }
    
    $SDCOUPON_Admin_Script = new SDCOUPON_Admin_Script();
}
