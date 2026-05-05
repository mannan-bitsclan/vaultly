// Convert category name to URL-friendly slug
export const categoryToSlug = (category) => {
  return category.toLowerCase().replace(/\s+/g, "-");
};

// Convert URL slug back to category name
export const slugToCategory = (slug) => {
  const categoryMap = {
    "ghost-charges": "Ghost Charges",
    "security-cascade": "Security Cascade",
    "fronting-tax": "Fronting Tax",
    "zombie-tools": "Zombie Tools",
  };
  return categoryMap[slug] || slug;
};
