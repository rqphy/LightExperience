import * as THREE from 'three'
import Experience from '../Experience'

export default class Example
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.setGeometry()
        this.setTextures()
        this.setMaterial()
        this.setMesh()
    }

    setGeometry()
    {
        this.geometry = new THREE.BoxGeometry(1, 1, 1)
    }

    setTextures()
    {
        this.textures = {}
        
        // Example from sources.js
        // this.textures.wall = this.resources.items.wall
        // this.textures.wall.encoding = THREE.sRGBEncoding
        // this.textures.wall.repeat.set(1.5, 1.5)
        // this.textures.wall.wrapS = THREE.RepeatWrapping
        // this.textures.wall.wrapT = THREE.RepeatWrapping
    }

    setMaterial()
    {
        this.material = new THREE.MeshStandardMaterial({
            color: 0xffff00
        })
    }

    setMesh()
    {
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.scene.add(this.mesh)
    }
}