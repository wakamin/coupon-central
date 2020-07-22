<?php

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit();
}

/**
 * Coupon metabox
 */
if (!class_exists('SDCOUPON_Metabox')) {
    class SDCOUPON_Metabox
    {
        /**
         * Class constructor
         */
        public function __construct()
        {
            add_action('save_post', array($this, 'save_coupon_metabox'), 10, 2);

            add_action('add_meta_boxes', array($this, 'coupon_meta_boxes'));
        }

        /**
         * Nonce field
         *
         * @return void
         */
        private function _nonceField()
        {
            wp_nonce_field('sd_coupon_update_post_metabox', 'sd_coupon_update_post_nonce');
        }

        /**
         * Save coupon metabox
         *
         * @param Int $post_id
         * @param Object $post
         * @return void
         */
        public function save_coupon_metabox(Int $post_id, $post)
        {
            $edit_cap = get_post_type_object($post->post_type)->cap->edit_post;
            if (!current_user_can($edit_cap, $post_id)) {
                return;
            }

            if (!isset($_POST['sd_coupon_update_post_nonce']) ||
                !wp_verify_nonce($_POST['sd_coupon_update_post_nonce'], 'sd_coupon_update_post_metabox')
            ) {
                return;
            }
    
            // Update description
            if (array_key_exists('sd_coupon_description', $_POST)) {
                update_post_meta(
                    $post_id,
                    '_sd_coupon_description',
                    sanitize_text_field($_POST['sd_coupon_description'])
                );
            }

            // Update link
            if (array_key_exists('sd_coupon_link', $_POST)) {
                update_post_meta(
                    $post_id,
                    '_sd_coupon_link',
                    sanitize_text_field($_POST['sd_coupon_link'])
                );
            }

            // Update coupon code
            if (array_key_exists('sd_coupon_code', $_POST)) {
                update_post_meta(
                    $post_id,
                    '_sd_coupon_code',
                    sanitize_text_field($_POST['sd_coupon_code'])
                );
            }
        }

        /**
         * Add coupon metaboxes
         *
         * @return void
         */
        public function coupon_meta_boxes()
        {
            // Description
            add_meta_box('sd_coupon_description', __('Description', 'sd_coupon_central'), array($this, 'description_html'), 'sd_coupon', 'normal');

            // Link
            add_meta_box('sd_coupon_link', __('Link', 'sd_coupon_central'), array($this, 'link_html'), 'sd_coupon', 'normal');

            // Coupon code
            add_meta_box('sd_coupon_code', __('Coupon Code', 'sd_coupon_central'), array($this, 'coupon_code_html'), 'sd_coupon', 'side');
        }

        /**
         * Coupon description metabox html form
         *
         * @param Object $post
         * @return Html view
         */
        public function description_html($post)
        {
            $description = get_post_meta($post->ID, '_sd_coupon_description', true);
            $this->_nonceField();

            include_once SDCOUPON_PLUGIN_PATH . 'views/admin/coupon/metabox/description.php';
        }

        /**
         * Coupon link metabox html form
         *
         * @param Object $post
         * @return Html view
         */
        public function link_html($post)
        {
            $link = get_post_meta($post->ID, '_sd_coupon_link', true);
            $this->_nonceField();

            include_once SDCOUPON_PLUGIN_PATH . 'views/admin/coupon/metabox/link.php';
        }

        /**
        * Coupon code metabox html form
        *
        * @param Object $post
        * @return Html view
        */
        public function coupon_code_html($post)
        {
            $code = get_post_meta($post->ID, '_sd_coupon_code', true);
            $this->_nonceField();

            include_once SDCOUPON_PLUGIN_PATH . 'views/admin/coupon/metabox/code.php';
        }
    }
    $SDCOUPON_Metabox = new SDCOUPON_Metabox();
}
