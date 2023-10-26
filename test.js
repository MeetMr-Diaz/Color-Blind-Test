function handleResponse(userResponse) {
    setUserResponses([...userResponses, userResponse]);

    // Move to the next image or finish the test
    if (currentImageIndex < testImages.length - 1) {
        currentImageIndex++;
        displayImage();
    } else {
        calculateResults();
    }
}
