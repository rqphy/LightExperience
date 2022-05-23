import * as THREE from 'three'
import Experience from '../Experience'

export default class Light
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.debug = this.experience.debug

        // Debug
        if(this.debug.active)
        {
            this.debugFolder = this.debug.ui.addFolder('Light')
        }

        this.setLight()
        this.setHelper()
    }

    setLight()
    {
        this.light = new THREE.DirectionalLight('#ffffff', 1.5)
        this.light.castShadow = true
        this.light.shadow.camera.far = 15
        this.light.shadow.mapSize.set(1024, 1024)
        this.light.shadow.normalBias = 0.05
        this.light.position.set(0.084, 0.821, 5)
        this.scene.add(this.light)

        // Debug
        if(this.debug.active)
        {
            this.debugFolder
                .add(this.light, 'intensity')
                .name('lightIntensity')
                .min(0)
                .max(10)
                .step(0.001)

            this.debugFolder
                .add(this.light.position, 'x')
                .name('lightX')
                .min(-5)
                .max(5)
                .step(0.001)

            this.debugFolder
                .add(this.light.position, 'y')
                .name('lightY')
                .min(-5)
                .max(5)
                .step(0.001)

            this.debugFolder
                .add(this.light.position, 'z')
                .name('lightZ')
                .min(-5)
                .max(5)
                .step(0.001)
        }
    }

    setHelper()
    {
        this.helper = new THREE.DirectionalLightHelper(this.light, 1)
        this.scene.add(this.helper)
    }

}