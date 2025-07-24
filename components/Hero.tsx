import {
  PhoneIcon,
  ChartNoAxesCombined,
  Pencil,
  Monitor,
  CloudCog,
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Hero = () => {
  return (
    <>
      <section className="md:mt-16 w-full h-screen flex gap-3 items-center justify-center overflow-hidden bg-[url(/images/hero-img.jpg)] bg-cover bg-center bg-no-repeat ">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <p className="text-lg md:text-2xl  text-white">
            Not your typical managed IT services provider.{" "}
          </p>
          <h1 className="text-4xl md:text-7xl font-extrabold  text-white mt-4 uppercase">
            Excellent IT with <br /> a solution in mind
          </h1>
          <p className="text-lg md:text-xl text-white mt-4 max-w-2xl mx-auto">
            The best Managed IT Services are customized, technically sound and
            fully efficient. At Atlantic Technology Services, our mission is to
            ensure your IT needs are met.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 animate-fade-in-up animate-delay-300">
            <Link
              href="/contact"
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/80"
            >
              Schedule a Consultation
            </Link>
            <Link href="tel:100-2222-2222">
              <Button className="bg-white text-black px-4 py-2 rounded-md">
                <PhoneIcon className="w-4 h-4" />
                100-2222-2222
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 bg-slate-950  -mt-20">
        <Tabs defaultValue="assess" className="w-full py-3">
          <TabsList className="grid grid-cols-2 md:grid-cols-4">
            <TabsTrigger
              className="text-white py-4 px-4 md:py-6 md:px-6 md:text-2xl border border-slate-500 hover:bg-primary/80"
              value="assess"
            >
              <ChartNoAxesCombined className="w-7 h-7 mr-3" />
              Assess
            </TabsTrigger>
            <TabsTrigger
              className="text-white  py-4 px-4 md:py-6 md:px-6  md:text-2xl border border-slate-500 hover:bg-primary/80"
              value="design"
            >
              <Pencil className="w-7 h-7 mr-3" />
              Design
            </TabsTrigger>
            <TabsTrigger
              className="text-white  py-4 px-4 md:py-6 md:px-6  md:text-2xl border border-slate-500 hover:bg-primary/80"
              value="deploy"
            >
              <CloudCog className="w-7 h-7 mr-3" />
              Deploy
            </TabsTrigger>
            <TabsTrigger
              className="text-white  py-4 px-4 md:py-6 md:px-6  md:text-2xl border border-slate-500 hover:bg-primary/80"
              value="manage"
            >
              <Monitor className="w-7 h-7 mr-3" />
              Manage
            </TabsTrigger>
          </TabsList>
          <TabsContent value="assess">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-10 py-10">
              <div className="flex flex-col gap-2">
                <hr className="border-slate-500" />
                <p className="text-xl md:text-end text-gray-400">Step 1</p>
                <h2 className="text-2xl font-bold uppercase md:text-end text-white">
                  Assess
                </h2>
              </div>
              <div className="col-span-2">
                <p className="text-gray-400 text-lg">
                  The first step is to assess the situation and truly diagnose
                  the issue. We take the time to listen to your symptoms and
                  what pain points you have. Some problems are bigger than
                  others but, all of them are fixable. Let us find a solution
                  and not a cheap fix for today.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <hr className="border-slate-500" />
                <Link
                  href="/contact"
                  className=" text-2xl font-bold uppercase text-white"
                >
                  Lets&apos;s chat
                </Link>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="design">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-10 py-10">
              <div className="flex flex-col gap-2">
                <hr className="border-slate-500" />
                <p className="text-xl md:text-end text-gray-400">Step 2</p>
                <h2 className="text-2xl font-bold uppercase md:text-end text-white">
                  Design
                </h2>
              </div>
              <div className="col-span-2">
                <p className="text-gray-400 text-lg">
                  Once the problem is diagnosed, its time to curate a properly
                  designed solution to eliminate the pain points. We always
                  strive for a solution that will ensure minimal to zero risk in
                  the long-term. No one hopes for a fix today that causes a
                  problem tomorrow. A true solution is our philosophy from the
                  beginning.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <hr className="border-slate-500" />
                <Link
                  href="/contact"
                  className=" text-2xl font-bold uppercase text-white"
                >
                  Lets&apos;s chat
                </Link>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="deploy">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-10 py-10">
              <div className="flex flex-col gap-2">
                <hr className="border-slate-500" />
                <p className="text-xl md:text-end text-gray-400">Step 3</p>
                <h2 className="text-2xl font-bold uppercase md:text-end text-white">
                  Deploy
                </h2>
              </div>
              <div className="col-span-2">
                <p className="text-gray-400 text-lg">
                  We take the time to accurately deploy your customized solution
                  to your network, and make sure that everyone in your
                  organization is informed. A successful IT environment requires
                  thought, preciseness, expertise and patience — which is
                  exactly what we offer you as your technology partner.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <hr className="border-slate-500" />
                <Link
                  href="/contact"
                  className=" text-2xl font-bold uppercase text-white"
                >
                  Lets&apos;s chat
                </Link>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="manage">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-10 py-10">
              <div className="flex flex-col gap-2">
                <hr className="border-slate-500" />
                <p className="text-xl md:text-end text-gray-400">Step 4</p>
                <h2 className="text-2xl font-bold uppercase md:text-end text-white">
                  Manage
                </h2>
              </div>
              <div className="col-span-2">
                <p className="text-gray-400 text-lg">
                  Proper maintenance is key to the integrity of anything,
                  especially your business&apos;s IT solutions. We manage your
                  IT environment to ensure all needs are met continuously and
                  your business and employees stay up and running. We stay
                  proactive in communication, mitigation and updates so your
                  business continues on a smooth path.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <hr className="border-slate-500" />
                <Link
                  href="/contact"
                  className=" text-2xl font-bold uppercase text-white"
                >
                  Lets&apos;s chat
                </Link>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
};

export default Hero;
