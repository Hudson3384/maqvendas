import ImageGrid from "@/components/ui/imageGrid";

export default function Home() {
  return (
    <div className="bg-gray-white flex justify-center">
      <article className="bg-white flex-1 container">
        <h2 className="text-xl text-bold uppercase">Conheça nossos parceiros</h2>
        <ImageGrid />
      </article>
    </div>
  );
}
