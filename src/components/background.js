import React from 'react';
import { useEffect, useState } from "react";
import { createClient } from "pexels";
import random from "random";
import gradient from "random-gradient";
import randomstring from "randomstring";

function Background() {
  const [imgSrc, setImgSrc] = useState();
  const [imgAlt, setImgAlt] = useState();
  const [bgStyle, setBgStyle] = useState({});
  const client = createClient(
    "563492ad6f9170000100000107463e4e08bf4312809383d9ea2d419f"
  );

  function setGradient() {
    let uid = randomstring.generate(256);
    let typ = random.int(0,10);
    if(typ % 0 === 2) {
      setBgStyle({
        height: "100vh",
        background: gradient(uid, 'diagonal'),
      })
    } else {
      setBgStyle({
        height: "100vh",
        background: gradient(uid, 'vertical'),
      })
    }
  }

  function getCurated() {
    let p = random.int(0, 100);
    client.photos.curated({ page: p, per_page: 80 }).then(photos => {
      console.log(photos);
      if (photos) {
        let x = random.int(0, 80);
        let url = photos.photos[x].src.landscape;
        setBgStyle({
          height: "100vh",
          backgroundColor: "black",
          opacity: "100%",
        })
        setImgSrc(url);
        return
      }
    }).catch(error => {
      console.log(error);
      alert("No photo! Only 200 API requests per hour =(")
      setGradient();
    });
  }

  function getPhoto() {
    client.photos.show({ id: 2014423 }).then((photo) => {
      console.log(photo);
      if (photo.src) {
        setImgSrc(photo.src.original);
        setImgAlt(photo.alt);
        return
      }
    });
  }

  useEffect(() => {
    setGradient();
    //getCurated();
  }, []);

  return (
    <div
      className="bg"
      style={bgStyle}
    >
      <img
        src={imgSrc}
        alt={imgAlt}
      ></img>
    </div>
  );

}  

export default Background;