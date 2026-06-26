import ChatWidget from "../components/ChatWidget";
import sideBar from "../components/sideBar";
import TopBar from "../components/TopBar";
import BreadCrumb from "../components/BreadCrumb";
function HomePage() {
  return (
    <div>
      <SideBar/>
      <div
        style={{
          marginLeft:"60px" ,     
          minHeight: "100vh",
          backgroundColor: "#ffffff",
        
        }}
      >
      <TopBar/>
      <div
        style={{
          marginLeft:"60px",
          paddingTop:"55px"
        }}
      >
      </div>
      <BreadCrumb />
      <div
        style={{
          marginLeft:"60px",
          paddingTop:"95px"
        }}
        ></div>
      {/* Title */}
      <h1
        style={{
          fontSize: "70px",
          marginBottom: "10px",
          color: "#f4e9e9",
        }}
      >
      </h1>

      {/* Subtitle */}
      <p
        style={{
          fontSize: "24px",
          color: "#f1e9e9",
          marginBottom: "350px",
        }}
      >
        
      </p>

      {/* Workflow */}
      <div
        style={{
          marginTop: "150px",
        }}
      >
        

        <p
          style={{
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          
        </p>
      </div>

      {/* Chatbot */}
      <ChatWidget />
    </div>
  </div>  
  );
}

export default HomePage;