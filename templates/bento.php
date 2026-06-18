<?php /* Template Name: Page bento */
wp_head();

?>

<div id="swup" class="transition-fade">
    <div class="cursor-follower">
        <div class="cursor-follower-inner"></div>
    </div>
    <div class="profile_picture">
        <img src="<?= get_template_directory_uri() . "/src/assets/LOGO.png" ?>" alt="image Noah Buisson">
    </div>
    <div class="profile_name">
        <h1>Noah <span id="buisson">Buisson</span></h1>
        <p>Photographe et développeur 🚀</p>
    </div>
    <div class="cards">
        <?php
        $socials = get_field("mes_liens", "options");
        foreach ($socials as $social):
            $html_string = $social['icone'];
            $class = "fa-instagram";
            $linkedin = "fa-linkedin";
            $is_instagram = preg_match('<i class="[^"]*' . $class . '[^"]*">', $html_string);
            $is_linkedin = preg_match('<i class="[^"]*' . $linkedin . '[^"]*">', $html_string);
        ?>
            <div class="card<?php print $is_instagram ? " instagram" : "";
                            print $is_linkedin ? " linkedin" : ""; ?>">
                <div class="card_top">
                    <?= $social['icone'] ?>
                    <p class="bento_card_title"><?= $social['lien']['title'] ?></p>
                </div>

                <a href="<?= $social["lien"]["url"] ?>" target="_blank" class="bento_follow">Suivre</a>
            </div>
        <?php endforeach; ?>


    </div>
</div>



<?php
wp_footer();
?>