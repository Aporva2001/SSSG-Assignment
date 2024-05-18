import React from 'react'
import { Importer, ImporterField } from 'react-csv-importer';

// include the widget CSS file whichever way your bundler supports it
import 'react-csv-importer/dist/index.css';
const CsvUpload = () => {
  return (
    <>
<Importer
  dataHandler={async (rows, { startIndex }) => {
    for (row of rows) {
      await myAppMethod(row);
    }
  }}
  defaultNoHeader={false} 
  restartable={false} 
  onStart={({ file, preview, fields, columnFields }) => {
    prepMyAppForIncomingData();
  }}
  onComplete={({ file, preview, fields, columnFields }) => {
    showMyAppToastNotification();
  }}
  onClose={({ file, preview, fields, columnFields }) => {
    goToMyAppNextPage();
  }}

>
  <ImporterField name="name" label="Name" />
  <ImporterField name="email" label="Email" />
  <ImporterField name="dob" label="Date of Birth" optional />
  <ImporterField name="postalCode" label="Postal Code" optional />
</Importer>;
    </>
  )
}

export default CsvUpload