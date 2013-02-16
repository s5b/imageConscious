imageConscious
==============

*Started: 16 February 2013 -- Stuart Begg.*

Mechanism to load images using AngularJS directive.

This is a spike to investigate loading images from the file system and saving the
data representation of the image in a JavaScript model object. It uses an AngularJS
implementation of a directive to load the image and set the image value back into
the JavaScript model object.

It illustrates a mechanism for reaching back into the controller scope of the image
element container, and from there setting the value of the associated JavaScript
model using a "bean-like" convention.

The code also supplies a default image for when the JavaScript model element is empty.
(I hope you like kittens.)

At the bottom of the page is displayed the value of the scoped controller variable (updated
automatically through AngularJS), plus separate display of the value of the JavaScript model
(updated using a setInterval refresh on the display element in the page).


(This project is based on the angular seed.)

-end-