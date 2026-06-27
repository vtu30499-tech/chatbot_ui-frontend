import profile from "../assets/profile.svg";
import notification from "../assets/notification.svg";



function TopBar(){

return(

<div
style={{
position:"fixed",
top:0,
left:"60px",
right:0,
height:"55px",
background:"#ffffff",
borderBottom:"1px solid #eee",
display:"flex",
alignItems:"center",
justifyContent:"space-between",
padding:"0 25px",
zIndex:1000
}}
>


{/* Logo name */}

<div
style={{
    font:"Genos",
fontSize:"16px",
fontWeight:"600",
color:"#444"
}}
>
AilWingBot
</div>



{/* Right icons */}

<div
style={{
display:"flex",
alignItems:"center",
gap:"25px"
}}
>

<span
style={{
fontSize:"18px",
cursor:"pointer"
}}
>
<img
src={notification}
width="20"
/>

</span>


<div
style={{
width:"32px",
height:"32px",
borderRadius:"50%",
background:"#ddd",
display:"flex",
alignItems:"center",
justifyContent:"center"
}}
>
<img
src={profile}
width="32"
/>
</div>


</div>



</div>

)

}


export default TopBar;