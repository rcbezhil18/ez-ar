AFRAME.registerComponent('model-rotator', {
    tick: function (time, delta) {
        this.el.object3D.rotation.y += 0.001 * delta;
    }
});

window.addEventListener('DOMContentLoaded', () => {

    const scene = document.querySelector('a-scene');
    const car = document.getElementById('carModel');

    scene.addEventListener('click', () => {
        if (!car.getAttribute('visible')) {
            car.setAttribute('visible', true);
            car.setAttribute('model-rotator', '');
        }
    });

});
