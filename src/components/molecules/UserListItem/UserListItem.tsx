import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

import {
  ContainerInfo,
  UserImage,
  UserItem,
  UserRole,
  UserTitle
} from "./UserListItem.styles";

import type { UserListItem as UserListItemrops } from "./types";

const UserListItem = (props: UserListItemrops): ReactElement<UserListItemrops> => {
  const {
    id,
    image,
    role,
    title
  } = props;

  const navigate = useNavigate();

  return (
    <UserItem onClick={() => navigate(`/candidate?id=${ id }`)}>
      <UserImage
        src={image}
        alt={`${ title } - ${ role } - profile image`}
      />
      <ContainerInfo>
        <UserTitle>{ title }</UserTitle>
        <UserRole>{ role }</UserRole>
      </ContainerInfo>
    </UserItem>
  )
}

export default UserListItem;
