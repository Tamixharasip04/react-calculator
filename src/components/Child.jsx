import React from 'react'
import { useState } from 'react'

export default function Child() {
    let [input,setinput]=useState("")

    function equal(){
      try{
        setinput(eval(input).toString()) 
      }
      catch(error){
setinput(error)
      }
      

      
    }
  return (
    <div class="child">
      <div>
        <h1>Calculator</h1>
      </div>
        <input type="text" placeholder={input} value={input} style={{width:310, height:50}}/>
        <br /><br />
        <input type="button" class='btn' onClick={()=>setinput("")} value={"AC"} />
        <input type='button' class='btn' onClick={()=>setinput((previnput)=>previnput.slice(0,-1))} value={"X"}/>
        <input type='button' class='btn' onClick={(e)=>setinput(input+e.target.value)} value={'.'}/>
        <input type='button' class='btn' onClick={(e)=>setinput(input+e.target.value)} value={'/'}/>
<br /><br />
        <input type='button' class='btn' onClick={(e)=>setinput(input+e.target.value)} value={'7'}/>
        <input type='button' class='btn' onClick={(e)=>setinput(input+e.target.value)} value={'8'}/>
        <input type='button' class='btn' onClick={(e)=>setinput(input+e.target.value)} value={'9'}/>
        <input type='button' class='btn' onClick={(e)=>setinput(input+e.target.value)} value={'*'}/>
        <br /><br />
        <input type='button' class='btn' onClick={(e)=>setinput(input+e.target.value)} value={'4'}/>
        <input type='button' class='btn' onClick={(e)=>setinput(input+e.target.value)} value={'5'}/>
        <input type='button' class='btn' onClick={(e)=>setinput(input+e.target.value)} value={'6'}/>
        <input type='button' class='btn' onClick={(e)=>setinput(input+e.target.value)} value={'-'}/>

        <br /><br />
        <input type='button' class='btn' onClick={(e)=>setinput(input+e.target.value)} value={'1'}/>
        <input type='button' class='btn' onClick={(e)=>setinput(input+e.target.value)} value={'2'}/>
        <input type='button' class='btn' onClick={(e)=>setinput(input+e.target.value)} value={'3'}/>
        <input type='button' class='btn' onClick={(e)=>setinput(input+e.target.value)} value={'+'}/>
        <br /><br />
        <input type='button' class='btn' onClick={(e)=>setinput(input+e.target.value)} value={'%'}/>
        <input type='button' class='btn' onClick={(e)=>setinput(input+e.target.value)} value={'0'}/>
        <input type='button' class='btn' onClick={(e)=>setinput(input+e.target.value)} value={'00'}/>

        <input type='button' class='btn' onClick={equal} value={'='}/>

        

    </div>
  )
}

