import React from "react";
// import { Document } from "react-pdf";
import pdfjs from 'pdfjs-dist';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

export default () => {
  const theUrl = window.location.pathname;

  const regex = theUrl.substring(1);

  return (
    <div>
      <h3>{`${regex ? regex : 'Nothing to Show'}`}</h3>
      {/* <Document file={regex} onLoadError={err => alert(err.message)} /> */}
    </div>
  );
}
