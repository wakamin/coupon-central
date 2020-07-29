<?php
/**
 * Coupon archive template
 */

get_header();

$term_id = get_queried_object_id();
$logo_url = get_term_meta($term_id, '_sd_coupon_store_logo', true);
$store_name = get_the_archive_title();
?>

<main class="sdcc-archive">

    <header class="sdcc-archive__header sdcc-archive__header--store">
        <div class="sdcc-store-logo">
            <img src="<?php echo esc_url($logo_url) ?>" alt="<?php echo esc_attr($store_name) ?>" />
        </div>
        <h1 class="sdcc-archive__title"><?php echo get_the_archive_title() ?></h1>
    </header>

    <div class="sdcc-archive__content">
        <div class="sdcc-archive__coupon-list">
            <?php
                if (have_posts()) {
                    $i = 0;
                    while (have_posts()) {
                        $i++;
                        if ($i > 1) {
                            echo '<hr class="post-separator styled-separator is-style-wide section-inner" aria-hidden="true" />';
                        }
                        the_post();

                        get_template_part('template-parts/content', get_post_type());
                    }
                }
            ?>
        </div>
        
        <?php the_archive_description('<p class="sdcc-archive__description">', '</p>'); ?>
    </div>
    
</main>

<?php
get_footer();
