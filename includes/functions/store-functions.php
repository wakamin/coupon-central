<?php

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit();
}

if (!function_exists('sdcc_store_data')) {
    /**
     * Get store description
     *
     * @param Int $storeId. Store term ID
     * @return Object
     */
    function sdcc_store_data(Int $storeId)
    {
        $service = new SDCOUPON_Store_Service($storeId);
        return $service->getStoreData();
    }
}

if (!function_exists('sdcc_store_logo')) {
    /**
     * Get store logo
     *
     * @param Int $storeId. Store term ID
     * @return String
     */
    function sdcc_store_logo(Int $storeId)
    {
        $service = new SDCOUPON_Store_Service($storeId);
        return $service->getStoreLogo();
    }
}

if (!function_exists('sdcc_store_short_description')) {
    /**
     * Get store description
     *
     * @param Int $storeId. Store term ID
     * @return String
     */
    function sdcc_store_short_description(Int $storeId)
    {
        $service = new SDCOUPON_Store_Service($storeId);
        return $service->getStoreShortDescription();
    }
}
