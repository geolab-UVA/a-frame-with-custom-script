# A (VR-compatible) A-Frame scene with custom logic

This page contains a basic A-Frame scene with custom logic. Custom logic in a-frame is implemented by defining a 
[component](https://aframe.io/docs/1.4.0/introduction/entity-component-system.html#concept) as explained 
[here](https://aframe.io/docs/1.4.0/introduction/writing-a-component.html)

The component is then attached to an `<a-entity>`. In this example, we create the `rotate-follow-camera` component and attach it to the eyes of a face. 
The component makes the entity follow the camera position.


## The `rotate-follow-camera` component
The component `rotate-follow-camera` is stored in the file [js/rotate-follow-camera.js](./js/rotate-follow-camera.js) and it gets pulled into our project using the  `<script>` tag in the header. 

```html
<script src="js/rotate-follow-camera.js"></script>
```
The file  [js/rotate-follow-camera.js](./js/rotate-follow-camera.js) and the logic of the component is coded in Javascript.

The component `rotate-follow-camera`, as any components, has 
- an `init` function that does the initialization logic when the component gets created;
- a `tickFunction` function that gets executed on each frame;
- a `schema` that allows passing arguments to the component (empty in this case);

When a component is attached to an `<a-entity>` it creates a Javascript "object" that can be referenced using the variable `this` from the code of the component.

The the `<a-entity>` can be accessed from within the attached component using `this.el`.
The 3D object associated to an `<a-entity>` can be accessed throught the `el.Object3D` property of the element `el`
So the component should access the 3D object throught `this.el.Object3D`. Some helpful functions of `Object3D` are documented in the [three.js docs](https://threejs.org/docs/#api/en/core/Object3D). A-Frame is based on the library [three.js](https://threejs.org/)


# Resources

- Documentation for [A-Frame](https://aframe.io/docs/master/introduction/)
- Documentation [component API](https://aframe.io/docs/1.4.0/core/component.html)
