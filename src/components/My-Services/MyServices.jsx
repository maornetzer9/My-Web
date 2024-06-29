import React from "react";
import { myServices } from "../../assets/data/myServices";

export default function MyServices() {
    return (
        <div style={{height:'100vh', display:'flex', justifyContent:'center', alignItems:'center', textAlign: 'center'}}> 
            <ol style={{border:'1px solid black', borderRadius:'20px', color: 'white', padding: '20px 20px', boxShadow: '0px 4px 15px white'}}>
                {myServices.length
                    ? myServices.map(({ header, title, content }, index) => {
                          return (
                              <div key={index}>
                                <h1> {header} </h1> 
                                  <ul>
                                      <li> {title} </li>
                                      <span> {content} </span>
                                  </ul>
                              </div>
                          );
                      })
                    : null}
            </ol>
        </div>
    );
}
