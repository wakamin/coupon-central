
<div id="tabs">
    <ul>
        <li><a href="#tabs-1"><?php _e('General', 'sd_coupon_central') ?></a></li>
    </ul>
    <div id="tabs-1">
        <table class="coupon-form-table" role="presentation">
            <tbody>
                <tr>
                    <th scope="row">
                        <label for="sd_coupon_link"><?php _e('Link', 'sd_coupon_central') ?></label>
                    </th>
                    <td>
                        <input class="widefat" name="sd_coupon_link" id="sd_coupon_link" value="<?php echo esc_attr($link) ?>" />
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                        <label for="sd_coupon_code"><?php _e('Coupon Code', 'sd_coupon_central') ?></label>
                    </th>
                    <td>
                        <input class="widefat" name="sd_coupon_code" id="sd_coupon_code" value="<?php echo esc_attr($code) ?>" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>