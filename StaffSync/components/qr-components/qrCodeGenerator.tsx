import React, { useEffect } from "react";
import { SubTextLogo, TextLogo } from "@/styles/LoginStyles";
import {
  ContentTile,
  Generator,
  QRTitle,
  QRcodeContent,
  TextValue,
} from "@/styles/QrcodeStyles";
import QRCode from "react-native-qrcode-svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/hooks/configureStore";
import { setqrvalue } from "@/hooks/qrSlice";

const QRCodeGenerator = () => {
  const dispatch = useDispatch();
  const qrValue = useSelector((state: RootState) => state.QRcode.qrvalue);

  useEffect(() => {
    generateQRCode();
    const interval = setInterval(() => {
      generateQRCode();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const generateQRCode = () => {
    const newValue = Math.random().toString(36).substring(2, 14);
    dispatch(setqrvalue(newValue));
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
