import * as THREE from 'three'
import { TWEEN } from 'three/examples/jsm/libs/tween.module.min.js'
import Experience from './Experience'

export default class MouseAnimation
{
    constructor()
    {
        this.experience = new Experience()
        this.canvas = this.experience.canvas
        this.light = this.experience.world.light

        this.cursor = document.querySelector('#cursor')
        this.hoverElements = document.querySelectorAll('[data-hover_element]')

        this.lightPosition = {}
        this.lightPosition.x = 0
        this.lightPosition.y = 0
        this.lightPosition.z = -5

        this.limits = {}
        this.limits.x = { min: -5, max: 5 }
        this.limits.y = { min: 1.5, max: 3 }

        this.mousePosition = {}
        this.mousePosition.x = 0
        this.mousePosition.y = 0

        window.addEventListener('mousemove', (_event) =>
        {
            this.getMousePosition(_event)
            this.lightPosition.x = ((this.mousePosition.x * (Math.abs(this.limits.x.max)+Math.abs(this.limits.x.min))) / window.innerWidth) - Math.abs(this.limits.x.min)
            this.lightPosition.y = ((this.mousePosition.y * (Math.abs(this.limits.y.max)+Math.abs(this.limits.y.min))) / window.innerHeight) - Math.abs(this.limits.y.min)
            this.lightPosition.x = Math.min(Math.max(this.lightPosition.x , this.limits.x.min), this.limits.x.max)
            this.lightPosition.y = Math.min(Math.max(this.lightPosition.y , this.limits.y.min), this.limits.y.max)
            this.updateLightPosition({
                x: - this.lightPosition.x,
                y: this.lightPosition.y,
                z: this.lightPosition.z
            })
        })
        this.initCursorAnimation()
    }

    getMousePosition = (_event) =>
    {
        _event.preventDefault()

        this.mousePosition.x = _event.clientX
        this.mousePosition.y = _event.clientY
        
    }

    updateCursorPosition = () =>
    {
        this.cursor.style.transform = `translate3d(calc(${this.mousePosition.x}px - 50%),calc(${this.mousePosition.y}px - 50%), 0)`
    }
    
    updateLightPosition(position)
    {
        new TWEEN.Tween(this.light.light.position)
            .to(position, 100)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .start()
            .onComplete(function ()
            {
                TWEEN.remove(this)
            })

    }

    initCursorAnimation = () =>
    {
        this.cursor.classList.add('active')
    
        // HOVER
        if(this.hoverElements.length < 1) return
        for(const element of this.hoverElements)
        {
            element.addEventListener('mouseover', () =>
            {
                this.cursor.classList.add('hovered')
            })
            element.addEventListener('mouseleave', () =>
            {
                this.cursor.classList.remove('hovered')
            })
        }
    }
    
    update()
    {

        this.updateCursorPosition()
        TWEEN.update()
    }
}