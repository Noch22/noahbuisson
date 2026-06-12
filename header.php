<header <?php if (!is_front_page()) {
            echo 'class="margin"';
        } ?>>
    <div class="header_bar">
        <?php the_custom_logo() ?>
        <div class="menu">
            <?php
            $home = get_home_url();
            ?>
            <div class="menu-item">
                <a href="<?= $home . "#work" ?>" data-label="Work">Work</a>
            </div>
            <div class="menu-item">
                <a href="<?= $home . "#about" ?>" data-label="About">About</a>
            </div>
            <div class="menu-item">
                <a href="<?= $home . "#contact" ?>" data-label="Contact">Contact</a>
            </div>
        </div>
    </div>
</header>