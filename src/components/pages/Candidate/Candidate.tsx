import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import type { ReactElement } from "react";

import {
  Container,
  Description,
  Header,
  HeaderInfo,
  Image,
  Role,
  Title
} from "./Candidate.styles";

import { UserListItem } from "../../molecules/UserListItem/types";
import Messages from "../../organisms/Messages";

const Candidate = (): ReactElement => {
  const [data, setData] = useState<UserListItem | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  useEffect(() => {
    setLoading(true);

    fetch(`http://localhost:3100/candidate?id=${ id }`)
      .then(res => res.json())
      .then(data => setData(data))
      .finally(() => setLoading(false));
  }, [id]);

  
  if (loading) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  if (!loading && !data) {
    return (
      <Title>
        Empty list
      </Title>
    )
  }

  return (
    <Container>
      <Header>
        <Image
          src={data?.image}
          alt={`${ data?.title } - ${ data?.role } - profile image`}
        />
        <HeaderInfo>
          <Title>
            {data?.title}
          </Title>
          <Role>
            {data?.role}
          </Role>
        </HeaderInfo>
      </Header>
      <div>
        <Description>
          {data?.description}
        </Description>
      </div>
      <Messages />
    </Container>
  )
}

export default Candidate;
