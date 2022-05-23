import * as THREE from 'three'
import Experience from '../Experience'

export default class F1
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.resource = this.resources.items.f1

        this.setModel()
    }

    setModel()
    {
        this.model = this.resource.scene
        this.model.scale.set(0.7, 0.7, 0.7)
        this.model.position.set(0, -0.5, 0)
        this.model.rotation.z = 0.05 * Math.PI
        this.model.rotation.y = 0.1 * Math.PI
        this.model.rotation.x = 0.05 * Math.PI
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