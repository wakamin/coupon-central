<?php

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit();
}

/**
 * Coupon service
 */
if (!class_exists('SDCOUPON_Coupon_Service')) {
    class SDCOUPON_Coupon_Service
    {
        /**
         * Coupon post ID
         *
         * @var Int
         */
        public $couponId;

        /**
         * Class constructor
         *
         * @param Int $couponId. Coupon post ID
         */
        public function __construct(Int $couponId)
        {
            $this->couponId = $couponId;
        }

        /**
         * Get coupon data
         *
         * @return Object
         */
        public function getStoreData()
        {
            $couponData = get_post($this->couponId);
            $couponData->store = $this->getStore();
            $couponData->image = $this->getCouponImage();
            $couponData->is_exclusive = $this->isExclusive();
            $couponData->expired_date = $this->expiredDate();
            $couponData->coupon_code = $this->couponCode();
            $couponData->coupon_link = $this->couponLink();

            return $couponData;
        }

        /**
         * Get store
         *
         * @param Bool $single
         * @return Mixed Object WP_Term if single, Array if not single
         */
        public function getStore(Bool $single = true)
        {
            $stores = get_the_terms($this->couponId, 'sd_coupon_store');

            if ($single) {
                return $stores[0];
            }

            return $stores;
        }

        /**
         * Get categories
         *
         * @return Array of WP_Term
         */
        public function getCategories()
        {
            return get_the_terms($this->couponId, 'sd_coupon_category');
        }

        /**
         * Get coupon image
         *
         * @return String
         */
        public function getCouponImage()
        {
            return esc_attr(get_post_meta($this->couponId, '_sd_coupon_image', true));
        }

        /**
         * Is exclusive coupon
         *
         * @return boolean
         */
        public function isExclusive()
        {
            return esc_attr(get_post_meta($this->couponId, '_sd_coupon_is_exclusive', true));
        }

        /**
         * Get coupon expired date
         *
         * @return String
         */
        public function expiredDate()
        {
            return esc_attr(get_post_meta($this->couponId, '_sd_coupon_expired_date', true));
        }

        /**
         * Get coupon code
         *
         * @return String
         */
        public function couponCode()
        {
            return esc_attr(get_post_meta($this->couponId, '_sd_coupon_code', true));
        }

        /**
         * Get coupon link
         *
         * @return String
         */
        public function couponLink()
        {
            return esc_attr(get_post_meta($this->couponId, '_sd_coupon_link', true));
        }
    }
}
