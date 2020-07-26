<?php

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit();
}

/**
 * Coupon metabox
 */
if (!class_exists('SDCOUPON_Store_Meta_Box')) {
    class SDCOUPON_Store_Meta_Box implements SDCOUPON_Meta_Box_Contracts
    {
        /**
         * Class constructor
         */
        public function __construct()
        {
            add_action('add_meta_boxes', array($this, 'meta_boxes'));

            add_action('save_post', array($this, 'save_meta_box'), 10, 2);
        }

        /**
         * Nonce field
         *
         * @return void
         */
        public function nonceField()
        {
            wp_nonce_field('sd_coupon_store_update_post_metabox', 'sd_coupon_store_update_post_nonce');
        }

        /**
         * Add meta boxes
         *
         * @return void
         */
        public function meta_boxes()
        {
            // Description
            add_meta_box('sd_store_logo', __('Store Logo', 'sd_coupon_central'), array($this, 'store_logo_html'), 'sd_coupon_store', 'side');
        }

        /**
         * Save meta box
         *
         * @param Int $post_id
         * @param Onject $post
         * @return void
         */
        public function save_meta_box(Int $post_id, $post)
        {
            $edit_cap = get_post_type_object($post->post_type)->cap->edit_post;
            if (!current_user_can($edit_cap, $post_id)) {
                return;
            }

            if (!isset($_POST['sd_coupon_update_post_nonce']) ||
                !wp_verify_nonce($_POST['sd_coupon_store_update_post_nonce'], 'sd_coupon_store_update_post_metabox')
            ) {
                return;
            }
    
            // Update logo
            if (array_key_exists('sd_coupon_store_logo', $_POST)) {
                update_post_meta(
                    $post_id,
                    '_sd_coupon_store_logo',
                    sanitize_text_field($_POST['sd_coupon_store_logo'])
                );
            }
        }

        /**
         * Store logo html view
         *
         * @param Object $post
         * @return Html view
         */
        public function store_logo_html($post)
        {
            $logo = get_post_meta($post->ID, '_sd_coupon_store_logo', true);
            $this->nonceField();

            include_once SDCOUPON_PLUGIN_PATH . 'views/admin/store/meta-box/store-logo.php';
        }
    }

    $SDCOUPON_Store_Meta_Box = new SDCOUPON_Store_Meta_Box();
}
