<?php

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit();
}

/**
 * Store post type class
 */
if (!class_exists('SDCOUPON_Store_Post_Type')) {
    class SDCOUPON_Store_Post_Type
    {
        /**
         * Class constructor
         */
        public function __construct()
        {
            add_action('init', array($this, 'register_store_post_type'));

            add_filter('use_block_editor_for_post_type', array($this, 'disable_block_editor'), 10, 2);

            add_action('init', array($this, 'control_store_post_ui'));
        }

        /**
         * Register store custom post type
         *
         * @return void
         */
        public static function register_store_post_type()
        {
            $labels = [
                'name' => _x('Stores', 'Post type general name', 'sd_coupon_central'),
                'singular_name' => _x('Store', 'Post type singular name', 'sd_coupon_central'),
                'menu_name' => _x('Stores', 'Admin menu text', 'sd_coupon_central'),
                'name_admin_bar' => _x('New Store', 'Add New on Toolbar', 'sd_coupon_central'),
                'add_new' => __('Add New', 'sd_coupon_central'),
                'add_new_item' => __('Add New Store', 'sd_coupon_central'),
                'new_item' => __('New Store', 'sd_coupon_central'),
                'edit_item' => __('Edit Store', 'sd_coupon_central'),
                'view_item' => __('View Store', 'sd_coupon_central'),
                'all_items' => __('All Stores', 'sd_coupon_central'),
                'search_items' => __('Search Stores', 'sd_coupon_central'),
                'parent_item_colon' => __('Parent Stores:', 'sd_coupon_central'),
                'not_found' => __('No stores found.', 'sd_coupon_central'),
                'not_found_in_trash' => __('No stores found in Trash.', 'sd_coupon_central'),
                'featured_image' => __('Featured Image', 'sd_coupon_central'),
                'set_featured_image' => __('Set featured image', 'sd_coupon_central'),
                'remove_featured_image' => __('Remove featured image', 'sd_coupon_central'),
                'use_featured_image' => __('Use as featured image', 'sd_coupon_central'),
                'archives' => _x('Store archives', 'The post type archive label used in nav menus.', 'sd_coupon_central'),
                'insert_into_item' => _x('Insert into store', 'Used when inserting media', 'sd_coupon_central'),
                'uploaded_to_this_item' => _x('Uploaded to this store', 'Used when viewing media attached to a post', 'sd_coupon_central'),
                'filter_item_list' => _x('Filter store list', 'Screen reader text for the filter links heading on the post type listing screen', 'sd_coupon_central'),
                'items_list_navigation' => _x('Stores list navigation', 'Screen reader text for the pagination heading on the post type listing screen', 'sd_coupon_central'),
                'items_list' => _x('Stores list', 'Screen reader text for the items list heading on the post type listing screen', 'sd_coupon_central'),
            ];

            $args = [
                'labels' => $labels,
                'public' => true,
                'publicly_queryable' => true,
                'show_ui' => true,
                'show_in_menu' => true,
                'query_var' => true,
                'rewrite' => [
                    'slug' => apply_filters('sdcoupon_store_post_type_slug', 'store'),
                    'with_front' => true
                ],
                'capability_type' => 'post',
                'has_archive' => true,
                'hierarchical' => false,
                'menu_position ' => 6,
                'supports ' => [
                    'author',
                    'comments',
                    'custom-fields',
                    'revisions',
                ],
                'show_in_rest' => true,
                'show_in_admin_bar' => false,
                'menu_icon' => 'data:image/svg+xml;base64,' . base64_encode('<svg width="20" height="20" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg"><path fill="black" d="M512 448q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zm1067 576q0 53-37 90l-491 492q-39 37-91 37-53 0-90-37l-715-716q-38-37-64.5-101t-26.5-117v-416q0-52 38-90t90-38h416q53 0 117 26.5t102 64.5l715 714q37 39 37 91zm384 0q0 53-37 90l-491 492q-39 37-91 37-36 0-59-14t-53-45l470-470q37-37 37-90 0-52-37-91l-715-714q-38-38-102-64.5t-117-26.5h224q53 0 117 26.5t102 64.5l715 714q37 39 37 91z"/></svg>'),
                'menu_icon' => 'data:image/svg+xml;base64,' . base64_encode('<svg width="20" height="20" viewBox="0 0 616 512" xmlns="http://www.w3.org/2000/svg"><path fill="black" d="M602 118.6L537.1 15C531.3 5.7 521 0 510 0H106C95 0 84.7 5.7 78.9 15L14 118.6c-33.5 53.5-3.8 127.9 58.8 136.4 4.5.6 9.1.9 13.7.9 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18.1 20.1 44.3 33.1 73.8 33.1 4.7 0 9.2-.3 13.7-.9 62.8-8.4 92.6-82.8 59-136.4zM529.5 288c-10 0-19.9-1.5-29.5-3.8V384H116v-99.8c-9.6 2.2-19.5 3.8-29.5 3.8-6 0-12.1-.4-18-1.2-5.6-.8-11.1-2.1-16.4-3.6V480c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V283.2c-5.4 1.6-10.8 2.9-16.4 3.6-6.1.8-12.1 1.2-18.2 1.2z"/></svg>'),
            ];

            register_post_type('sd_coupon_store', $args);
        }

        /**
         * Disable block editor from Store post type
         *
         * @param Bool $current_status
         * @param String $post_type
         * @return Bool
         */
        public function disable_block_editor(Bool $current_status, String $post_type)
        {
            if ($post_type === 'sd_coupon_store') {
                return false;
            }
            return $current_status;
        }

        /**
         * Control store post UI
         *
         * @return void
         */
        public function control_store_post_ui()
        {
            add_post_type_support('sd_coupon_store', 'thumbnail');
            add_post_type_support('sd_coupon_store', 'author');
            add_post_type_support('sd_coupon_store', 'comments');
            add_post_type_support('sd_coupon_store', 'custom-fields');
            add_post_type_support('sd_coupon_store', 'revisions');
        }
    }

    $SDCOUPON_Store_Post_Type = new SDCOUPON_Store_Post_Type();
}
