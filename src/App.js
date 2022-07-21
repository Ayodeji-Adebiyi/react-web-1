import Header from "./Components/Header";
import SectionCategory from "./Components/SectionCategory";
import SectionDownloads from "./Components/SectionDownloads";
import SectionFooter from "./Components/SectionFooter";
import SectionJobs from "./Components/SectionJobs";
import SectionService from "./Components/SectionService";
import SectionStaff from "./Components/SectionStaff";
import SectionSubscribe from "./Components/SectionSubscribe";


function App() {
  return (
    <div className="App">
      <Header />
      <SectionCategory />
      <SectionJobs />
      <SectionService />
      <SectionDownloads />
      <SectionStaff />
      <SectionSubscribe />
      <SectionFooter />
    </div>
  );
}

export default App;
