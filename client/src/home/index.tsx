import axios from "axios";
import { useState, useContext } from "react";
import styled from "styled-components";
import Star from "../shared/star";
import { StarContext } from "../App";
import { useNavigate } from "react-router-dom";

const Home: React.FC<{}> = () => {
  const [image, setImage] = useState();
  const [emptyUpload, setEmptyUpload] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [uploadErr, setUploadErr] = useState<boolean>(false);

  const navigate = useNavigate();
  const { updateStar } = useContext(StarContext);

  const handleChange = (e: any): void => {
    setImage(e.target.files[0]);
  };

  const uploadImage = async (): Promise<void> => {
    if (!image) {
      setEmptyUpload(true);
      return;
    }

    setEmptyUpload(false);
    try {
      // Get star ID from faceserv
      setUploadErr(false);
      setLoading(true);
      const formData: FormData = new FormData();
      formData.append("file", image);
      const faceservResp = await axios.post(
        `${import.meta.env.VITE_FACESERV}/faceService/getID`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const starId = faceservResp.data.star_id;
      console.log(`Star ID: ${starId}`);

      // Get star info from starserv
      const starservResp = await axios.get(
        `${import.meta.env.VITE_STARSERV}/star/${starId}`
      );
      const newStar: Star = starservResp.data;
      console.log(newStar);
      updateStar(newStar);
      navigate(`/star`);
    } catch (e: any) {
      setLoading(false);
      setUploadErr(true);
      // TODO: Delete log
      console.log(e);
    }
  };

  return (
    <HomeDiv>
      <h1 style={{ fontSize: "500%", padding: "1rem" }}>starface</h1>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <form style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "inline",
              paddingBottom: "1rem",
              textAlignLast: "center",
            }}
          >
            <input id="file-upload" type="file" onChange={handleChange} />
          </div>

          {emptyUpload ? (
            <div style={{ paddingBottom: 5 }}>
              Please choose an image to upload.
            </div>
          ) : (
            <div></div>
          )}

          {uploadErr ? (
            <div style={{ paddingBottom: 5 }}>
              Error uploading image. Please try again.
            </div>
          ) : (
            <div></div>
          )}

          <div style={{ display: "inline" }}>
            <h2 className="buttonDiv" onClick={uploadImage}>
              Upload Image!
            </h2>
          </div>
        </form>
      )}

      <p style={{ fontSize: "1.5em" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </HomeDiv>
  );
};

export default Home;

const HomeDiv = styled.div`
  width: 90%;
  text-align: center;
`;
