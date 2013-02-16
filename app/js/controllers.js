s5b = s5b || {};

/* Controllers */

s5b.controller = function ($scope) {
    $scope.title = 'Image Conscious';
    // Use the bean factory to create the image association with the model.
    $scope.imageSrcBean = s5b.imageSrcBeanFactory(s5b.model, 'mainImageSrc', './img/default.JPG');
    console.log($scope.imageSrcBean)
};

s5b.controller.$inject = ['$scope'];
