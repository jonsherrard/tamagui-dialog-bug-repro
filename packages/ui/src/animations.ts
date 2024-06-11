import { createAnimations } from '@tamagui/animations-css'

export const animations = createAnimations({
  smooth: {
    type: 'timing',
    duration: 0.3,
  },
  bouncy: {
    damping: 9,
    mass: 0.9,
    stiffness: 150,
  },
  lazy: {
    damping: 18,
    stiffness: 50,
  },
  slow: {
    damping: 15,
    stiffness: 40,
  },
  quick: {
    damping: 20,
    mass: 1.2,
    stiffness: 250,
    duration: 0.1,
  },
  tooltip: {
    damping: 10,
    mass: 0.9,
    stiffness: 100,
  },
  snap: 'ease-in-out 0.2s',
})
