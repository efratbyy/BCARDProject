import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState, MouseEvent } from "react";

interface Post {
  title: string;
  subtitle: string;
  author: string;
  createdAt: string | Date;
}

const SetPost = () => {
  const INITIAL_POST: Post = {
    title: "",
    subtitle: "",
    author: "",
    createdAt: "",
  };

  const [isLogged, setIsLogged] = useState(false);
  const [post, setPost] = useState(INITIAL_POST);
  const [posts, setPosts] = useState<Post[] | []>([]);

  type Event = MouseEvent<HTMLButtonElement>;

  const createNewPost = (e: Event) => {
    e.preventDefault();
    setPosts((prev) => [...prev, { ...post, createdAt: new Date() }]);
    return setPost(INITIAL_POST);
  };

  return (
    <Box>
      {/* <h1>{post.title}</h1>
        <h2>{post.subtitle}</h2>
        <p>{post.author}</p> */}

      <button
        style={{ padding: 2, margin: 4 }}
        onClick={() => setIsLogged((prev) => (prev = !prev))}
      >
        {isLogged ? "Logout" : "Login"}
      </button>

      {isLogged && (
        <form>
          <input
            type="text"
            placeholder="Entera Title"
            onChange={(e) =>
              setPost((prev) => ({ ...prev, title: e.target.value }))
            }
            value={post.title}
          />
          <br />
          <input
            type="text"
            placeholder="Enter a Subtitle"
            onChange={(e) =>
              setPost((prev) => ({ ...prev, subtitle: e.target.value }))
            }
            value={post.subtitle}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Author name"
            onChange={(e) =>
              setPost((prev) => ({ ...prev, author: e.target.value }))
            }
            value={post.author}
          />
          <br />
          <button
            disabled={!post.title || !post.subtitle || !post.author}
            onClick={createNewPost}
          >
            Add New Post
          </button>
        </form>
      )}

      {!!posts.length && isLogged && (
        <Table>
          <TableHead style={{ backgroundColor: "lavender" }}>
            <TableRow>
            <TableCell>no.</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Subtitle</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Created At</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.map((post, index) => (
              <TableRow key={index} style={{ backgroundColor: "lavender" }}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.subtitle}</TableCell>
                <TableCell>{post.author}</TableCell>
                <TableCell>{post.createdAt.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      <br />
    </Box>
  );
};

export default SetPost;
