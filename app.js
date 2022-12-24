const init = async () =>  {

    const canvas = document.getElementById("myCanvas")

    // create a babyloneJs engine
    const engine = new BABYLON.Engine(canvas, true)
    // create a scene
    const scene = new BABYLON.Scene(engine)

    // create a camera
    const camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 0, -10), scene)

    // create a light
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene)
    
    // creating dat gui
	const gui = new dat.GUI();

	gui.domElement.style.marginTop = "0";
	gui.domElement.id = "datGUI";


    // create a box
    const box = BABYLON.MeshBuilder.CreateBox('box', {
        width: 1,
        height: 1
    }, scene)


    // create a material
    const material = new BABYLON.StandardMaterial("material", scene);
    material.diffuseColor = new BABYLON.Color3(1, 1, 0)
    // diffuseTexture and path
    box.material = material

    // const params = {
    //     textField: "This is a placeholder text"
    // }

    // gui.add(params, "textfiled").onFinishChange(function (value) {
    //     // do something bro
    // })


      

    // changing properties
    const rotateFolder = gui.addFolder('3D Rotation')
    rotateFolder.add(box.rotation, 'y', 0, Math.PI).name("Rotate X Axis")
    rotateFolder.add(box.rotation, 'x', 0, Math.PI).name("Rotate Y Axis")
    rotateFolder.add(box.rotation, 'z', 0, Math.PI).name("Rotate Z Axis")
    rotateFolder.open()

    const scaleFolder = gui.addFolder("Scale")
    scaleFolder.add(box.scaling, 'x', 1, Math.PI).name("Scale X Axis")
    scaleFolder.add(box.scaling, 'y', 1, Math.PI).name("Scale Y Axis")
    scaleFolder.close()

    const cameraFolder = gui.addFolder("Camera Settings")
    cameraFolder.add(camera.position, 'z', -20, -2).name("Zoom In/Out")
    cameraFolder.open()

    // edit
    // const editFolder = gui.addFolder("Edit");
    // editFolder.add("Button").onchange(function() {
    //     draw()
    // })

    let textarea = document.createElement('p')
    document.body.appendChild(textarea)


    function draw() {
        const ctx = canvas
        ctx.font = "48px serif";
        ctx.fillText("Hello world", 10, 50);
    }




   	// Destroy the GUI on reload to prevent multiple stale UI from being displayed on screen.
    const oldgui = document.getElementById("datGUI");
	if (oldgui != null){
		oldgui.remove();
	}


    engine.runRenderLoop(() => {
        scene.render()
    })

}

// create our scene
// const mainScene = createScene()
// engine.runRenderLoop(() => {
//     mainScene.render()
// })

(async () => {
    await init();
})();