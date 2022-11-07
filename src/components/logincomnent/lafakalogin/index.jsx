import React from 'react'
import { GrClose } from "react-icons/gr";
export default function Lafakalogin({loginmodal,Loginhandle,logtab,setLogtabs}){

    const Login=()=>{
        return <div className='login font-lafaka-theme-font space-y-4'>
            <div className="form-group">
                <label htmlFor=" " className='text-[12px] text-[#333]'>USERNAME OR EMAIL ADDRESS *</label>
            <input type="text" className='w-full rounded-lg p-2 bg-[#f6f6f6]'/>
            </div>
            <div className="form-group">
                <label htmlFor="" className='text-[12px] text-[#333]'>PASSWORD *</label>
            <input type="text" className='w-full rounded-lg p-2 bg-[#f6f6f6]'/>
            </div>
            <div className="form-group">
                <input type="checkbox" name="" id="" /> <label htmlFor="" className='text-[12px] text-[#333]'>REMEMBER ME</label>
            </div>
            <button className='bg-[#f2002d] rounded-full p-2 uppercase text-white px-[2rem]'>Log in</button>
            <p className='text-[#f2002d] text-[14px]'>Lost your password?</p>
        </div>
    }
    return <div className={loginmodal?' lafaka-container-login z-10 bg-white fixed bottom-0 top-0 right-0 left-0':"hidden"}>
     <div className="icon absolute top-[8rem] right-[5rem]" onClick={Loginhandle}>
           <GrClose />
     </div>
        <div className="loginreg-container w-[30%] absolute left-[40%] top-[14rem]  space-y-8">
<div className="row">
    <div className=" flex">
    <div className={logtab==0?"item text-center border-black cursor-pointer border-b w-[50%]":"item text-center border-b w-[50%]"} onClick={()=>setLogtabs(0)}>
    Login
</div>
<div className={logtab==1?"item text-center border-black cursor-pointer border-b w-[50%]":"item text-center border-b w-[50%]"} onClick={()=>setLogtabs(1)}>
    Register
</div>
</div>
<hr className='w-full border-[#cacaca] border'/>
</div>
<div className="content">
    {logtab==0?<Login/>:<p>refister</p>}
    
</div>
        </div>
    </div>
}