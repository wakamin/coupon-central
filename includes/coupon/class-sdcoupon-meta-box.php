<?php

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit();
}

/**
 * Coupon metabox
 */
if (!class_exists('SDCOUPON_Meta_Box')) {
    class SDCOUPON_Meta_Box
    {
        public $couponDetailsMetaBoxes;

        /**
         * Class constructor
         */
        public function __construct()
        {
            add_action('save_post', array($this, 'save_coupon_meta_box'), 10, 2);

            add_action('add_meta_boxes', array($this, 'coupon_meta_boxes'));
        }

        /**
         * Set coupon details meta boxes
         *
         * @param Array $metaBoxes
         * @return void
         */
        public function setCouponDetailsMetaBoxes(array $metaBoxes)
        {
            $this->couponDetailsMetaBoxes = $metaBoxes;
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
        public function save_coupon_meta_box(Int $post_id, $post)
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

            foreach ($this->couponDetailsMetaBoxes as $mBox) {
                // Update meta box
                if (array_key_exists($mBox['key'], $_POST)) {
                    update_post_meta(
                        $post_id,
                        $mBox['key'],
                        sanitize_text_field($_POST[$mBox['key']])
                    );
                }
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

            // Coupon detail
            $couponDetailsMetaBoxes = apply_filters('sd_coupon_detail_meta_boxes', []);

            array_multisort(
                array_map(function ($el) {
                    return $el['sort_order'];
                }, $couponDetailsMetaBoxes),
                SORT_ASC,
                $couponDetailsMetaBoxes
            );

            $this->setCouponDetailsMetaBoxes($couponDetailsMetaBoxes);
            add_meta_box('sd_coupon_detail', __('Coupon Detail', 'sd_coupon_central'), array($this, 'coupon_detail_html'), 'sd_coupon', 'normal');
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
         * Coupon detail metabox html form
         *
         * @param Object $post
         * @return Html view
         */
        public function coupon_detail_html($post)
        {
            $this->_nonceField();
            include_once SDCOUPON_PLUGIN_PATH . 'views/admin/coupon/metabox/coupon-detail.php';
        }
    }
    $SDCOUPON_Meta_Box = new SDCOUPON_Meta_Box();
}
