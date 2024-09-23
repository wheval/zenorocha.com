import BackgroundBeams from "@/components/beams";
import Bento from "@/components/bento";
import Header from "@/components/header";
import Intro from "@/components/intro";
import Main from "@/components/main";

export const revalidate = 0;

export default async function Home() {
  const recentTracks = await fetch(
    "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=zillalikesmusic&api_key=eb8c1533d8f97d56cf3eb4d0096e7f3e&format=json&limit=5",
  ).then((res) => res.json());

  return <Main recentTracks={recentTracks} />;
}
