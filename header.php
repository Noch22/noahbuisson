<header <?php if (!is_front_page()) {
            echo 'class="margin"';
        } ?>>
    <div class="header_bar">
        <?php the_custom_logo() ?>
        <div class="menu">
            <button class="menu">
                <svg width="100" height="100" viewBox="0 0 100 100">
                    <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                    <path class="line line2" d="M 20,50 H 80" />
                    <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                </svg>
            </button>
        </div>
    </div>
    <div class="menu_page">
        <div class="gradient">
        </div>
        <nav class="header">
            <?php
            $home = get_home_url();
            ?>
            <div class="overlay-menu">
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
        </nav>
        <nav class="header_social">
            <ul>
                <?php
                $socials = get_field("reseau_social", "options");
                foreach ($socials as $social):
                ?>
                    <li><a href="<?= $social["lien"]["url"] ?>"><?= $social['icone'] ?></a></li>
                <?php endforeach; ?>
            </ul>
        </nav>
    </div>
</header>