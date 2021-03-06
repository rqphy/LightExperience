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
    }

    setListeners()
    {
        this.btns = [...document.querySelectorAll('.views-list .view')]
        for(const btn of this.btns)
        {
            btn.addEventListener('click', () =>
            {
                this.handleViewClick(btn)
            })
        }
    }

    handleViewClick(button)
    {
        // Check if view is already active
        if(button.classList.contains('active')) return

        // update camera
        let coords = {}
        switch (button.dataset.view) {
            case 'side':
                coords.x = -5.193833711541049
                coords.y = 1.4644913989102093
                coords.z = -3.1130141339266837
                break
            case 'top':
                coords.x = -1.3556395550286033
                coords.y = 7.690507651664971
                coords.z = -1.5093090071262074
                break
        
            default:
                coords.x = this.camera.defaultPos.x
                coords.y = this.camera.defaultPos.y
                coords.z = this.camera.defaultPos.z
                break
        }
        this.animateCamera(coords)

        // update header
        this.updateViewButtons(button)
    }

    updateViewButtons(button) 
    {
        document.querySelector('.view.active')?.classList.remove('active')
        button.classList.add('active')
    }

    animateCamera(position)
    {
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