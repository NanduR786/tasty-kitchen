import styled from "styled-components";
export const CustomButton = styled.button`
  min-width: 360px;
  min-height: 40px;
  border-radius: 8px;
  background-color: rgba(247, 147, 30, 1);
  color: rgba(255, 255, 255, 1);
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  vertical-align: middle;
  border: none;
  margin: 10px;
  @media (max-width: 768px) {
    margin-left: 0px;
  }
`;
