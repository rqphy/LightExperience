# Light Experience

## The idea

I’ve seen an amazing website on Twitter: this. I want to create a lookalike light and shadow effect. I don’t do any 3d modeling, so I need to find a model on the web.

I love Formula 1 and I want to show you how beautiful a F1 car looks. Let’s show you the 2022 Ferrari car. The model was made by Machin.

[Live](https://light-xp.netlify.app/)

## The method

The first thing I need is to import the model. Then, let’s put some directional lights and the effect already looks amazing. Now I can focus on the animation. I get the cursor position with a native Javascript event. Then I want to update the directional light position with the same event I used.

Let’s implement limits so the light can’t go too far away. To get the right values, I used lil-gui.

## The issues

### Camera

I added some camera animations. It was a first. I’ve seen some of them on different project so I tried that out. It was a bid hard to do and it took me few hours. Turns out there was a prebuild function included in ThreeJs. I had few issues with the camera focus after the animations. It was simple to fix. I just needed to use the lookAt function when I updated the camera position.

### Performances

As you can see the website is slow. I didn’t find a way to reduce the 3d model weight. I implemented a loader to counter the long wait. It’s not an optimal solution, maybe I’ll come back in the future to patch this.
