import * as THREE from 'three'
import Experience from './Experience'

export default class MouseAnimation
{
    constructor()
    {
        this.experience = new Experience()
        this.canvas = this.experience.canvas
        this.light = this.experience.world.light
        console.log(this.experience)

        this.lightPosition = {}
        this.lightPosition.x = 0
        this.lightPosition.y = 0

        this.limits = {}
        this.limits.x = { min: -6, max: 6 }
        this.limits.y = { min: -6, max: 6 }

        this.mousePosition = {}
        this.mousePosition.x = 0
        this.mousePosition.y = 0

        window.addEventListener('mousemove', this.getMousePosition)
    }

    getMousePosition = (_event) =>
    {
        _event.preventDefault()

        this.mousePosition.x = _event.clientX
        this.mousePosition.y = _event.clientY
        
    }
    
    updateLightPosition(_x, _y)
    {
        this.light.light.position.set(
            _x,
            _y,
            this.light.light.position.z
        )
    }
    
    update()
    {
        this.lightPosition.x = ((this.mousePosition.x * (Math.abs(this.limits.x.max)+Math.abs(this.limits.x.min))) / this.canvas.width) - ((Math.abs(this.limits.x.max)+Math.abs(this.limits.x.min))/ 2)
        this.lightPosition.y = - ((this.mousePosition.y * (Math.abs(this.limits.y.max)+Math.abs(this.limits.y.min))) / this.canvas.height) - ((Math.abs(this.limits.y.max)+Math.abs(this.limits.y.min))/ 2)
        this.updateLightPosition(
            this.lightPosition.x,
            this.lightPosition.y
        )
    }
}