import { SubTextLogo, TextLogo } from "@/styles/LoginStyles";
import {
  ContentTile,
  Generator,
  QRTitle,
  QRcodeContent,
  TextValue,
} from "@/styles/QrcodeStyles";
import React, { useState, useEffect } from "react";
import QRCode from "react-native-qrcode-svg";

const QRCodeGenerator = () => {
  const [qrValue, setQrValue] = useState("");

  useEffect(() => {
    generateQRCode();
    const interval = setInterval(() => {
      generateQRCode();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const generateQRCode = () => {
    const newValue = Math.random().toString(36).substring(2, 14);
    setQrValue(newValue);
  };

  return (
    <QRcodeContent>
      <ContentTile>
        <TextLogo>
          STAFF <SubTextLogo>SYNC</SubTextLogo>
        </TextLogo>
        <QRTitle>Code</QRTitle>
      </ContentTile>
      <Generator>{qrValue && <QRCode value={qrValue} size={220} />}</Generator>
      <TextValue>{qrValue}</TextValue>
    </QRcodeContent>
  );
};

export default QRCodeGenerator;
