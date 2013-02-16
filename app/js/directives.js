/* Directives */

angular.module('imageConscious.directives', [])
    .directive('s5bImageSelection', function () {
        return {
            replace: true,
            transclude: true,
            scope: {
                s5bImageSelection: '='
            },
            // Use the bean "convention" to get the image source value.
            template: '<div class="wrapper"><img src="{{s5bImageSelection.get()}}"/><input class="imageSearch" type="file" accept="image/*"/><div class="control">Change</div></div>',
            link: function (scope, element, attrs, controller) {
                var img = element.find('img')[0];
                var fileInput = element.find('input')[0];
                var control = element.children('div.control');
                fileInput.onchange = function () {
                    var file = this.files[0];
                    var reader = new FileReader();
                    reader.onload = function () {
                        var imageContent = reader.result;
                        scope.$apply(function () {
                            // Use the bean "convention" to reach all the way back to set the model value; in implementation detail of the bean itself.
                            scope.s5bImageSelection.set(imageContent);
                        });
                        img.setAttribute('src', imageContent);
                    };
                    reader.readAsDataURL(file);
                };
                control.bind('click', function (event) {
                    event.stopPropagation();
                    fileInput.click();
                });
            }
        };
    });