import { rides_endpoint, user_endpoint } from "./common";

// Enabling SSR will make pages return with data
//  but it adds the overhead to the load time
// In this case i'd recommend not using SSR as:
// - The data is not in the same server as the page
// - SEO is not important
export const getInitialProps = async () => {
  if (process.env.RENDER_MODE != "SSR") return { props: {} };

  try {
    const rides = fetch(rides_endpoint).then((res) => res.json());
    const user = fetch(user_endpoint).then((res) => res.json());
    const data = await Promise.all([rides, user]);

    return {
      props: {
        initialRides: data[0],
        initialUser: data[1],
        //ssr: "success",
      },
    };
  } catch {
    return {
      props: {
        /*ssr: "error"*/
      },
    };
  }
};
