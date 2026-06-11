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
                <p><a href="<?= $home . "#work" ?>">Work</a></p>
            </div>
            <div class="menu-item">
                <p><a href="<?= $home . "#about" ?>">About</a></p>
            </div>
            <div class="menu-item">
                <p><a href="<?= $home . "#contact" ?>">Contact</a></p>
            </div>
        </div>
    </div>
</header>