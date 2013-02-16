
/* Name space */

var s5b = s5b || {};


/* Model */

s5b.model = {};

/* Have one of the following two lines uncommented. */
//s5b.model.mainImageSrc = 'http://glenparthbengals.com.au/wp-content/uploads/2012/09/kitten.jpg'; // Tests starting with an initial value.
s5b.model.mainImageSrc = '';  // Test the default value processing.


/* Utility */


// Must pass in the object and field to work around JavaScript's pass-by-value-ish nature.
s5b.imageSrcBeanFactory = function (parent, field, defaultValue) {
    return {
        get: function () {
            return parent[field] || defaultValue;
        },
        set: function (newsource) {
            parent[field] = newsource;
        }
    };
};

/* Angular initialisation */

s5b.app = angular.module('imageConscious', ['imageConscious.directives']);

