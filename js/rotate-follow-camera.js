AFRAME.registerComponent("rotate-follow-camera", {
  schema: {},

  init: function () {
    this.rig = document.querySelector("a-scene > a-entity#rig");
    this.camera = this.rig.querySelector("[camera]");
    this.tick = AFRAME.utils.throttleTick(this.tick, 10, this);

    // Initialize local variables (types)
    this.cameraPosition = new THREE.Vector3();
  },

  tick: function (time, timeDelta) {
    // Add references to many of the objects in play
    // uncomment the necessary variables

    // # Rig
    // const rig = this.rig;
    // const rigObject3D = rig.object3D;
    // const rigPosition = rigObject3D.position;
    // const rigRotation = rigObject3D.rotation;

    // # Camera
    const camera = this.camera;
    const cameraObject3D = camera.object3D;
    const cameraPosition = this.cameraPosition;
    cameraObject3D.getWorldPosition(cameraPosition); // Store the world position of the camer in cameraPosition

    // # Element
    const el = this.el;
    const elObject3D = el.object3D;
    // const elRotation = elObject3D.rotation;
    // const elPosition = elObject3D.position;

    // # Custom logic

    elObject3D.lookAt(cameraPosition);
  }
});
