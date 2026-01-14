'use client';

import { useState } from 'react';

import { QRCodeCanvas } from 'qrcode.react';

type QrValue = {
  content: string;
  bgColor: string;
  fgColor: string;
  logoUrl?: string;
  logoSize?: number;
  margin?: number;
};

export default function QRSettings() {
  const [values, _setValues] = useState<QrValue>({
    content: 'https://example.com',
    bgColor: '#ffffff',
    fgColor: '#000000',
    logoUrl: undefined,
    logoSize: 60,
    margin: 1,
  });

  return (
    <>
      <section></section>
      <section></section>
      <section></section>
      <section>
        <QRCodeCanvas
          bgColor={values.bgColor}
          fgColor={values.fgColor}
          imageSettings={
            values.logoUrl
              ? {
                  src: values.logoUrl,
                  height: values.logoSize ?? 4,
                  width: values.logoSize ?? 4,
                  excavate: true,
                }
              : undefined
          }
          level="H"
          marginSize={values.margin}
          size={240}
          value={values.content}
        />
      </section>
    </>
  );
}
