export const mapCategoryToId = (category) => {
  const categoryToId = {
    women: 1,
    men: 2,
  };

  if (categoryToId.hasOwnProperty(category)) {
    return categoryToId[category];
  }
};

export const mapImageToCategory = (category) => {
  const imageToCategory = {
    men: "https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    women:
      "https://images.pexels.com/photos/6567737/pexels-photo-6567737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1  ",
    children:
      "https://images.pexels.com/photos/6437585/pexels-photo-6437585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    shoes:
      "https://images.pexels.com/photos/2421374/pexels-photo-2421374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    accessories:
      "https://cdn.pixabay.com/photo/2017/03/20/15/13/wrist-watch-2159351_1280.jpg",
  };

  if (imageToCategory.hasOwnProperty(category)) {
    return imageToCategory[category];
  }
};
