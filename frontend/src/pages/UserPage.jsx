import { useEffect, useState } from "react";
import UserHeader from "../components/UserHeader"
import UserPost from "../components/UserPost"
import { useParams } from "react-router-dom";
import useShowToast from "../../hooks/useShowToast";

const UserPage = () => {
  const [user, setUser] = useState(null);
  const { username } = useParams();
  const showToast = useShowToast();
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/users/profile/${username}`);
        const data = await res.json();
        if (data.error) {
          showToast("Error", data.error, "error");
          return;
        }
        setUser(data);
      } catch (error) {
        showToast("Error", error, "error");
      }
    };
    getUser();
  }, [username, showToast]);

  if (!user) return null;

  return (
    <>
      <UserHeader user={user} />
      <UserPost likes={1200} replies={481} postImg="/post1.png" postTitle="Let's talk about threads." />
      <UserPost likes={456} replies={123} postImg="/post2.png" postTitle="Let's talk about threads." />
      <UserPost likes={100} replies={200} postImg="/post3.png" postTitle="Let's talk about threads." />
      <UserPost likes={200} replies={300} postTitle="Let's talk about threads." />
    </>
  );
};

export default UserPage;
