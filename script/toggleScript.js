document.addEventListener("DOMContentLoaded", function () {
    const toggleCategories = document.getElementById("toggleCategories");
    const categoriesWindow = document.getElementById("categoriesWindow");
  
    toggleCategories.addEventListener("click", function (e) {
      e.preventDefault();
      categoriesWindow.classList.toggle("tagActive");
    });
  
    // Close categories window when clicking outside of it
    document.addEventListener("click", function (e) {
      if (!categoriesWindow.contains(e.target) && e.target !== toggleCategories) {
        categoriesWindow.classList.remove("tagActive");
      }
    });
  });
  