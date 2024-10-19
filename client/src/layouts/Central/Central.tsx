import { Base } from "@/layouts";
import { Banner } from "./Banner";
import "./Central.style.scss";
import { Divider } from "./Divider";
import { HeaderLinks } from "./HeaderLinks";
import { Navigation } from "./Navigation";

interface Props {
  title: string;
  children: React.ReactNode;
}

function Central({ title, children }: Props) {

  return (
    <Base>
      <Banner />
      <div className="Central__page">
        <HeaderLinks />
        <Navigation />
        <h2 className="Central__page__title">{title}</h2>
        <Divider />
        <div className="Central__page__content">{children}</div>
        <Divider />
        <div className="Central__page__footer">

          <div className="Central__page__footer__contact">
            <a href="https://carleton.ca/about/contact/" target="_blank">Contact Information</a>
          </div>

          <div className="Central__page__footer__address">
            <p>1125 Colonel By Dr, Ottawa, ON K1S 5B6</p>
          </div>

          <div className="Central__page__footer__release">Release: 8.10.1</div>

          <div className="Central__page__footer__copyright">
            © 2024 Ellucian Company L.P. and its affiliates.
          </div>

        </div>
      </div>
    </Base>
  );
}

export default Central;
