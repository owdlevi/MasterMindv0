import { gameSettings } from '../gameConfig'

const utils = {
  generateRandomCode: (max) => {
    let options = [...gameSettings.gameColors]
    const code = []

    for (let i = 0; i < max; i++) {
      let randomIndex = Math.floor(Math.random() * options.length)

      code.push(options[randomIndex])
      // removing color from options
      options.splice(randomIndex, 1)
    }
    return code
  },

  checkGuessinCode: (guess, index, code) => {
    //check if code index value is equal to option
    //check if guess is in code
    // handle color duplication, maybe remove from code the code[index]
    if (code[index] === guess) return 'correct'
    else if (code.includes(guess)) return 'wrongposition'
    return null
  },
  sortArray: (a, b) => {
    return Math.random() - 0.5
  }
}

export default utils
