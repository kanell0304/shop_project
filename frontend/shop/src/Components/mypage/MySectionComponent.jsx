import { Outlet } from "react-router-dom";

const MySection = () => {
  return (
    <div className="myContainer">
      <section className="mysSection">
        <Outlet />
      </section>
    </div>
  );
};

export default MySection;
