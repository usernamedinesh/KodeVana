import React from "react";
import "../styles/Header.css";
import "../styles/Home.css";
import content_image from "../assets/Homeimg1.png";
import Header from "./Header";

function Home() {
  return (
    <>
       <div className="hhh">
        <Header />
       </div>
      <div className="home">
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            alias debitis inventore reiciendis 
            
          </p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex sapiente
          ea facere, mollitia, quo praesentium cum dicta dignissimos quisquam
          consectetur ad nesciunt eveniet ipsam. Ratione debitis magnam in
          consectetur? Rem saepe laboriosam reprehenderit ullam quaerat
          corporis, repellat qui at nesciunt voluptate explicabo recusandae
          reiciendis. Laboriosam ex molestiae iste suscipit facere debitis,
          repellat illo? Hic, quidem.
        </div>
        <div className="content-image1">
          <img src={content_image} alt="Homepage image" height={"500px"} width={"650px"}/>
        </div>
      </div>
    </>
  );
}

export default Home;
