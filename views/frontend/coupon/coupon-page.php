<?php
/**
 * Coupon page template
 */

get_header(); ?>

<main id="sdcc-coupon-page" role="main">

	<?php if (have_posts()): ?>
        <?php while (have_posts()): ?>
            <?php the_post(); ?>

            <article <?php post_class(); ?> id="post-<?php the_ID(); ?>">

                <header class="sdcc-entry-header<?php echo !has_post_thumbnail() ? ' no-thumbnail' : '' ?>">
                    <?php if (has_post_thumbnail() && !post_password_required()): ?>
                        <figure class="sdcc-featured-image">
                            <?php the_post_thumbnail(); ?>
                        </figure><!-- .featured-image -->
                        <div class="sdcc-ft-overlay">&nbsp;</div>
                    <?php endif; ?>
                    
                    <div class="sdcc-coupon">
                        <?php the_title('<h1 class="sdcc-coupon__entry-title">', '</h1>') ?>
                        <div class="sdcc-code">
                            <div class="sdcc-code__input"><?php echo sdcc_coupon_code(get_the_ID()) ?></div>
                            <button class="sdcc-cp-btn sdcc-code__copy-btn" type="button">
                                <?php esc_html_e('Copy', 'sd_coupon_central') ?>
                            </button>
                        </div>
                        <div class="sdcc-coupon__exp">
                            <?php echo sprintf(__('Expired at: %s', 'sd_counpon_central'), sdcc_coupon_exp_date(get_the_ID())) ?>
                        </div>
                        <div class="sdcc-coupon__btn-wrapper">
                            <button type="button" class="sdcc-cp-btn sdcc-cp-btn--block" data-id="<?php echo get_the_ID() ?>">
                                <?php esc_html_e('Go to Shop', 'sd_coupon_central') ?>
                            </button>
                        </div>
                        <?php sdcc_coupon_meta() ?>
                    </div>
                </header><!-- .entry-header -->

                <div class="post-inner">
                    <div class="entry-content">
                        <?php the_content(__('Continue reading', 'twentytwenty')); ?>
                    </div><!-- .entry-content -->
                </div><!-- .post-inner -->

                <div class="section-inner">
                    <?php
                        wp_link_pages(
    array(
                                'before'      => '<nav class="post-nav-links bg-light-background" aria-label="' . esc_attr__('Page', 'twentytwenty') . '"><span class="label">' . __('Pages:', 'twentytwenty') . '</span>',
                                'after'       => '</nav>',
                                'link_before' => '<span class="page-number">',
                                'link_after'  => '</span>',
                            )
);

                        edit_post_link();
                    ?>

                </div><!-- .section-inner -->

                <?php
                    $next_post = get_next_post();
                    $prev_post = get_previous_post();
                ?>

                <?php if ($next_post || $prev_post): ?>
                    <?php
                        $pagination_classes = '';
                        if (! $next_post) {
                            $pagination_classes = ' only-one only-prev';
                        } elseif (! $prev_post) {
                            $pagination_classes = ' only-one only-next';
                        }
                    ?>

                    <nav class="pagination-single section-inner<?php echo esc_attr($pagination_classes); ?>" aria-label="<?php esc_attr_e('Post', 'twentytwenty'); ?>" role="navigation">
                        <hr class="styled-separator is-style-wide" aria-hidden="true" />
                        <div class="pagination-single-inner">
                            <?php if ($prev_post): ?>
                                <a class="previous-post" href="<?php echo esc_url(get_permalink($prev_post->ID)); ?>">
                                    <span class="arrow" aria-hidden="true">&larr;</span>
                                    <span class="title"><span class="title-inner"><?php echo wp_kses_post(get_the_title($prev_post->ID)); ?></span></span>
                                </a>
                            <?php endif; ?>

                            <?php if ($next_post): ?>
                                <a class="next-post" href="<?php echo esc_url(get_permalink($next_post->ID)); ?>">
                                    <span class="arrow" aria-hidden="true">&rarr;</span>
                                        <span class="title"><span class="title-inner"><?php echo wp_kses_post(get_the_title($next_post->ID)); ?></span></span>
                                </a>
                            <?php endif; ?>
                        </div><!-- .pagination-single-inner -->

                        <hr class="styled-separator is-style-wide" aria-hidden="true" />
                    </nav><!-- .pagination-single -->
                <?php endif; ?>

                <?php if ((is_single() || is_page()) && (comments_open() || get_comments_number()) && ! post_password_required()): ?>
                    <div class="comments-wrapper section-inner">
                        <?php comments_template(); ?>
                    </div><!-- .comments-wrapper -->
                <?php endif; ?>

            </article><!-- .post -->
        <?php endwhile; ?>
    <?php endif; ?>

</main><!-- #site-content -->

<?php
get_footer();
