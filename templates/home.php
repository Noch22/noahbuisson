<?php /* Template Name: Page d'accueil */
wp_head();
$gallery = get_field("gallery", 'options');

?>
<div class="container">
    <div class="col c-1">
        <?php
        for ($i = 0; $i < 5; $i++) {
        ?>
            <div class="item"><img src="<?= $gallery[$i]["url"] ?>" alt=""></div>
        <?php
        }

        ?>
    </div>
    <div class="col c-2">
        <?php
        for ($i = 5; $i < 10; $i++) {
        ?>
            <div class="item"><img src="<?= $gallery[$i]["url"] ?>" alt=""></div>
        <?php
        }

        ?>
    </div>
    <div class="col c-3">
        <?php
        for ($i = 10; $i < 15; $i++) {
        ?>
            <div class="item"><img src="<?= $gallery[$i]["url"] ?>" alt=""></div>
        <?php
        }

        ?>
    </div>
    <div class="col c-4">
        <?php
        for ($i = 15; $i < 20; $i++) {
        ?>
            <div class="item"><img src="<?= $gallery[$i]["url"] ?>" alt=""></div>
        <?php
        }

        ?>
    </div>
    <div class="col c-5">
        <?php
        for ($i = 20; $i < 25; $i++) {
        ?>
            <div class="item"><img src="<?= $gallery[$i]["url"] ?>" alt=""></div>
        <?php
        }

        ?>
    </div>
</div>
<div class="content smooth-scroll">
    <div class="cursor-follower">
        <div class="cursor-follower-inner"></div>
    </div>
    <div class="homepage">
        <div class="swiper">
            <div class="swiper-wrapper">
                <?php
                foreach ($gallery as $image) {
                ?>
                    <div class="swiper-slide">
                        <img src="<?= $image["url"] ?>" alt="<?= $image["alt"] ?>">
                    </div>
                <?php
                }
                ?>
            </div>
        </div>
        <div class="homepage_text">
            <h1>Noah Buisson</h1>
        </div>
        <div class="marquee">
            <p>Photographe • Développeur •</p>
            <p>Photographe • Développeur •</p>
            <p>Photographe • Développeur •</p>
            <p>Photographe • Développeur •</p>
        </div>
        <?php get_header(); ?>
        <main>
            <?php

            $gallery = get_posts(array(
                "post_type" => "projet",
                "posts_per_page" => -1
            ));
            ?>
            <div class="circle"></div>
            <div class="banner" id="work">
                <div class="swiper-container gallery-top">
                    <div class="swiper-wrapper">
                        <?php
                        foreach ($gallery as $image) {
                            $link = get_permalink($image->ID);
                            $cover = get_field("image_mise_en_avant", $image->ID);
                            $title = get_field("nom_du_projet", $image->ID);
                            $add_text = get_field("texte_additionnel", $image->ID);
                            $project_type = get_field("type_de_projet", $image->ID);
                        ?>

                            <div class="swiper-slide">

                                <h2 class="slider_text_title"><?= $title ?></h2>
                                <p class="slider_text_additional"><?= $add_text ?></p>
                                <a href="<?= $link ?>" class="slider_link">Découvrir</a>
                                <img width="<?= $cover['sizes']['cover_image-width'] ?>" height="<?= $cover['sizes']['cover_image-height'] ?>" src="<?= $cover['sizes']['cover_image'] ?>" alt="<?= $cover['alt'] ?>">

                            </div>

                        <?php
                        }
                        ?>
                    </div>
                </div>
            </div>
            <div class="swiper-container gallery-thumbs">
                <div class="swiper-wrapper">
                    <?php
                    foreach ($gallery as $image) {
                        $cover = get_field("image_mise_en_avant", $image->ID);
                    ?>
                        <div class="swiper-slide">
                            <img width="<?= $cover['sizes']['cover_thumbnail-width'] ?>" height="<?= $cover['sizes']['cover_thumbnail-height'] ?>" src="<?= $cover['sizes']['cover_thumbnail'] ?>" alt="<?= $cover['alt'] ?>">
                        </div>
                    <?php
                    }
                    ?>

                </div>
            </div>
            <div class="about" id="about">
                <img src="<?= get_template_directory_uri() . "/src/assets/LOGO.png" ?>" alt="image Noah Buisson">
                <div class="about_text">
                    <h1>Noah Buisson</h1>
                    <p>Salut 👋! Moi, c'est <span id="me">Noah</span>. Passionné par la photographie, le développement web, l'IoT et tout ce qui concerne le web, je suis actuellement en 3ème année de BUT Métiers du Multimédia et de l'Internet à Chambéry (73). Explorez mes projets en vous baladant sur mon site ! Si vous avez des besoins, une petite rubrique contact se trouve juste en dessous. N'hésitez pas à me contacter !</p>
                </div>
            </div>
            <div class="contact">
                <div class="marquee contact_marquee" id="contact">
                    <?php
                    for ($i = 0; $i < 4; $i++) {
                    ?>
                        <p>Contact • Contact •</p>
                    <?php
                    }
                    ?>
                </div>
                <div class="contact_ways">
                    <?= do_shortcode('[contact-form-7 id="70406fa" title="Formulaire de contact"]') ?>
                    <div class="contact_links">
                        <ul>
                            <?php
                            $socials = get_field("reseau_social", "options");
                            foreach ($socials as $social):
                            ?>
                                <li><a href="<?= $social["lien"]["url"] ?>" target="_blank"><?= $social['icone'] ?> <?= $social["lien"]["title"] ?></a></li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                </div>

            </div>
            <?php get_footer(); ?>
        </main>
    </div>
</div>