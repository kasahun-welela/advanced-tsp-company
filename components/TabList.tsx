import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartNoAxesCombined } from "lucide-react";

function TabList() {
  return (
    <Tabs defaultValue="assess" className="w-[400px] -mt-7">
      <TabsList>
        <TabsTrigger
          className="text-white bg-slate-950 py-4 px-6"
          value="assess"
        >
          <ChartNoAxesCombined className="w-4 h-4" />
          Assess
        </TabsTrigger>
        <TabsTrigger
          className="text-white bg-slate-950 py-4 px-6"
          value="assess"
        >
          <ChartNoAxesCombined className="w-4 h-4" />
          Assess
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

export default TabList;
