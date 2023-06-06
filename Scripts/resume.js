window.onload = function() {
  addSectionDropdown();
}

function addSectionDropdown() {
  const sections = document.querySelectorAll(".section");

  for(const sec of sections) {
    const $secHeader = $(sec).find(".sectionHeader")
    const $secContent = $(sec).find(".sectionBody");
    const $secIcon = $(sec).find(".dropDownArrow");

    $secHeader.on("click", function() {
      $secContent.slideToggle();
      if ($secIcon.hasClass('rotate')) {
        $secIcon.removeClass('rotate');
        $secIcon.addClass('rotateBack');
      } else {
        $secIcon.addClass('rotate');
        $secIcon.removeClass('rotateBack');
      }
    });
  }
}


