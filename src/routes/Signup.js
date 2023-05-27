import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Modal from "./Modal";
import Footer from "../components/Footer";

function Company() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-8" style={{width:'95%',marginLeft:'2.5%',marginRight:'2.5%'}}>
        <div className="w-1/2 ml-8">
          <div className="bg-gray-100 rounded p-8">
            <h1 className="text-2xl font-bold mb-4">Terms & Conditions</h1>
            <ul className="list-disc pl-4" style={{textAlign:'left'}}>
              <li className="text-gray-800 mb-2">
                MedMask will collect and store your medical history information in a secure manner. We will only share your information with your doctor or healthcare provider when you provide us with their contact information.
              </li>
              <li className="text-gray-800 mb-2">
                Your medical history information will be converted into a non-fungible token (NFT) and stored on a blockchain for security purposes.
              </li>
              <li className="text-gray-800 mb-2">
                The NFT containing your medical history information will be accessible only to your doctor or healthcare provider. We will send a copy of the master NFT to your doctor or healthcare provider's designated wallet address.
              </li>
              {isExpanded ? (
                <>
                  <li className="text-gray-800 mb-2">
                    You have the right to access and review your medical history information at any time. You can also request that we delete your medical history information from our database.
                  </li>
                  <li className="text-gray-800 mb-2">
                    MedMask does not provide medical advice, diagnosis, or treatment. We are not liable for any medical decisions made by your doctor or healthcare provider based on your medical history information.
                  </li>
                  <li className="text-gray-800 mb-2">
                    You are responsible for ensuring the accuracy of your medical history information. We are not liable for any errors or omissions in your medical history information.
                  </li>
                  <li className="text-gray-800 mb-2">
                    MedMask reserves the right to modify or terminate our services at any time. We will notify you of any changes or updates to our terms and conditions or privacy policy.
                  </li>
                  <li className="text-gray-800 mb-2">
                    You agree to indemnify and hold our company harmless from any claims or damages arising from your use of our services.
                  </li>
                    <span
                      className="text-blue-500 cursor-pointer"
                      onClick={handleToggle}
                    >
                      Read less...
                    </span>
                </>
              ) : (
                  <span
                    className="text-blue-500 cursor-pointer"
                    onClick={handleToggle}
                  >
                    Read more...
                  </span>
              )}
            </ul>
          </div>
        </div>
        <div className="w-1/2 ml-8">
          <Modal />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Company;
