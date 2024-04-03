import { useState } from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  FacebookIcon,
  EmailIcon,
  LinkedinIcon,
  PinterestIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const SocialShare = () => {
  const [url, setUrl] = useState("");

  const handleInputChange = (event) => {
    setUrl(event.target.value);
  };

  const handleCopyClick = () => {
    // Create a temporary input element to copy the URL
    const tempInput = document.createElement("input");
    tempInput.value = url;
    document.body.appendChild(tempInput);

    // Select the URL text and copy it to the clipboard
    tempInput.select();
    document.execCommand("copy");

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    alert("URL copied to clipboard: " + url);
  };

  const URL = "https://task-management-server-neon-six.vercel.app/";
  return (
    <div>
      <div>
        <FacebookShareButton
          url={URL}
          quota={"hey lets share"}
          hashtag="#Blogs"
        >
          <FacebookIcon logoFillColor="white" round={true}></FacebookIcon>
        </FacebookShareButton>
        <WhatsappShareButton
          url={URL}
          quota={"hey lets share"}
          hashtag="#Blogs"
        >
          <WhatsappIcon logoFillColor="white" round={true}></WhatsappIcon>
        </WhatsappShareButton>

        <LinkedinShareButton
          url={URL}
          quota={"hey lets share"}
          hashtag="#Blogs"
        >
          <LinkedinIcon logoFillColor="white" round={true}></LinkedinIcon>
        </LinkedinShareButton>

        <EmailShareButton url={URL} quota={"hey lets share"} hashtag="#Blogs">
          <EmailIcon logoFillColor="white" round={true}></EmailIcon>
        </EmailShareButton>

        <TelegramShareButton
          url={URL}
          quota={"hey lets share"}
          hashtag="#Blogs"
        >
          <TelegramIcon logoFillColor="white" round={true}></TelegramIcon>
        </TelegramShareButton>

        <PinterestShareButton
          url={URL}
          quota={"hey lets share"}
          hashtag="#Blogs"
        >
          <PinterestIcon logoFillColor="white" round={true}></PinterestIcon>
        </PinterestShareButton>

        <TwitterShareButton url={URL} quota={"hey lets share"} hashtag="#Blogs">
          <TwitterIcon logoFillColor="white" round={true}></TwitterIcon>
        </TwitterShareButton>
      </div>
      <div className="lg:flex md:flex justify-center gap-1 items-center">
        <input
          className="border mt-5 p-1  text-black rounded-lg"
          type="text"
          placeholder="Enter URL"
          value={URL}
          onChange={handleInputChange}
        />
        <button
          className="btn-sm mt-5  bg-orange-500 text-white rounded-lg "
          onClick={handleCopyClick}
        >
          Copy URL
        </button>
      </div>
    </div>
  );
};

export default SocialShare;
