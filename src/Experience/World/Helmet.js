import * as THREE from 'three'
import Experience from '../Experience'

export default class Helmet
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.resource = this.resources.items.damagedHelmet
        console.log(this.resource)

        this.setModel()
    }

    setModel()
    {
        this.model = this.resource.scene
        this.model.scale.set(1.5, 1.5, 1.5)
        // this.model.rotation.y = Math.PI * 0.25
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