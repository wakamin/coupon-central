<table class="sd-coupon-mbox-form-table" role="presentation">
    <tbody>
        <?php foreach ($this->couponDetailsMetaBoxes as $mBox): ?>
            <tr>
                <th scope="row">
                    <label for="sd_coupon_code"><?php echo $mBox['name'] ?></label>
                </th>
                <td>
                    <?php if ($mBox['field_type'] == 'text'): ?>
                        <input type="text" class="<?php echo $mBox['wide_field'] ? 'widefat' : '' ?>" name="<?php echo $mBox['key'] ?>" id="<?php echo $mBox['key'] ?>" value="<?php echo get_post_meta($post->ID, $mBox['key'], true) ?>" />
                    <?php endif; ?>

                    <?php if ($mBox['field_type'] == 'datepicker'): ?>
                        <input type="text" class="sdcoupon-datepicker" name="<?php echo $mBox['key'] ?>" id="<?php echo $mBox['key'] ?>" value="<?php echo get_post_meta($post->ID, $mBox['key'], true) ?>" />
                    <?php endif; ?>

                    <?php if ($mBox['field_type'] == 'checkbox'): ?>
                        <input type="checkbox" name="<?php echo $mBox['key'] ?>" id="<?php echo $mBox['key'] ?>" value="yes" />
                    <?php endif; ?>
                </td>
            </tr>
        <?php endforeach; ?>
    </tbody>
</table>