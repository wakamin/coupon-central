<?php
/**
 * Coupon archive template
 */

get_header();

// Get store ID, store term ID
$storeId = get_queried_object_id();
$store = sdcc_store_data($storeId);
?>

<main class="sdcc-archive">

    <header class="sdcc-archive__header sdcc-archive__header--store">
        <div class="sdcc-store-logo">
            <img src="<?php echo sdcc_store_logo($storeId) ?>" alt="<?php echo esc_attr($store->name) ?>" />
        </div>

        <h1 class="sdcc-archive__title"><?php echo get_the_archive_title() ?></h1>

        <div class="sdcc-archive__short-desc"><?php echo $store->short_description ?></div>
    </header>

    <div class="sdcc-archive__content">
        <div class="sdcc-archive__coupon-list">
            <?php
                if (have_posts()) {
                    while (have_posts()) {
                        the_post();
                        include_once SDCOUPON_PLUGIN_PATH . 'views/frontend/coupon/coupon-card.php';
                    }
                }
            ?>
        </div>
        
        <?php the_archive_description('<p class="sdcc-archive__description">', '</p>'); ?>
    </div>
    
</main>

<?php
get_footer();
