# A (VR-compatible) A-Frame scene with custom logic

This page contains a basic a-frame scene with custom logic. Custom logic in a-frame is implemented by defining a [component](https://aframe.io/docs/1.4.0/introduction/entity-component-system.html#concept) as explained [here](https://aframe.io/docs/1.4.0/introduction/writing-a-component.html)

The component is then attached to an `<a-entity>`.

In this example, we create the `move-with-rig` component and attach it to the blue cube. The component makes the entity follow the rig. The rig is the common (conventional) name used for the `entity` containing the camera.

The component has 
- a `schema`
- an `init` function
- a `tick` function

## The schema
TODO
## The init function
TODO
## The tick function
TODO

# Resources

- Documentation for [A-Frame](https://aframe.io/docs/master/introduction/)
- Documentation [component API](https://aframe.io/docs/1.4.0/core/component.html)
