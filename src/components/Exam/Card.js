import React from "react"


const Card = () => {


    return  (
      <div className="row clearfix mt-2">
      <div className="col-lg-3 col-md-6">
        <div className="card">
          <div className="card-body text-center">
            <h6>Planned</h6>
            <input type="text" className="knob" defaultValue={23} data-width={90} data-height={90} data-thickness="0.1" data-fgcolor="#2185d0" />
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="card">
          <div className="card-body text-center">
            <h6>In progress</h6>
            <input type="text" className="knob" defaultValue={43} data-width={90} data-height={90} data-thickness="0.1" data-fgcolor="#f2711c" />
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="card">
          <div className="card-body text-center">
            <h6>Completed</h6>
            <input type="text" className="knob" defaultValue={83} data-width={90} data-height={90} data-thickness="0.1" data-fgcolor="#21ba45" />
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="card">
          <div className="card-body text-center">
            <h6>In Completed</h6>
            <input type="text" className="knob" defaultValue={12} data-width={90} data-height={90} data-thickness="0.1" data-fgcolor="#e03997" />
          </div>
        </div>
      </div>
    </div>
    
      )

}

export default  Card