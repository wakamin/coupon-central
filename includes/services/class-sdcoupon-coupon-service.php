<?php

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit();
}

/**
 * Admin scripts class
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
            $couponData->image = $this->getCouponImage();
            $couponData->is_exclusive = $this->isExclusive();
            $couponData->expired_date = $this->expiredDate();
            $couponData->coupon_code = $this->couponCode();
            $couponData->coupon_link = $this->couponLink();

            return $couponData;
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
