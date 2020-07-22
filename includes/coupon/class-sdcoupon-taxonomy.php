<?php

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit();
}

/**
 * Coupon post type class
 */
if (!class_exists('SDCOUPON_Taxonomy')) {
    class SDCOUPON_Taxonomy
    {
        public function __construct()
        {
            add_action('init', array($this, 'register_coupon_category_taxonomy'));
        }

        /**
         * Register coupon category taxonomy
         *
         * @return void
         */
        public function register_coupon_category_taxonomy()
        {
            $labels = [
                'name' => _x('Coupon Categories', 'Taxonomy general name', 'sd_coupon_central'),
                'singular_name' => _x('Coupon Category', 'Taxonomy singular name', 'sd_coupon_central'),
                'search_items' => __('Search Coupon Category', 'sd_coupon_central'),
                'all_items' => __('All Coupon Categories', 'sd_coupon_central'),
                'parent_item' => __('Parent Coupon Category', 'sd_coupon_central'),
                'parent_item_colon' => __('Parent Coupon Category:', 'sd_coupon_central'),
                'edit_item' => __('Edit Coupon Category', 'sd_coupon_central'),
                'update_item' => __('Update Coupon Category', 'sd_coupon_central'),
                'add_new_item' => __('Add New Coupon Category', 'sd_coupon_central'),
                'new_item_name' => __('New Coupon Category Name', 'sd_coupon_central'),
                'menu_name' => __('Categories', 'sd_coupon_central'),
            ];

            $args = [
                'hierarchical' => true,
                'labels' => $labels,
                'show_ui' => true,
                'show_in_menu' => true,
                'show_in_rest' => true,
                'show_admin_column' => true,
                'query_var' => true,
                'rewrite' => [
                    'slug' => apply_filters('sdcoupon_coupon_category_taxonomy_slug', 'coupon-category'),
                    'with_front' => apply_filters('sdcoupon_coupon_category_taxonomy_with_front', true)
                ],
                'capabilities' => ['manage_categories', 'edit_posts'],
            ];

            register_taxonomy('sd_coupon_category', 'sd_coupon', $args);
        }
    }

    $SDCOUPON_Taxonomy = new SDCOUPON_Taxonomy();
}
