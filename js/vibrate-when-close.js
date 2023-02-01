AFRAME.registerComponent("vibrate-when-close", {
  schema: {},
  init: function () {
    this.rig = document.querySelector("a-scene > a-entity#rig");
    this.camera = this.rig.querySelector("[camera]");
    this.tick = AFRAME.utils.throttleTick(this.tick, 10, this);
    this.localTime = 0;

    // Record position at time of init
    this.basePosition = this.el.object3D.position.clone();
    this.displacement = new THREE.Vector3();
    // Initialize local variables (types)
    this.cameraPosition = new THREE.Vector3();
    this.elGlobalPosition = new THREE.Vector3();
  },

  tick: function (time, timeDelta) {
    // Add references to many of the objects in play
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
    // const elGlobalPosition = this.elGlobalPosition;
    // elObject3D.getWorldPosition(elGlobalPosition);
    // # Custom logic

    const elGlobalPosition = this.elGlobalPosition;
    elObject3D.getWorldPosition(elGlobalPosition);
    let distSquared = elGlobalPosition.distanceToSquared(cameraPosition);

    if (distSquared < 25) {
      this.localTime +=
        timeDelta *
        Math.min(0.04, 3 / (distSquared * distSquared * distSquared));

      const displacement = this.displacement;
      displacement.set(
        Math.sin(this.localTime) / 10,
        Math.sin(this.localTime * 1.5 + 2) / 15,
        0
      );

      const basePosition = this.basePosition;
      const elPosition = elObject3D.position;
      elPosition.addVectors(basePosition, displacement);
    }
  }
});
