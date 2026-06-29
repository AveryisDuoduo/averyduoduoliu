// =========================================================
// Works Page: Project Filters
// Used by: visual-works.html
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-chip");
    const projectCards = document.querySelectorAll(".project-card");
  
    const featuredSection = document.querySelector(".featured-work-section");
    const selectedSection = document.querySelector(".selected-works-section");
  
    if (!filterButtons.length || !projectCards.length) return;
  
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const selectedFilter = button.dataset.filter;
  
        // Update active button style
        filterButtons.forEach((btn) => {
          btn.classList.remove("active");
        });
  
        button.classList.add("active");
  
        // Show / hide project cards
        projectCards.forEach((card) => {
          const categories = card.dataset.category
            ? card.dataset.category.split(" ")
            : [];
  
          const shouldShow =
            selectedFilter === "all" || categories.includes(selectedFilter);
  
          card.classList.toggle("is-hidden", !shouldShow);
        });
  
        // Hide Featured Project section if its card is hidden
        if (featuredSection) {
          const featuredCards = featuredSection.querySelectorAll(".project-card");
          const hasVisibleFeatured = Array.from(featuredCards).some(
            (card) => !card.classList.contains("is-hidden")
          );
  
          featuredSection.classList.toggle("is-hidden", !hasVisibleFeatured);
        }
  
        // Hide Selected Projects section if all selected cards are hidden
        if (selectedSection) {
          const selectedCards = selectedSection.querySelectorAll(".project-card");
          const hasVisibleSelected = Array.from(selectedCards).some(
            (card) => !card.classList.contains("is-hidden")
          );
  
          selectedSection.classList.toggle("is-hidden", !hasVisibleSelected);
        }
      });
    });
  });

  // =========================================================
// Subtle Page Transition
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("page-loaded");
  
    const internalLinks = document.querySelectorAll("a[href]");
  
    internalLinks.forEach((link) => {
      const href = link.getAttribute("href");
  
      const isExternal = link.target === "_blank";
      const isAnchor = href.startsWith("#");
      const isEmail = href.startsWith("mailto:");
      const isFile = href.endsWith(".pdf");
  
      if (isExternal || isAnchor || isEmail || isFile) return;
  
      link.addEventListener("click", (event) => {
        event.preventDefault();
  
        document.body.classList.remove("page-loaded");
        document.body.classList.add("page-leaving");
  
        setTimeout(() => {
          window.location.href = href;
        }, 260);
      });
    });
  });