import Experience from '../Experience'
import Environment from './Environment'
import Example from './Example'
import Light from './Light'
import Helmet from './Helmet'

export default class World
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // Wait for resources
        this.resources.on('ready', () =>
        {
            // Setup if source
            this.helmet = new Helmet()
        })
        
        // Setup if no source
        this.environment = new Environment()
        this.example = new Example()
        this.light = new Light()
    }
    
    update()
    {
        // Here the update functions
    }
}