import React from "react";
import Frame from "../../components/Frame";
import "../../styles/root.css";
import SubTitle from "../../components/SubTitle";
import ImageSVG, { ImageType } from "../../components/Image";

const Page: React.FC = ({}) => {
  return (
    <Frame
      pageColor="anaferon"
      headerTitle="АНАФЕРОН"
      headerStyles={0}
      headerDescription={<></>}
      footerStyle="footer-41"
      footerText={
        <ol className="ol">
          <li>
            Анаферон дитячий вперше зареєстрований в Україні 21.05.2003 р.,
            Анаферон вперше зареєстрований в Україні 25.01.2005 р{" "}
          </li>
          <li>
            Каіра А.І. та ін. Неспецифічна профілактика грипу та гострих
            респіраторних вірусних інфекцій препаратом Анаферон. Інфекційні
            хвороби. 2005. Т. № 3. — стор. 64-67.{" "}
          </li>
          <li>
            Ревякіна В.А., Ільїна Н.І., Геппе Н.А. Прим: педіатричні
            рекомендації щодо імуномодулюючих препаратів в амбулаторній
            практиці. (консенсус). // М. - 2015. - 56с.
          </li>
        </ol>
      }
      kids
    >
      <ImageSVG type={ImageType.Slide_41_3} className="slide_37_2" />
      <SubTitle pageColor="anaferon">переваги:</SubTitle>
      <div className="content-38 content-41">
        <ImageSVG type={ImageType.Slide_41_1} className="slide_41_1" />
        <ImageSVG type={ImageType.Slide_41_2} className="slide_41_2" />
      </div>
    </Frame>
  );
};

export default Page;
