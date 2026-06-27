import menu from "../assets/menu.svg";
import home from "../assets/home.svg";
import logout from "../assets/logout.svg";


function sideBar(){

return(

<div
    
 style={{

position:"fixed",
left:0,
top:0,

width:"60px",
height:"100vh",

background:"#06131c",

display:"flex",
flexDirection:"column",

zIndex:2000

}}

>


{/* top row hamburger */}

<div

style={{

height:"55px",

display:"flex",
alignItems:"center",
justifyContent:"center",

color:"#9fb3b8",

fontSize:"24px"

}}

>
<img 
src={menu}
width="22"
/>
</div>



{/* breadcrumb row home icon */}

<div

style={{

height:"35px",

display:"flex",
alignItems:"center",
justifyContent:"center",
transform:"translateY(3px)",

background:"#06352f",

borderLeft:"3px solid #00c896",

color:"white",

fontSize:"18px"

}}

>

<img 
src={home}
width="64"
/>

</div>
{/* Logout icon */}

<div

style={{

marginTop:"auto",

height:"45px",

display:"flex",

alignItems:"center",

justifyContent:"center",

cursor:"pointer",

marginBottom:"20px"

}}

>


<img

src={logout}

width="22"

height="22"

/>


</div>


</div>
)
}

export default sideBar;