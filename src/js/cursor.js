document.addEventListener("DOMContentLoaded", function () {
    const cursorFollower = document.querySelector(".cursor-follower");
    const cursorInner = document.querySelector(".cursor-follower-inner");

    document.addEventListener("mousemove", function (e) {
      const { clientX: mouseX, clientY: mouseY } = e;
      const cursorWidth = cursorFollower.offsetWidth; // Largeur du curseur
      const cursorHeight = cursorFollower.offsetHeight; // Hauteur du curseur
      const innerWidth = cursorInner.offsetWidth; // Largeur du curseur interne
      const innerHeight = cursorInner.offsetHeight; // Hauteur du curseur interne
       const coefficient = 1; // Modifiez ce coefficient selon la vitesse souhaitée
  cursorFollower.style.transform = `translate(${(mouseX - cursorWidth / 2) * coefficient}px, ${(mouseY - cursorHeight / 2) * coefficient}px)`;
    });

    document.addEventListener("scroll", function () {
      const { clientX: mouseX, clientY: mouseY } = event;
      const cursorWidth = cursorFollower.offsetWidth; // Largeur du curseur
      const cursorHeight = cursorFollower.offsetHeight; // Hauteur du curseur
      const innerWidth = cursorInner.offsetWidth; // Largeur du curseur interne
      const innerHeight = cursorInner.offsetHeight; // Hauteur du curseur interne
      const coefficient = 1; // Modifiez ce coefficient selon la vitesse souhaitée
      cursorFollower.style.transform = `translate(${(mouseX - cursorWidth / 2) * coefficient}px, ${(mouseY - cursorHeight / 2) * coefficient}px)`;
    });

    const images = document.querySelectorAll("img");
    const links = document.querySelectorAll("a");
    const footer = document.querySelector("footer");

    images.forEach((image) => {
      image.addEventListener("mouseenter", () => {
        cursorInner.style.backgroundImage = `url('https://mirkozeppieri.emanuelepapale.com/assets/images/arrow_up.png')`;
        cursorInner.style.width = "80px";
        cursorInner.style.height = "80px";
        cursorInner.style.backgroundSize = "40px";
      });

      image.addEventListener("mouseleave", () => {
        cursorInner.style.backgroundImage = "none";
        cursorInner.style.width = "8px";
        cursorInner.style.height = "8px";
        cursorInner.style.backgroundSize = "0px";
      });
    });

    links.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        cursorInner.style.backgroundImage = `url('https://i.ibb.co/cv0WsPc/curseur-see.gif')`;
        cursorInner.style.width = "100px";
        cursorInner.style.height = "100px";
        cursorInner.style.backgroundSize = "80px";
    });

      link.addEventListener("mouseleave", () => {
        cursorInner.style.backgroundImage = "none";
        cursorInner.style.width = "8px";
        cursorInner.style.height = "8px";
        cursorInner.style.backgroundSize = "0px";
      });
    });


if(footer){
    footer.addEventListener("mouseenter", () => {
      cursorInner.style.backgroundImage = `url('https://i.ibb.co/jDfQWgh/see-youv2.gif')`;
      cursorInner.style.width = "100px";
      cursorInner.style.height = "100px";
      cursorInner.style.backgroundSize = "80px";
  });

    footer.addEventListener("mouseleave", () => {
      cursorInner.style.backgroundImage = "none";
      cursorInner.style.width = "8px";
      cursorInner.style.height = "8px";
      cursorInner.style.backgroundSize = "0px";
    });
}

});