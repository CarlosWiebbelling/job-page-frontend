import { Fragment, useEffect, useState } from 'react';
import type { ReactElement } from 'react';

import Title from '../../atoms/Title';
import UserListItem from '../../molecules/UserListItem';

import { ListUser } from './ListUsers.styles';

import type { UserListItem as UserListItemProps } from '../../molecules/UserListItem/types';

const ListUsers = (): ReactElement => {
  const [data, setData] = useState<Array<UserListItemProps> | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    fetch("http://localhost:3100/candidates")
      .then(res => res.json())
      .then(data => setData(data))
      .finally(() => setLoading(false));
  }, []);

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
    <Fragment>
      <Title>
        Job candidates
      </Title>

      <ListUser>
        {data!.map(
          (item: UserListItemProps) =>
            <UserListItem
              id={item.id}
              image={item.image}
              role={item.role}
              title={item.title}
              key={item.id}
              description={item.description}
            />
        )}
      </ListUser>
    </Fragment>
  )
}

export default ListUsers
