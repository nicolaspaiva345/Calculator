class calculator {
  constructor(previusOperationText, resultOperationText) {
    this.previusOperationText = previusOperationText
    this.resultOperationText = resultOperationText

    this._state = {
      result: '',
      preview: ''
    }
  }
  addDigit(value) {
    this.previusOperationText.innerText += value
    this._state.preview += value
  }
  addOperator(value) {
    this.previusOperationText.innerText += value
    this._state.preview += value
  }
processResult() {
  this.resultOperationText.innerText = eval(this._state.preview)
  this.previusOperationText.innerText = ""
  this._state.preview = ""
}
processDelOperator() {
  this.resultOperationText.innerText = 
  this.resultOperationText.innerText.slice(0, -1)
}
processClearResultOperation() {
  this.resultOperationText.innerText =""
}
processClearAllOperation() {
  this.resultOperationText.innerText =""
  this.previusOperationText.innerText =""
}
}
const previusOperationText = document.querySelector("#previus")
const resultOperationText = document.querySelector("#result")

const calc = new calculator(previusOperationText, resultOperationText)
const operation = previusOperationText.innerText[1]

const buttons = document.querySelectorAll("#buttons-conteiner button")

buttons.forEach( btn => {
btn.addEventListener("click", (e) => {
  const value = e.target.innerText

  switch(value) {
    case "+":
    case "-":
    case "/":
    case "*":
      calc.addOperator(value)
      break;
    case "=":
      calc.processResult()
      break;
    case "DEL":
      calc.processDelOperator()
      break;
    case "CE":
      calc.processClearResultOperation()
      break;
    case "C":
      calc.processClearAllOperation()
       break;
    default:
      if (+value >= 0 || value === "."){
        calc.addDigit(value)
      }
    }
  })
})