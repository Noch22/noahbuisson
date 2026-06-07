<header <?php if (!is_front_page()) {
          echo 'class="margin"';
        } ?>>
  <div class="header_bar">
    <?php the_custom_logo() ?>
    <div class="menu">
      <?php
      $home = get_home_url();
      ?>
      <p id="header-plus">+</p>
      <a
        href="<?= $home . "#work" ?>"
        class="nav-roll">
        <div class="nav-roll-wrap">
          <span data-label="(index)">(index)</span>
        </div>
      </a>
      <a
        href="<?= $home . "#about" ?>"
        class="nav-roll">
        <div class="nav-roll-wrap">
          <span data-label="(about)">(about)</span>
        </div>
      </a>
      <a
        href="<?= $home . "#contact" ?>"
        class="nav-roll">
        <div class="nav-roll-wrap">
          <span data-label="(contact)">(contact)</span>
        </div>
      </a>
    </div>
</header>