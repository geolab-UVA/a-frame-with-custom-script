if (typeof SILENT === "undefined") {
  SILENT = true;
}

AFRAME.registerComponent("rotate-follow-camera", {
  schema: {},

  init: function () {
    this.rig = document.querySelector("a-scene > a-entity#rig");
    this.camera = this.rig.querySelector("#main-camera");

    SILENT || console.log("Attaching rotate-follow-camera to the entity ");
    SILENT || console.log(this.el);
  },

  tick: function (time, timeDelta) {
    const cameraPosition = new THREE.Vector3();

    // Store the world position of the camera in cameraPosition
    const cameraObject3D = this.camera.object3D;
    cameraObject3D.getWorldPosition(cameraPosition);

    //Look at camera
    const object3D = this.el.object3D;
    object3D.lookAt(cameraPosition);
  }
});
