import React, { useEffect, useRef, useState } from 'react'
import html2canvas from 'html2canvas';
import jspdf from "jspdf";  
import { Table } from 'antd';

export default function DigitalTransportPass() {
        const pdfRef = useRef();


// handle download
const handleDownload = async () => {

        const input = pdfRef.current;
    
        html2canvas(input).then((canvas) => {
          const imgData = canvas.toDataURL('image/png')   //convert data as images
          const pdf = new jspdf('p', 'mm', 'a4', true);    //use to generate pdf p - portrait mode(can use l - landscape mode) , mm - dimension(can pass difference dimension) , a4 - sheet formate(can pass a1,a2..) , true - optimization in pdf(reduce file size)
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = pdf.internal.pageSize.getHeight();
          const imgWidth = canvas.width;
          const imgHeight = canvas.height;
          const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight)
          const imgX = (pdfWidth - imgWidth * ratio) / 2;
          const imgY = 30;
          pdf.addImage(imgData, "PNG", imgX, imgY, imgWidth * ratio, imgHeight * ratio)
          pdf.save("DTP.pdf")
    
        })
    
      }

  return (
     <>
      <div className="fixtureContainer" ref={pdfRef}>         
      <Table
            className="Table"
            columns={[
              {
                title: "Digital Transport Pass",
                width: "20%",
                dataIndex: "teamNumber",
                render: (text, record, index) => (
                  <span key={index} style={{color:"black",fontFamily:"sans-serif",fontWeight:"bold",textAlign:"center"}}>hello</span>
                )
              }

            ]}
            pagination={{
              style: {
                marginTop: "50px",
              },
              pageSize: 100,
            }}

            // Displaying data from the backend
            // dataSource={finalShuffle}
          >

          </Table>
     </div>

     <div>
       <button onClick={handleDownload}>Download</button>
     </div>
     
     </>
  )
}
