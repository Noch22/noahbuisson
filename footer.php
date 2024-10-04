<footer>
    <div class="top_footer">
        <div class="left_top_footer">
            <div class="socials">
                <ul>
                    <?php
                    $socials = get_field("reseau_social", "options");
                    foreach ($socials as $social):
                    ?>
                        <li><a href="<?= $social["lien"]["url"] ?>" target="_blank"><?= $social['icone'] ?></a></li>
                    <?php endforeach; ?>
                </ul>
            </div>
            <div class="footer_nav">
                <img src="<?= get_template_directory_uri() . "/src/assets/see_youv2.gif" ?>" alt="">
                <nav>
                    <ul>
                        <?php
                        $home = get_home_url();
                        ?>
                        <li><a href="<?= $home . "#work" ?>">Work</a></li>
                        <li><a href="<?= $home . "#about" ?>">About</a></li>
                        <li><a href="<?= $home . "#contact" ?>">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="right_top_footer"></div>
    </div>
    <div class="bottom_footer">
        <div class="left_bottom_footer">
            <?php $mentions = get_field("page_mentions_legales", "options") ?>
            <a href="<?= $mentions ?>">Mentions légales</a>
        </div>
        <div class="right_bottom_footer">
            <h3>France, <?= do_shortcode('[year]') ?></h3>
            <p>&copy; Tous droits réservés à Noah Buisson</p>
        </div>
    </div>
    <div class="color_aura"></div>
</footer>




<?php
wp_footer();
?>