import { memo } from "react";
import { companyStatistics } from "../contentSettings/configs";
import { SectionWrapper } from "../Components/cards/componentsForCards/reusedStyledComponents";
import styled from "styled-components";
import img from "../assets/img/about_company.jpg";

const CompanyStatistics = () => {
  return (
    <Background>
      <SectionWrapper>
        <StatisticsContainer>
          <ImgWrapper>
            <Img src={img} alt="about_company_img" />
          </ImgWrapper>
          <InfoWrapper>
            <Title>{companyStatistics.title}</Title>
            <ListWrapper>
              {companyStatistics.list.map((s) => (
                <TextContainer key={s.id}>
                  <Text>{s.text.prev}</Text>
                  <ColoredText> {s.text.colored} </ColoredText>
                  <Text>{s.text.post}</Text>
                </TextContainer>
              ))}
            </ListWrapper>
          </InfoWrapper>
        </StatisticsContainer>
      </SectionWrapper>
    </Background>
  );
};

export default memo(CompanyStatistics);

const Background = styled.div`
  background-color: rgb(82, 155, 45, 0.9);
`;

const StatisticsContainer = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 40px;
  align-items: center;
  padding: 65px 20px;
  margin: 110px 0 40px 0;

  @media (max-width: 800px) {
    flex-direction: column;
    column-gap: 0;
    row-gap: 50px;
  }
`;

const ImgWrapper = styled.div`
  max-width: 270px;
  max-height: 270px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const InfoWrapper = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 25px;
`;

const Title = styled.p`
  margin: 0 0 20px 0;
  font-size: 18px;
  font-weight: 600;
  color: rgb(82, 155, 45);
`;

const ListWrapper = styled.ul`
  list-style-type: none;

  li::before {
    content: "• ";
    color: rgb(82, 155, 45);
    margin: 0 0 0 -12px;
  }
`;

const TextContainer = styled.li`
  line-height: 22px;
`;

const Text = styled.span``;

const ColoredText = styled.span`
  color: rgb(82, 155, 45);
  font-weight: 600;
  font-size: 18px;
`;
