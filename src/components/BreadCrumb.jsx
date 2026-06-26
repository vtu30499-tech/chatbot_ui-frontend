function BreadCrumb(){

return(

<div
style={{
position:"fixed",
top:"55px",
left:"60px",
right:0,
height:"38px",
background:"#ffffff",
borderBottom:"1px solid #eee",
display:"flex",
alignItems:"center",
paddingLeft:"25px",
fontSize:"12px",
color:"#999",
zIndex:999
}}
>


<span>
Home
</span>


<span
style={{
margin:"0 10px",
color:"#ccc"
}}
>
›
</span>


<span
style={{
color:"#111",
fontWeight:"600"
}}
>
Chat With AI
</span>


</div>

)

}


export default BreadCrumb;