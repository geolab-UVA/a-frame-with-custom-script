AFRAME.registerComponent("rotate-follow-camera", {
  schema: {},

  init: function () {
    this.rig = document.querySelector("a-scene > a-entity#rig");
    this.camera = this.rig.querySelector("#main-camera");
    // Register the tickFunction as a throttled tick
    this.tick = AFRAME.utils.throttleTick(
      this.tickFunction, //
      10, // Run at most once every 10ms
      this
    );

    /**
     * Initialize local variables
     * This is useful
     */
    this.cameraPosition = new THREE.Vector3();
  },

  /**
   * tickFunction that will be wrapped to be throttled.
   * See the code in the `init` function
   */

  tickFunction: function (time, timeDelta) {
    /**
     * Add references to many of the objects in play.
     * Uncomment the necessary variables
     */

    // Rig:
    // const rig = this.rig;
    // const rigObject3D = rig.object3D;
    // const rigPosition = rigObject3D.position;
    // const rigRotation = rigObject3D.rotation;

    // Camera:
    const camera = this.camera;
    const cameraObject3D = camera.object3D;
    const cameraPosition = this.cameraPosition;
    cameraObject3D.getWorldPosition(cameraPosition); // Store the world position of the camer in cameraPosition

    // The current entity
    const entity = this.el;
    const entityObject3D = entity.object3D;
    // const elRotation = elObject3D.rotation;
    // const elPosition = elObject3D.position;

    // # Custom logic

    entityObject3D.lookAt(cameraPosition);
  }
});
