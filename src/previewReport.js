import React from 'react'
import { PDFViewer } from '@react-pdf/renderer'
import PdfDocument from './pdfDocument.js'

const PreviewReport = () => {
  return (
    <PDFViewer>
      <PdfDocument />
    </PDFViewer>
  )
}
export default PreviewReport
