import {
  fetchDummyAtom,
  fetchUserIdAtom,
  userIdAtom,
} from "../atoms/fetchAtoms";
import { useAtom } from "jotai";
const Fetch = () => {
  // fetch data
  const [fetchData] = useAtom(fetchDummyAtom);
  const [userID, setUserID] = useAtom(userIdAtom);
  const [fetchUserID] = useAtom(fetchUserIdAtom);

  if (!fetchData) return;
  return (
    <div>
      <h2 style={{ color: "brown" }}>Fetch.tsx</h2>
      <h3>userID: {fetchData.userId}</h3>
      <h3>title: {fetchData.title}</h3>
      <h3>completed: {`${fetchData.completed}`}</h3>
      <h3>id: {fetchData.id}</h3>
      <div>
        User Id: {userID}
        <button onClick={() => setUserID((c) => c - 1)}>Prev</button>
        <button onClick={() => setUserID((c) => c + 1)}>Next</button>
        <div>{JSON.stringify(fetchUserID)}</div>
      </div>

      <h4 style={{ color: "orange" }}>async example</h4>
    </div>
  );
};

export default Fetch;
