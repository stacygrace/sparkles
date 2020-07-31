# sparkles

https://joshwcomeau.com/react/animated-sparkles-in-react/

This library provides one default export: the `Sparkles` React component.


## Props

Default props are set to the following and can be changed by passing a different value for any of them:

  - rate = 250
  - variance = 200
  - minSize = 10
  - maxSize = 20
  - colors = ['#FFC700']
  - isToggleable = true
  - style = {}
  - generatePosition = defaultGeneratePosition
  
The `colors` prop is special in that instead of passing an array of color strings, you may also pass the string "rainbow" which sets the colors value to a pre-selected array of color strings for a rainbow effect as seen in Josh W Comeau's original blog post.
