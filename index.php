<?php

wp_head();
?>

<div class="cursor-follower">
    <div class="cursor-follower-inner"></div>
</div>

<div id="swup" class="transition-fade">
    <main style="padding: 0; position: relative;">
        <?php
        get_header();
        ?>
        <div class="main">


            <?php
            echo get_the_content();

            ?>

        </div>

    </main>

    <?php
    get_footer();
    ?>
</div>


<?php

wp_footer();

?>