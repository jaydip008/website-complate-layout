/* Menu Open Function S */
function openNav() {
    document.getElementById("menu").style.left = "0";
    document.getElementById("menu__open").style.display = "none";
    document.getElementById("menu__close").style.display = "inline-block";
    $("body").addClass('menu_overlap');
  }
  /* Menu Open Function E */
  
  /* Menu Close Function S */
  function closeNav() {
    document.getElementById("menu").style.left = "-250px";
    document.getElementById("menu__open").style.display = "inline-block";
    document.getElementById("menu__close").style.display = "none";
    $("body").removeClass('menu_overlap');
    $(".menu .is-open").removeClass("is-close");
  }
  /* Menu Close Function E */
  
  /* Responsive Class Add S */
  $( document ).ready(function() {
    $(".menu ul li").find("ul").before('<span class="is-open"></span>');
    $(".menu ul li").find("ul").parent("li").addClass("is-open-a");
    $(".menu .is-open").click(function(event) {
        event.preventDefault();
        $(this).toggleClass("is-close");
    });
  });
  /* Responsive Class Add E */
  