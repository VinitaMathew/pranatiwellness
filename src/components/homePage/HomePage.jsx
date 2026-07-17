import Contact from "./contact/Contact";
import Details from "./details/Details";
import GettingStarted from "./gettingStarted/GettingStarted";
import Landing from "./landing/Landing";
import MeetSurabhi from "./meetSurabhi/MeetSurabhi";
import Scope from "./scope/Scope";
import Therapy from "./therapy/Therapy";

const HomePage = (props) => {
  return (
    <main className="home-page">
      <section className="home-page__content">
        <Landing scrollToBegin={props.scrollToBegin} ref={props.beginRef} />
        <Details />
        <Therapy ref={props.processRef} />
        <Scope scrollToContact={props.scrollToContact} />
        <GettingStarted scrollToContact={props.scrollToContact} />
        <MeetSurabhi ref={props.aboutRef} />
        <Contact ref={props.contactRef} />
      </section>
    </main>
  );
};

export default HomePage;
