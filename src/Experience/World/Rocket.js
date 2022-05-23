import * as THREE from 'three'
import Experience from '../Experience'

export default class Rocket
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.resource = this.resources.items.rocket

        this.setModel()
    }

    setModel()
    {
        this.model = this.resource.scene
        this.model.scale.set(2.5, 2.5, 2.5)
        this.model.position.set(-0.15, -0.5, 0)
        this.model.rotation.z = Math.PI * 1.80
        this.model.rotation.y = Math.PI * 1.60
        this.scene.add(this.model)

        this.model.traverse((child) =>
        {
            if(child instanceof THREE.Mesh)
            {
                child.castShadow = true
            }
        })
    }
}