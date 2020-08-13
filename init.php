<?php

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit();
}

// Plugin install
include_once SDCOUPON_PLUGIN_PATH . 'includes/install/class-sdcoupon-install.php';

// Functions
include_once SDCOUPON_PLUGIN_PATH . 'includes/functions/functions.php';

// Meta box interface
include_once SDCOUPON_PLUGIN_PATH . 'includes/interfaces/class-sdcoupon-meta-box-contracts.php';

// Coupon post type
include_once SDCOUPON_PLUGIN_PATH . 'includes/coupon/class-sdcoupon-post-type.php';

// Coupon taxonomy
include_once SDCOUPON_PLUGIN_PATH . 'includes/coupon/class-sdcoupon-taxonomy.php';

// Coupon meta box
include_once SDCOUPON_PLUGIN_PATH . 'includes/coupon/class-sdcoupon-meta-box.php';

// Coupon detail meta box
include_once SDCOUPON_PLUGIN_PATH . 'includes/coupon/class-sdcoupon-detail-meta-box.php';

// Admin Scripts
include_once SDCOUPON_PLUGIN_PATH . 'includes/admin/class-sdcoupon-admin-scripts.php';

// Frontend Scripts
include_once SDCOUPON_PLUGIN_PATH . 'includes/frontend/class-sdcoupon-frontend-scripts.php';

// Coupon archive template
include_once SDCOUPON_PLUGIN_PATH . 'includes/frontend/class-sdcoupon-coupon-archive.php';

// Store service
include_once SDCOUPON_PLUGIN_PATH . 'includes/services/class-sdcoupon-store-service.php';

// Category service
include_once SDCOUPON_PLUGIN_PATH . 'includes/services/class-sdcoupon-category-service.php';

// Coupon service
include_once SDCOUPON_PLUGIN_PATH . 'includes/services/class-sdcoupon-coupon-service.php';

// Store functions
include_once SDCOUPON_PLUGIN_PATH . 'includes/functions/store-functions.php';

// Category functions
include_once SDCOUPON_PLUGIN_PATH . 'includes/functions/coupon-category-functions.php';

// Coupon functions
include_once SDCOUPON_PLUGIN_PATH . 'includes/functions/coupon-functions.php';
