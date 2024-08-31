import SearchBox from "@/components/SearchBox";
import WeatherInfo from "@/components/WeatherInfo";
import LocalitiesInfo from "../../../lib/localities.json";
import Header from "@/components/Header";

export default function WeatherPage({
  params,
}: {
  params: { locality: string };
}) {
  const localityData = LocalitiesInfo.find((l) =>
    l.locality
      .toLowerCase()
      .includes(decodeURIComponent(params.locality).toLowerCase())
  );
  return (
    <>
      <Header />
      <WeatherInfo localityData={localityData} />
    </>
  );
}
