AFRAME.registerComponent('collider-check', {
  schema: {},
  dependencies: ['raycaster'], // dependencies allows for control on ordering of component initialization if a component depends on one or more other components. Component names specified in the dependencies array will be initialized left-to-right before initializing the current component. If the dependency have other dependency components, those other dependency components will be ordered in the same manner:
  init: function () { // corre al inicio, cuando el componente se crea
    this.eventHandler = (data) => {
      console.log('Player hit something!', data);
    };
    this.el.addEventListener('raycaster-intersected', this.eventHandler);
  },
  update: function() { // corre cuando el componente se le updatean props.

  },
  tick: function() { // corre on cada uno de los frames del render loop.

  } ,
  remove: function() { // se llama cuando el componente se remueve.
    this.el.removeEventListener('raycaster-intersected', this.eventHandler);
  }
});
