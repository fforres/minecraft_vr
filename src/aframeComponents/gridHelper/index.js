AFRAME.registerComponent('grid', {
  schema: {
    size: { default: 20 },
    divisions: { default: 20 },
    colorCenterLine: { default: 'red' },
    colorGrid: { default: 'black' }
  },
  init: function () {
    const scene = this.el.object3D;
    const { size, divisions, colorCenterLine, colorGrid } = this.data;
    const gridHelper = new THREE.GridHelper(
      size,
      divisions,
      colorCenterLine,
      colorGrid
    );
    gridHelper.name = 'GridHelper';
    scene.add(gridHelper);
  },
  remove: function () {
    const scene = this.el.object3D;
    scene.remove(scene.getObjectByName('GridHelper'));
  }
});
