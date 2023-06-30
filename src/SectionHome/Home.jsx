/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./home.css"

function Home() {
    return (
        <section className="container">
            <section className="contenidoHome">
                <div className="infoHome">
                    <h1>Moder interior</h1>
                    <p className="textHome">
                        A full-serice residential &
                        commercial interior desing and
                        staging company offering
                        professional organizing &
                        eco-services.
                    </p>
                    <a href="#"> Read more 	&#187;</a>
                </div>
                <div className="imgHome">
                    <img src="https://images.pexels.com/photos/5825527/pexels-photo-5825527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

                    <div className="userDesigned">
                        <div className="UserHeader">

                            <img src="https://unavatar.io/15" alt="" className="avataruser" />

                            <p>Aliza Webber <br />
                                <span>interior Designer</span>
                            </p>
                        </div>
                        <div className="userProfesion">
                            <h2>Desingned in 2020 by Aliza Webber</h2>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
export default Home