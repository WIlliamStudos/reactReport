import React, { useState } from 'react'
import './App.css'
import PreviewReport from './previewReport.js'
import PdfDocument from './pdfDocument.js'
import { PDFDownloadLink } from '@react-pdf/renderer'

function App () {
  const [isPreview, setIsPreview] = useState(false)

  function Preview () {
    setIsPreview(!isPreview)
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Preview Report with @react-pdf/renderer
        </p>
        <PDFDownloadLink
          document={<PdfDocument />}
          filename='pdfReport.pdf'
          className='App-link'
        >
          Generate PDF
        </PDFDownloadLink>
        <button className='App-Link' onClick={() => Preview()}>
          Preview
        </button>
        {isPreview && <PreviewReport />}
      </header>
      <author>Glauber Marcelino</author>
    </div>
  )
}

export default App
