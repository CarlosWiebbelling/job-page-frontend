import { styled } from "styled-components";

const UserItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const UserImage = styled.img`
  height: 2.5rem;
  border-radius: 50%;
  border: 1px solid #dcdcdc;
  padding: 0.25rem;
`;

const UserTitle = styled.h2`
  margin: 0;
  font-size: 16px;
  font-weight: "bold"
`;

const UserRole = styled.p`
  margin: 0;
  font-size: 12px;
`;

const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  margin-left: 1rem;
`;

export {
  UserItem,
  UserImage,
  UserTitle,
  UserRole,
  ContainerInfo
}
