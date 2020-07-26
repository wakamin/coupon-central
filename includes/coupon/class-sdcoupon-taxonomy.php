<?php

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit();
}

/**
 * Coupon post type class
 */
if (!class_exists('SDCOUPON_Taxonomy')) {
    class SDCOUPON_Taxonomy
    {
        public function __construct()
        {
            // Store taxonomy
            add_action('init', array($this, 'register_store_taxonomy'));
            add_action('init', array($this, 'register_store_logo_field'));

            add_action("sd_coupon_store_add_form_fields", array($this, 'add_store_logo_field'), 2);
            add_action("sd_coupon_store_edit_form_fields", array($this, 'edit_store_logo_field'), 2, 2);

            add_action("sd_coupon_store_add_form_fields", array($this, 'add_description_field'), 10);
            add_action("sd_coupon_store_edit_form_fields", array($this, 'edit_description_field'), 10, 2);

            add_action('create_sd_coupon_store', array($this, 'save_store'));
            add_action('edit_sd_coupon_store', array($this, 'save_store'));

            add_filter('manage_edit-sd_coupon_store_columns', array($this, 'modify_store_column'));
            add_filter('manage_sd_coupon_store_custom_column', array($this, 'render_store_logo_column'), 10, 3);

            // Coupon category taxonomy
            add_action('init', array($this, 'register_coupon_category_taxonomy'));
            add_action("sd_coupon_category_add_form_fields", array($this, 'add_description_field'), 10);
            add_action("sd_coupon_category_edit_form_fields", array($this, 'edit_description_field'), 10, 2);

            add_filter('manage_edit-sd_coupon_category_columns', array($this, 'modify_category_column'));
        }

        /**
         * Register store taxonomy
         *
         * @return void
         */
        public static function register_store_taxonomy()
        {
            $labels = [
                'name' => _x('Stores', 'Taxonomy general name', 'sd_coupon_central'),
                'singular_name' => _x('Store', 'Taxonomy singular name', 'sd_coupon_central'),
                'search_items' => __('Search Store', 'sd_coupon_central'),
                'all_items' => __('All Stores', 'sd_coupon_central'),
                'edit_item' => __('Edit Store', 'sd_coupon_central'),
                'update_item' => __('Update Store', 'sd_coupon_central'),
                'add_new_item' => __('Add New Store', 'sd_coupon_central'),
                'new_item_name' => __('New Store Name', 'sd_coupon_central'),
                'menu_name' => __('Stores', 'sd_coupon_central'),
            ];

            $args = [
                'hierarchical' => false,
                'labels' => $labels,
                'show_ui' => true,
                'show_in_menu' => true,
                'show_in_rest' => true,
                'show_admin_column' => true,
                'query_var' => true,
                'rewrite' => [
                    'slug' => apply_filters('sdcoupon_store_taxonomy_slug', 'store'),
                    'with_front' => apply_filters('sdcoupon_store_taxonomy_with_front', true)
                ],
                'capabilities' => ['manage_categories', 'edit_posts'],
            ];

            register_taxonomy('sd_coupon_store', 'sd_coupon', $args);
        }

        /**
         * Replace add description field using WYSIWYG editor
         *
         * @return void
         */
        public function add_description_field()
        {
            ?>
            <div class="form-field term-description-wysiwyg-wrap">
                <label for="description"><?php _e('Description', 'sd_coupon_central') ?></label>
                <?php wp_editor(html_entity_decode(''), 'description', array('media_buttons' => true)); ?>
                <script>
                    jQuery(window).ready(function($){
                        $('.term-description-wrap').remove();
                    });
                </script>
            </div>
            <?php
        }

        /**
         * Replace edit description field using WYSIWYG editor
         *
         * @param Object $term
         * @param String $taxonomy
         * @return void
         */
        public function edit_description_field($term, String $taxonomy)
        {
            ?>
                <tr valign="top">
                    <th scope="row">Description</th>
                    <td>
                        <?php wp_editor(html_entity_decode($term->description), 'description', array('media_buttons' => true)); ?>
                        <script>
                            jQuery(window).ready(function($){
                                $('label[for=description]').parent().parent().remove();
                            });
                        </script>
                    </td>
                </tr>
            <?php
        }

        /**
         * Register store logo field
         *
         * @return void
         */
        public function register_store_logo_field()
        {
            $args = [
                'object_subtype' => 'sd_coupon_store',
                'show_in_rest' => true,
                'type' => 'string',
                'single' => true,
                'sanitize_callback' => 'esc_url_raw',
            ];

            register_meta('term', '_sd_coupon_store_logo', $args);
        }

        /**
         * Add store logo field on store taxonomy page
         *
         * @return void
         */
        public function add_store_logo_field()
        {
            $logo = false; ?>

            <div class="form-field term-store-logo-wrap">
                <label><?php _e('Store Logo', 'sd_coupon_central') ?></label>
                <?php include_once SDCOUPON_PLUGIN_PATH . 'views/admin/coupon/taxonomy/store/store-logo-field.php'; ?>
            </div>
            <?php
        }

        /**
         * Add store logo field on edit store page
         *
         * @param Object $term
         * @param String $taxonomy
         * @return void
         */
        public function edit_store_logo_field($term, String $taxonomy)
        {
            $logo = $this->get_store_logo($term->term_id); ?>
            <tr class="form-field sd-coupon-store-logo-wrap">
                <th scope="row"><label for="sd-coupon-store-logo"><?php _e('Store Logo', 'sd_coupon_central'); ?></label></th>
                <td>
                    <?php include_once SDCOUPON_PLUGIN_PATH . 'views/admin/coupon/taxonomy/store/store-logo-field.php'; ?>
                </td>
            </tr>
            <?php
        }

        /**
         * Get store logo URL
         *
         * @param Int $termId
         * @return String
         */
        public function get_store_logo(Int $termId)
        {
            $logo = get_term_meta($termId, '_sd_coupon_store_logo', true);
            $logo = esc_url_raw($logo);

            return $logo;
        }

        /**
         * Add store logo column into store list page
         * Remove description column
         *
         * @param Array $columns
         * @return Array
         */
        public function modify_store_column(array $columns)
        {
            $new_columns = array(
                'cb' => '<input type="checkbox" />',
                'name' => __('Name', 'sd_coupon_central'),
                'sd-coupon-store-logo' => __('Logo', 'sd_coupon_central'),
                // 'description' => __('Description', 'sd_coupon_central'),
                'slug' => __('Slug', 'sd_coupon_central'),
                'posts' => __('Count', 'sd_coupon_central')
            );

            return $new_columns;
        }

        /**
         * Remove description column
         *
         * @param Array $columns
         * @return Array
         */
        public function modify_category_column(array $columns)
        {
            unset($columns['description']);

            return $columns;
        }

        /**
         * Render store logo column
         *
         * @param String $out
         * @param String $column
         * @param Id $term_id
         * @return String
         */
        public function render_store_logo_column(String $out, String $column_name, Int $term_id)
        {
            if ($column_name == 'sd-coupon-store-logo') {
                $logo  = $this->get_store_logo($term_id);
                $out = sprintf('<span class="sd-coupon-store-logo-block" style="" ><img src="%s" /></div>', esc_attr($logo));
            }
            
            return $out;
        }

        /**
         * On save store
         *
         * @param Int $termId
         * @return void
         */
        public function save_store(Int $termId)
        {
            if (!isset($_POST['sd_coupon_store_logo_nonce']) ||
                !wp_verify_nonce($_POST['sd_coupon_store_logo_nonce'], 'sd_coupon_store_logo_field')
            ) {
                return;
            }

            $oldLogo  = $this->get_store_logo($termId);
            $newLogo = isset($_POST['sd_coupon_store_logo']) ? esc_url_raw($_POST['sd_coupon_store_logo']) : '';

            if ($oldLogo !== $newLogo) {
                update_term_meta($termId, '_sd_coupon_store_logo', $newLogo);
            }
        }

        /**
         * Register coupon category taxonomy
         *
         * @return void
         */
        public static function register_coupon_category_taxonomy()
        {
            $labels = [
                'name' => _x('Coupon Categories', 'Taxonomy general name', 'sd_coupon_central'),
                'singular_name' => _x('Coupon Category', 'Taxonomy singular name', 'sd_coupon_central'),
                'search_items' => __('Search Coupon Category', 'sd_coupon_central'),
                'all_items' => __('All Coupon Categories', 'sd_coupon_central'),
                'parent_item' => __('Parent Coupon Category', 'sd_coupon_central'),
                'parent_item_colon' => __('Parent Coupon Category:', 'sd_coupon_central'),
                'edit_item' => __('Edit Coupon Category', 'sd_coupon_central'),
                'update_item' => __('Update Coupon Category', 'sd_coupon_central'),
                'add_new_item' => __('Add New Coupon Category', 'sd_coupon_central'),
                'new_item_name' => __('New Coupon Category Name', 'sd_coupon_central'),
                'menu_name' => __('Categories', 'sd_coupon_central'),
            ];

            $args = [
                'hierarchical' => true,
                'labels' => $labels,
                'show_ui' => true,
                'show_in_menu' => true,
                'show_in_rest' => true,
                'show_admin_column' => true,
                'query_var' => true,
                'rewrite' => [
                    'slug' => apply_filters('sdcoupon_coupon_category_taxonomy_slug', 'coupon-category'),
                    'with_front' => apply_filters('sdcoupon_coupon_category_taxonomy_with_front', true)
                ],
                'capabilities' => ['manage_categories', 'edit_posts'],
            ];

            register_taxonomy('sd_coupon_category', 'sd_coupon', $args);
        }
    }

    $SDCOUPON_Taxonomy = new SDCOUPON_Taxonomy();
}
