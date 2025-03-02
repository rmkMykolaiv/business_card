import { useContext, memo } from "react";
import { SectionWrapper } from "../Components/cards/componentsForCards/reusedStyledComponents";
import SectionTitleWithArrows from "../Components/SectionTitleWithArrows";
import { sectionsTitles } from "../contentSettings/configs";
import { PagesContext } from "../context/pagesContext";
import CompanyInfo from "./CompanyInfo";
import CompanyStatistics from "./CompanyStatistics";
import styled from "styled-components";

const AboutCompany = () => {
  const { aboutCompanyRef } = useContext(PagesContext);
  return (
    <AboutCompanyWrapper ref={aboutCompanyRef}>
      <SectionWrapper>
        <SectionTitleWithArrows>
          {sectionsTitles.aboutCompany.text}
        </SectionTitleWithArrows>
        <CompanyInfo />
      </SectionWrapper>
      <CompanyStatistics />
    </AboutCompanyWrapper>
  );
};

export default memo(AboutCompany);

const AboutCompanyWrapper = styled.div`
  scroll-margin-top: 100px;

  @media (max-width: 1090px) {
    scroll-margin-top: 70px;
  }

  @media (max-width: 800px) {
    padding-top: 40px;
  }
`;
