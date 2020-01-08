import React from "react";
import { gql, useQuery, useMutation } from "@apollo/client";

const BOOKS = gql`
  query {
    books {
      title
    }
  }
`;

const TOGGLE_NAME = gql`
  mutation toggleName($name: String) {
    toggleName(name: $name) {
      title
    }
  }
`;

const ISLOGIN = gql`
  query {
    isLogin @client {
      state
    }
  }
`;

const TOGGLE_STATUS = gql`
  mutation toggleState($status: Boolean) {
    toggleState(status: $status) @client {
      state
    }
  }
`;

const UserInfo: React.FC = () => {
  const { data, loading, error } = useQuery(ISLOGIN, {
    fetchPolicy: "cache-only"
  });

  const [toggleState] = useMutation(TOGGLE_STATUS);

  if (loading) {
    console.log("로딩");
    return <div>loading</div>;
  }

  if (error) {
  }

  console.log(data);

  return (
    <div>
      <div>I am walli</div>
      <button
        onClick={() => {
          toggleState({ variables: { status: true } }).then(data =>
            console.log(data)
          );
        }}
      >
        click
      </button>
    </div>
  );
};

export default UserInfo;
