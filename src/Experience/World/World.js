import Experience from '../Experience'
import Environment from './Environment'
import Example from './Example'

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
        })
        
        // Setup if no source
        this.environment = new Environment()
        this.example = new Example()
    }
    
    update()
    {
        // Here the update functions
    }
}