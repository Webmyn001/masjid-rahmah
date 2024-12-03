import React from "react";
import {Link} from "react-router-dom";


 function Navlinks (props) {
  
   

    
    const Links = [
        {name: "Home",
         link : "/"
        },

          {name: "Contact Us",
            link : "/contact"
           },

           {name: "Admin login",
            link : "/login"
           },
        
      

        
       
    ]
    return(
        <>
       
            {
                Links.map((link,i) => (
                     
                     <div key={i}>
                          <li key={i} className={`"font-semibold font-raleway  md:hover:border-b-2 hover:border-white hover:border-b-2   pb-1 sm:pb-2  tracking-wide
                           ${props.alternative ? "" :"" }`} onClick={props.handleClick} >
                       <Link to={link.link} onClick={props.handleClick} >{link.name} </Link>
                          </li>

                    </div>

                    
                ))
            }
             
        </> 
    )
 }

  export default Navlinks