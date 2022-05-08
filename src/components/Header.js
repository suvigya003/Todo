import React from 'react'

function Header(props) {
    return (
      <div className="container-fluid">
      <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <div>

                        {props.title}
                        
                    </div>
              
             
                    <div>
 <button class="btn btn-outline-success" id="delete" type="submit">Reset</button>
                    </div>
                    
          </div>
            </nav>
            </div>
  )
}

export default Header