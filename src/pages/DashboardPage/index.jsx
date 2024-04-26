import { Dashboard } from "../../components/Dashboard";
import { RegisterTechFormModal } from "../../components/createModal";
import { TechList } from "../../components/techsList";
import { EditTechsModal } from "../../components/EditTechModal";
import { PostProvider } from "../../providers/PostContext";

export const DashboardPage = () => {
  return (
    <>
      <main>
        <PostProvider>
          <Dashboard />
          <TechList />
        </PostProvider>
        {/* <EditTechsModal /> */}
      </main>
    </>
  );
};
