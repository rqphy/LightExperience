import Experience from '../Experience'
import Environment from './Environment'
import Example from './Example'
import Light from './Light'
import Helmet from './Helmet'
import Rocket from './Rocket'
import F1 from './F1'

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
            // this.helmet = new Helmet()
            // this.rocket = new Rocket()
            this.f1 = new F1()
        })
        
        // Setup if no source
        this.environment = new Environment()
        // this.example = new Example()
        this.light = new Light()
    }
    
    update()
    {
        // Here the update functions
    }
}