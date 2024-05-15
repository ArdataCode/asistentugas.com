<?php

function flying_scripts_inject_js() {

  $timeout = esc_attr(get_option('flying_scripts_timeout'));
    ?>
<script type="text/javascript" id="flying-scripts">

</script>
    <?php
}

add_action( 'wp_print_footer_scripts', 'flying_scripts_inject_js');