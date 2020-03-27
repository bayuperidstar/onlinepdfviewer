import React from "react";
import { Document } from "react-pdf";
import pdfjs from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

export default () => {
  const theUrl = window.location.pathname;

  const regex = theUrl.substring(1);

  return (
    <div>
      {regex ? (
        <Document file={regex} onLoadError={err => alert(err.message)} />
      ) : (
        <div>
          <i>Please insert url pdf at path url like example below</i>
          <p>
            <i>your-url/</i>
            <b>http://www.africau.edu/images/default/sample.pdf</b>
          </p>
        </div>
      )}
    </div>
  );
};
