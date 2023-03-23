// code your solution here


function saturdayFun(name = "roller-skate"){
    return `This Saturday, I want to ${name}!`
}
saturdayFun("bathe my dog")


function mondayWork (activity = 'go to the office'){
    return `This Monday, I will ${activity}.` 
}
mondayWork('work from home')


function wrapAdjective(ppp = '!') {
    return  function (def){
        return `You are ${ppp}${def}${ppp}!`
    }

      }
      wrapAdjective('*')("a dedicated programmer")





//=> "You are %a dedicated programmer%!"

