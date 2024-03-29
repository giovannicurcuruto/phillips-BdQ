import React, { useState } from 'react';
import axios from 'axios';
import { Table, Button, Form } from 'react-bootstrap';
import { config } from '../Constant';

const UploadFiles: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(e.target.files);
  };

  // TODO inserir lógica para permitir somente arquivos pdf? ou isso é no back-end?

  const handleUpload = () => {
    if (!selectedFiles) return;

    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append('files', selectedFiles[i]);
    }

    // FIXME retirar login estático - Exemplo no Arquivo TestCertifieds.tsx
    axios.post(`${config.url.BASE_URL}/materials/upload-files`, formData,{
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Basic ${btoa(`${'renan'}:${'123'}`)}`,
        }
    })
      .then(res => {
        console.log(res);
        alert('Files Uploaded Successfully!');
      })
      .catch(err => {
        console.error(err);
        alert('Error sending files');
      });
  };

  return (
    <div className="container">
      <Form.Group>
      <div className="row text-center">
        <p className="h2">Adicionar materiais</p>
      </div>
        <Form.Control type="file" multiple onChange={handleFileSelect} />
      </Form.Group>

      {selectedFiles && (
        <div>
          <Table>
            <thead>
              <tr>
                <th>Name file</th>
                <th>Size</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
            {Array.from(selectedFiles).map((file, index) => (
                <tr key={index}>
                  <td>{file.name}</td>
                  <td>{file.size} bytes</td>
                  <td>{file.type}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Button variant="primary" onClick={handleUpload}>Enviar</Button>
        </div>
      )}
    </div>
  );
};

export default UploadFiles;
