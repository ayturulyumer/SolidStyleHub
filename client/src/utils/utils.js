function mapCategoryToId(category) {
  const categoryToId = {
    women: 1,
    men: 2,
  };

  if (categoryToId.hasOwnProperty(category)) {
    return categoryToId[category];
  }
}

export default mapCategoryToId;
