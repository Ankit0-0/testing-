import React, { useEffect, useRef, useState, version } from "react";

const Webcam = () => {
  function dataURLToFile(dataURL, filename) {
    const arr = dataURL.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  const apicall = async () => {
    let photo = photoRef.current;
    console.log('callig');
    // console.log("photo: " + photo.toDataURL());

    let encodedPhoto = dataURLToFile(photo.toDataURL(), "file.png");

    try {
      const dataForm = new FormData();
      dataForm.append("image", encodedPhoto);


      

      const response = await fetch("http://127.0.0.1:5999/api/imageroute", {
        method: "POST",
        body: dataForm,
      });
      const responseData = await response.json();
      console.log("API response:", responseData);
    } catch (error) {
      console.error("API call error:", error);
    }
  };

  let videoRef = useRef(null);
  let photoRef = useRef(null);

  const getUserCamera = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
      })
      .then((stream) => {
        let video = videoRef.current;

        video.srcObject = stream;

        video.play();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const takePicture = () => {
    let width = 500;
    let height = 280;

    let photo = photoRef.current;
    let video = videoRef.current;

    photo.width = width;
    photo.height = height;

    let ctx = photo.getContext("2d");

    ctx.drawImage(video, 0, 0, photo.width, photo.height);
  };

  useEffect(() => {
    getUserCamera();
  }, []);

  return (
    <div>
      <video className="" ref={videoRef}></video>
      <button onClick={takePicture}>capture</button>
      <canvas ref={photoRef}></canvas>
      <button
        onClick={() => {
          apicall();
        }}
      >
        Call API
      </button>
    </div>
  );
};

export default Webcam;
