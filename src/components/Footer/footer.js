import React from 'react';
import { CDBFooter,  CDBBtn, CDBIcon, CDBBox } from 'cdbreact';

export const Footer = () => {
  return (
    <CDBFooter className="shadow"
    >
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: '40%', height:"65%" , color:"black"}}
      >
        <CDBBox display="flex" alignItems="center">
          <a href="/" className="d-flex align-items-center p-0 text-dark">
          </a>
          <small className="ml-2">&copy; VamsiKeerthi, 2022. All rights reserved.</small>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn flat color="dark" className="p-2" target={"_blank"} href="https://www.facebook.com/vamsi.keerthi.921/">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2" target={"_blank"} href="https://github.com/VamsiKeerthi">
            <CDBIcon fab icon="github" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2" target={"_blank"} href="https://www.instagram.com/vamsi__5061/">
            <CDBIcon fab icon="instagram" />
            
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
};
