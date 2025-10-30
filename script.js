const startInput = document.querySelector('input#start')
const endInput = document.querySelector('input#end')
const stepInput = document.querySelector('input#step')
const btn = document.querySelector('button#submit_btn')
const res = document.querySelector('p#res')
const regexOnlyNumber = /^\d+$/
btn.addEventListener('click',function(){
  let startValid = regexOnlyNumber.test(startInput.value)
  let endValid = regexOnlyNumber.test(endInput.value)
  let stepValid = regexOnlyNumber.test(stepInput.value)

  invalidRes = ''

  let startNumber = Number(startInput.value)
  let endNumber = Number(endInput.value)
  let stepNumber = Number(stepInput.value)

  if(startNumber === invalidRes || endNumber === invalidRes || stepNumber === invalidRes || !startValid || !endValid || !stepValid || stepNumber == 0){
    alert('[ERROR!] Insira apenas números nas entradas de contadores!')
    console.log('Error')
  }else{
    resContando = 'Contando...'
   if(startNumber <=endNumber){
     for(let calc = startNumber; calc <= endNumber;calc +=stepNumber){
      resContando += `${calc}⏩`
    }
    res.textContent = resContando + `FIM!🏁`
   }else{
    for(let calc = startNumber; calc >= endNumber;calc -=stepNumber){
      resContando += `${calc}⏩`
    }
    res.textContent = resContando + `FIM!🏁`
   }
  }
})