function ChatWidget({onClick}) {

return (

<button
onClick={onClick}
style={{
position:"fixed",
right:"30px",
bottom:"30px",
width:"60px",
height:"60px",
borderRadius:"50%",
background:"#000",
color:"#fff",
border:"none",
fontSize:"28px",
cursor:"pointer",
display:"flex",
alignItems:"center",
justifyContent:"center",
boxShadow:"0 5px 20px rgba(0,0,0,0.25)"
}}
>

<img
src="/src/assets/chat.svg"
width="100"
/>

</button>

)

}

export default ChatWidget;