import { useState, useEffect } from "react";
import { backendClient } from "../client/backendClient";
function FeedPage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [posts, setPosts] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await backendClient.get("/posts", {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("social-app-token")
            )}`,
          },
        });

        setPosts(res.data);
      } catch (error) {}
    };
    fetchPosts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await backendClient.post(
        "/posts",
        { title, body },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("social-app-token")
            )}`,
          },
        }
      );

      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <main className="max-w-md mx-auto p-4">
      <h1 className="font-extrabold text-center text-2xl text-sky-400 mb-6">Feed Page</h1>

      <form className= "flex flex-col space-y-4" onSubmit={handleSubmit}>
        <div>
           <label htmlFor="titile" />
         <input className="border rounded px-3 py-2 w-full"
          type="text"
          title={title}
          name="title"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        </div>
       
        <div>
          <label htmlFor="body" />
         <input className="border rounded px-3 py-2 w-full"
          type="text"
          name="body"
          placeholder="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        </div>
       

        <input className="border bg-sky-100 font-bold rounded p-1 text-blue-800" type="submit" value="post" />
      </form>

      <div>
        {posts.length > 0 && (
          <>
            <h2 className="font-bold text-xl mb-1 mt-4">Posts:</h2>
            {posts.map((post) => (
              <div key={post._id}>
                <h4 className="underline text-blue-600 font-bold" >{post.title}</h4>
                <p>{post.body}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </main>
  );
}
export default FeedPage;
