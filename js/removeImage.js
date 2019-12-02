function removeImage(event) {
    var index = event.target.dataset.index;
    if (index) {
        images.splice(index, 1);
        displayImages(imagesList, images);
        localStorage.setItem('images', JSON.stringify(images));
    }
}