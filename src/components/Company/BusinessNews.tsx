import BlurFade from "@/components/magicui/blur-fade";
import { CardTitle } from "@/components/ui/card";

export const BusinessNews = ({ recomendation }: { recomendation?: string }) => {
  return (
    <div className="flex h-fit flex-col justify-around gap-4 rounded-md bg-gradient-to-b from-gray-100 to-gray-300/80 p-6 text-start">
      {/* <div className="size-24"></div> */}
      {/* <h2 className="font-mono text-3xl font-semibold">Business News</h2> */}
      <CardTitle>Business news, economic news, articles</CardTitle>
      <span className="hover:cursor-pointer hover:underline">Other news</span>
      <div className="flex min-h-[400px] w-full flex-col flex-nowrap items-center justify-center">
        <BlurFade delay={0.25} inView>
          Fetching news...
        </BlurFade>
      </div>
    </div>
  );
};
