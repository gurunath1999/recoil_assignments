import { useRecoilState, useSetRecoilState } from "recoil"
import { firstName, lastName } from "./atom"

function Main1(){
    const [first,setFirst]=useRecoilState(firstName)
    const [last,setLast]=useRecoilState(lastName)

    return(<div>
<input type="text" placeholder="Firstname" value={first} onChange={((e)=>setFirst(e.target.value))}/>
<input type="text" placeholder="Lastname" value={last} onChange={((e)=>setLast(e.target.value))}/>
<div>
firstname:{first} and lastName:{last}
</div>
    </div>)
}

export default Main1