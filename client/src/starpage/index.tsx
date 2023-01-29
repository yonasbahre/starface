import { useState, useContext } from "react";
import Star from "../shared/star";
import { StarContext } from "../App";
import Navbar from "./navbar";
import styled from "styled-components";
import Fact from "./fact";
import MessageScroll from "./messagescroll";
import axios from "axios";

const StarPage: React.FC<{}> = () => {
  const { star, updateStar } = useContext(StarContext);
  const [formInput, setFormInput] = useState<string>(""); 

  const handleChange = (e: any): void => {
    setFormInput(e.target.value);
  }

  const handleSubmit = async (e: any): Promise<void> => {
    e.preventDefault();
    console.log(`Submitting: ${formInput}`);

    try {
      const resp = await axios.post(
        `${import.meta.env.VITE_STARSERV}/star/${star.id}`,
        {message: formInput},
        {
          headers: { 
            'Content-Type' : 'application/json' 
          }
        }
      );
      updateStar(resp.data);
      console.log(resp.data);
      setFormInput("");
    } catch (e: any) {
      // TODO: Delete log
      setFormInput("");
      console.log(e);
    }
  }

  return (
    <OuterStarDiv>
      <Navbar />
      <StarDiv>
        <h2 style={{ fontSize: "4em" }}>{star.name}</h2>
        <FactTable>
          <Fact label="Constellation" info={star.constellation} />
          <Fact
            label="Distance From Earth (Light Years)"
            info={star.distance}
          />
          <Fact label="Size (Solar Masses)" info={star.solarMasses} />
          <Fact label="Temperature (K)" info={star.temperature} />
          <Fact label="Fun Fact!" info={star.fact} />
        </FactTable>

        <MessageBox>
          <MessageScroll messages={star.messages}/>
          <FormStyle onSubmit={handleSubmit}>
            <textarea placeholder="Say hello to your little friends!" value={formInput} onChange={handleChange} style={{minWidth: "50%"}}></textarea>
            <div className="buttonDiv" onClick={handleSubmit}>
              Post Message!
            </div>
          </FormStyle>
        </MessageBox>


        <div style={{ display: "inline", margin: 10 }}>
          <a
            href={star.link}
            target="_blank"
            className="buttonDiv"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "1.5rem",
            }}
          >
            Further Reading on Wikipedia!
          </a>
        </div>
      </StarDiv>
    </OuterStarDiv>
  );
};

export default StarPage;

const OuterStarDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
`;

const StarDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FactTable = styled.div`
  padding-top: 0.5rem;
`;

const FormStyle = styled.form`
  textarea {
    background: rgba(20, 20, 40, 0.7);
    border-style: none;
    color: white;
    font-family: Josefin Sans, sans-serif;
    height: 5em;
    width: inherit;
    resize: none;
  }

  display: flex;
  flex-direction: column;
`;

const MessageBox = styled.div`
  min-width: 50%;
  max-width: 80%;
`;