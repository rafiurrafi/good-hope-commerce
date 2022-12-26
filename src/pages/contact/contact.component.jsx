import "./contact.style.scss";
import Title from "../../componentns/title/title.component";
import Container from "../../componentns/common/Container/container.component";
import {
  ButtonLink,
  H4,
} from "../../componentns/typography/typography.component";
import { SimpleTextarea } from "../../componentns/common/input/input.component";
import { InputWithLabel } from "../../componentns/common/input/input.component";
import { FaLocationArrow } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";
import { MdCall } from "react-icons/md";
const Contact = () => {
  return (
    <div className="contact">
      <Title title="Cart" route="Home - Checkout Page" />
      <h4 className="contact__title">
        Contact for any <span>Query</span>
      </h4>

      <Container>
        <div className="contact__inputs">
          <InputWithLabel label="First Name" placeholder="Abdur" />
          <InputWithLabel label="Email" placeholder="Rahim" />
          <InputWithLabel label="Subject" placeholder="Abdur" />
          <SimpleTextarea placeholder="Go boy" />
          <ButtonLink>Send Your Thoughts</ButtonLink>
        </div>
        <div className="contact__details">
          <div>
            <H4>Get in touch</H4>
            <p>
              Justo sed diam ut sed amet duo amet lorem amet stet sea ipsum, sed
              duo amet et. Est elitr dolor elitr erat sit sit. Dolor diam et
              erat clita ipsum justo sed.
            </p>
          </div>
          <div>
            <H4>Store 1</H4>
            <div className="contact__info">
              <p>
                <FaLocationArrow />
              </p>
              <p>123 Street, New York, USA</p>
            </div>
            <div className="contact__info">
              <p>
                <BiEnvelope />
              </p>
              <p>123 Street, New York, USA</p>
            </div>
            <div className="contact__info">
              <p>
                <MdCall />
              </p>
              <p>123 Street, New York, USA</p>
            </div>
          </div>
          <div>
            <H4>Store 2</H4>
            <div className="contact__info">
              <p>
                <FaLocationArrow />
              </p>
              <p>123 Street, New York, USA</p>
            </div>
            <div className="contact__info">
              <p>
                <BiEnvelope />
              </p>
              <p>123 Street, New York, USA</p>
            </div>
            <div className="contact__info">
              <p>
                <MdCall />
              </p>
              <p>123 Street, New York, USA</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
