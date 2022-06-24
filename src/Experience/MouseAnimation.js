import * as THREE from 'three'
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

        window.addEventListener('mousemove', this.getMousePosition)
        this.initCursorAnimation()
    }

    getMousePosition = (_event) =>
    {
        _event.preventDefault()

        this.mousePosition.x = _event.clientX - (window.innerWidth / 2)
        this.mousePosition.y = _event.clientY - (window.innerHeight / 2)
        
    }

    updateCursorPosition = () =>
    {
        this.cursor.style.transform = `translate3d(calc(${this.mousePosition.x}px - 50%),calc(${this.mousePosition.y}px - 50%), 0)`
    }
    
    updateLightPosition(_x, _y, _z)
    {
        this.light.light.position.set(
            _x,
            _y,
            _z
        )
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
        this.lightPosition.x += (this.mousePosition.x - this.lightPosition.x) * .2
        this.lightPosition.y += (this.mousePosition.y - this.lightPosition.y) * .2
        this.lightPosition.x = Math.min(Math.max(this.lightPosition.x , this.limits.x.min), this.limits.x.max)
        this.lightPosition.y = Math.min(Math.max(this.lightPosition.y , this.limits.y.min), this.limits.y.max)
        this.updateLightPosition(
            - this.lightPosition.x,
            this.lightPosition.y,
            this.lightPosition.z
        )
        this.updateCursorPosition()
    }
    //https://stackoverflow.com/questions/53887057/threejs-object-look-at-mouse-with-ease
}