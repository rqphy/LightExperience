import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Experience from './Experience'

export default class Camera
{
    constructor()
    {
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas
        this.debug = this.experience.debug

        // Front
        // x: 0
        // y: 0
        // z: 8
        // Side
        // x: -5.533833711541049
        // y: 1.4644913989102093
        // z: -3.1130141339266837
        // Top
        // x: -1.6056395550286033
        // y: 7.690507651664971
        // z: -1.5093090071262074


        if(this.debug.active)
        {
            this.debugFolder = this.debug.ui.addFolder('Camera')
        }

        this.setInstance()
        this.setOrbitControls()
    }

    setInstance()
    {
        this.instance = new THREE.PerspectiveCamera(
            35,
            this.sizes.width / this.sizes.height,
            0.1,
            100
        )
        this.instance.position.set(0, 0, 8)
        this.scene.add(this.instance)

        // Debug
        if(this.debug.active)
        {
            this.debugFolder
                .add(this.instance.position, 'x')
                .min(-5)
                .max(5)
                .step(0.001)
            this.debugFolder
                .add(this.instance.position, 'y')
                .min(-5)
                .max(5)
                .step(0.001)
            this.debugFolder
                .add(this.instance.position, 'z')
                .min(-10)
                .max(10)
                .step(0.001)
            this.debugFolder
                .add(this.instance.rotation, 'x')
                .name('rotationX')
                .min(-5)
                .max(5)
                .step(0.001)
            this.debugFolder
                .add(this.instance.rotation, 'y')
                .name('rotationY')
                .min(-5)
                .max(5)
                .step(0.001)
            this.debugFolder
                .add(this.instance.rotation, 'z')
                .name('rotationZ')
                .min(-10)
                .max(10)
                .step(0.001)
        }
    }

    setOrbitControls()
    {
        this.controls = new OrbitControls(this.instance, this.canvas)
        this.controls.enableDamping = true
    }

    resize()
    {
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }

    update()
    {
        this.controls.update()
    }
}