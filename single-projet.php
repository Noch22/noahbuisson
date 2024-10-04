<?php wp_head(); ?>
<div class="cursor-follower">
    <div class="cursor-follower-inner"></div>
</div>
<?php
$contenus = get_field('contenu');
$projet = get_post();
$title = get_field("nom_du_projet");
$add_text = get_field("texte_additionnel");
$project_type = get_field("type_de_projet");
$term = get_term($project_type);
$image = get_field("image_mise_en_avant");
?>
<main style="position: relative; padding: 0;">
    <?php get_header(); ?>
    <div class="top_project">
        <div class="top_titles">
            <h1><?= $title ?></h1>
            <p><?= $add_text ?></p>
        </div>

        <div class="marquee marquee_projects">
            <?php
            for ($i = 0; $i < 10; $i++) {
            ?>
                <p><?= $term->name ?> • </p>
            <?php
            }
            ?>
        </div>
        <div class="top_image">
            <img src="<?= $image['url'] ?>" alt="<?= $image['alt'] ?>">
        </div>
</main>
<?php
foreach ($contenus as $content) {
    $template_name = $content['acf_fc_layout'];
    $template_file = sprintf('%s/layouts/%s.php', get_template_directory(), $template_name);
    if (file_exists($template_file)) {

        printf('<section class="layout_%s">', $template_name);
        include($template_file);
        printf('</section>');
    }
}

?>




<?php get_footer(); ?>