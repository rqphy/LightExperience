import * as THREE from 'three'
import { TWEEN } from 'three/examples/jsm/libs/tween.module.min.js'
import Experience from './Experience'

export default class CameraAnimation
{
    constructor()
    {
        this.experience = new Experience()
        this.canvas = this.experience.canvas
        this.camera = this.experience.camera
        this.light = this.experience.world.light

        this.btns = []

        this.setListeners()

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
    }

    setListeners()
    {
        this.btns = [...document.querySelectorAll('.views-list .view')]
        for(const btn of this.btns)
        {
            btn.addEventListener('click', () =>
            {
                this.handleViewClick(btn.dataset.view)
            })
        }
    }

    handleViewClick(view)
    {
        console.log(view)
        let coords = {}
        switch (view) {
            case 'side':
                coords.x = -5.533833711541049
                coords.y = 1.4644913989102093
                coords.z = -3.1130141339266837
                break
            case 'top':
                coords.x = -1.6056395550286033
                coords.y = 7.690507651664971
                coords.z = -1.5093090071262074
                break
        
            default:
                coords.x = 0
                coords.y = 0
                coords.z = 8
                break
        }

        console.log(coords)
        this.animateCamera(coords)
    }

    animateCamera(position)
    {
        // console.log(this.camera)
        new TWEEN.Tween(this.camera.instance.position)
            .to(position, 1800)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .start()
            .onComplete(function ()
            {
                TWEEN.remove(this)
            })
    }

    update()
    {
        TWEEN.update()
    }
}