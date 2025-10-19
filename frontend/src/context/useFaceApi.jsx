// 📄 src/hooks/useFaceApi.jsx
import { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import axios from 'axios';

export const useFaceApi = () => {
  const videoRef = useRef(null);
  const [isDetecting, setIsDetecting] = useState(false);
  const [mood, setMood] = useState("Not Started");

  // Load models & start camera
  useEffect(() => {
    const loadModels = async () => {
      try {
        await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
        await faceapi.nets.faceExpressionNet.loadFromUri("/models");
        startVideo();
      } catch (err) {
        console.error("Model loading failed:", err);
      }
    };

    const startVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = () => videoRef.current.play();
        }
      } catch (err) {
        console.error("Camera not accessible:", err);
      }
    };

    loadModels();
  }, []);

  // One-time detection
  const detectOnce = async () => {
    const video = videoRef.current;
    if (!video) return;

    const detections = await faceapi
      .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceExpressions();

    if (detections?.length > 0) {
      const expressions = detections[0].expressions;
      let highest = 0;
      let expressionName = "";

      for (const [name, value] of Object.entries(expressions)) {
        if (value > highest) {
          highest = value;
          expressionName = name;
        }
      }
      axios.get(`http://localhost:3000/songs?mood=%${expressionName}`).then(res=>{
        console.log(res.data);
        
      })
    
      setMood(expressionName);
    } else {
      setMood("No Face Detected");
    }

    setIsDetecting(false);
  };

  // Handle button click
  const handleStartListening = async () => {
    if (isDetecting) return;
    setIsDetecting(true);
    setMood("Detecting...");
    await detectOnce();
  };

  return { videoRef, mood, isDetecting, handleStartListening };
};
