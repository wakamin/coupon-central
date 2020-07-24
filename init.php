<?php

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit();
}

// Plugin install
include_once SDCOUPON_PLUGIN_PATH . 'includes/install/class-sdcoupon-install.php';

// Functions
include_once SDCOUPON_PLUGIN_PATH . 'includes/functions/functions.php';

// Coupon post type
include_once SDCOUPON_PLUGIN_PATH . 'includes/coupon/class-sdcoupon-post-type.php';

// Coupon taxonomy
include_once SDCOUPON_PLUGIN_PATH . 'includes/coupon/class-sdcoupon-taxonomy.php';

// Coupon metabox
include_once SDCOUPON_PLUGIN_PATH . 'includes/coupon/class-sdcoupon-metabox.php';

// Admin Scripts
include_once SDCOUPON_PLUGIN_PATH . 'includes/admin/class-sdcoupon-admin-scripts.php';
