<?php

if (!function_exists('sdcc_coupon_image')) {
    /**
     * Get coupon image
     *
     * @param Int $couponId
     * @return String
     */
    function sdcc_coupon_image(Int $couponId)
    {
        $coupon = new SDCOUPON_Coupon_Service($couponId);
        return $coupon->getCouponImage();
    }
}

if (!function_exists('sdcc_is_exclusive_coupon')) {
    /**
     * Is exclusive coupon
     *
     * @param Int $couponId
     * @return Boolean
     */
    function sdcc_is_exclusive_coupon(Int $couponId)
    {
        $coupon = new SDCOUPON_Coupon_Service($couponId);
        return $coupon->isExclusive();
    }
}

if (!function_exists('sdcc_coupon_exp_date')) {
    /**
     * Coupon expired date
     *
     * @param Int $couponId
     * @return String
     */
    function sdcc_coupon_exp_date(Int $couponId)
    {
        $coupon = new SDCOUPON_Coupon_Service($couponId);
        return $coupon->expiredDate();
    }
}

if (!function_exists('sdcc_coupon_code')) {
    /**
     * Coupon code
     *
     * @param Int $couponId
     * @return String
     */
    function sdcc_coupon_code(Int $couponId)
    {
        $coupon = new SDCOUPON_Coupon_Service($couponId);
        return $coupon->couponCode();
    }
}

if (!function_exists('sdcc_coupon_link')) {
    /**
     * Coupon link
     *
     * @param Int $couponId
     * @return String
     */
    function sdcc_coupon_link(Int $couponId)
    {
        $coupon = new SDCOUPON_Coupon_Service($couponId);
        return $coupon->couponLink();
    }
}
