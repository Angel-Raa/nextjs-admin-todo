import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard")
  return (
    <div>
      <h2>Home Pages</h2>
      <h3>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
        aut ex sunt exercitationem possimus totam nemo sint iusto! Quam
        explicabo distinctio, dignissimos tempore iure eum esse fuga aperiam ea
        sapiente.
      </h3>
    </div>
  );
}
