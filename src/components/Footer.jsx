import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter style={{ width:'95%',marginLeft:'2.5%',marginRight:'2.5%',marginTop: '15%',marginBottom: '1%' ,fontWeight: 'bolder',fontSize: '1.1rem', backgroundColor: '#85CDFD', boxShadow: '0 5px 15px 0 rgb(51, 54, 54)'}} className='text-center text-lg-start text-muted'>
      <div className='flex justify-between items-center p-4 border-b'>
        <div>
          <span>Get connected with us on social networks:</span>
        </div>
        <div className='flex'>
          <a href='https://www.instagram.com/krish_thakrar_1710/' className='me-4 text-reset'>
            <MDBIcon fab icon='instagram' />
          </a>
          <a href='https://www.linkedin.com/in/krish-thakrar-a93144236/' className='me-4 text-reset'>
            <MDBIcon fab icon='linkedin' />
          </a>
          <a href='https://github.com/mahim37/MEdMASk' className='me-4 text-reset'>
            <MDBIcon fab icon='github' />
          </a>
        </div>
      </div>
      <section className='text-center text-md-start mt-5'>
        <div className='flex flex-wrap justify-center' >
          <MDBRow className='align-items-center'>
            <MDBRow md='auto'>
              <h6 className='text-uppercase fw-bold mb-2'>
                Contact
              </h6>
            </MDBRow>
            <MDBRow>
              <p>
                <MDBIcon icon='envelope' className='me-3' />
                support@medmask.com
              </p>
              <p>
                <MDBIcon icon='phone' className='me-3' /> +91 8770062687
              </p>
            </MDBRow>
          </MDBRow>
        </div>
      </section>
      <br />
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='/'>
          MedMask.Systems
        </a>
      </div>
    </MDBFooter>
  );
}
