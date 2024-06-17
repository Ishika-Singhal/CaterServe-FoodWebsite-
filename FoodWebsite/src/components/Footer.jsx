import { footerIcon } from "../data/Footerdata";
import './Footer.css'

export default function Footer(){
  return(
  <>
  <div className='container-fluid py-2 footer'>
    <div className='container'>
      <div className='align-items-center d-flex justify-content-between'>
        <h3>Cater <span className="text-warning">Serve</span></h3>
        <div className="text-xl">Created by Ishika Singhal</div>
        <div className="d-flex text-xl ">
          {footerIcon.map((val,index)=>{
            return(
              <div key={index} className='me-4 footerdata'>
                {val.icon}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  </div>
  </>
  )
}