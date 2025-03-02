import { memo } from "react";
import { companyInfoUkr } from "../contentSettings/configs";
import styled from "styled-components";

const CompanyInfo = () => {
  return (
    <InfoContainer>
      {companyInfoUkr.info.map((i) => (
        <Text key={i.id}>
          {i.preText && <ColoredInfo>{i.preText}</ColoredInfo>}
          {i.text && <MainInfo>{i.text}</MainInfo>}
        </Text>
      ))}
      <CeoInfo>{`${companyInfoUkr.ceo.name} ${companyInfoUkr.ceo.position}`}</CeoInfo>
    </InfoContainer>
  );
};

export default memo(CompanyInfo);

const InfoContainer = styled.div`
  border-radius: 45px;
  border: 4px solid rgb(82, 155, 45);
  padding: 25px;
  margin: 50px 0 0 0;
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 22px;
  padding: 0 0 25px 0;
  text-align: justify;
`;

const ColoredInfo = styled.span`
  color: rgb(82, 155, 45);
  font-weight: 600;
  font-size: 18px;
`;
const MainInfo = styled.span``;

const CeoInfo = styled.p`
  margin: 0 0 0 40px;
  font-size: 18px;
  text-align: right;
  font-weight: 800;
`;
