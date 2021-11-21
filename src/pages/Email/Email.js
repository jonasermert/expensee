import EmailButton from "../../components/EmailButton/EmailButton";
import "./Email.scss";
import Header from "../../components/Navbar/Header";
import Footer from "../../components/Footer/Footer";
const Email = () => {
    return (
        <div>
            <Header />
            <h1 id="EmailH1">Expensee</h1>
            <EmailButton />
            <Footer />
        </div>
    );
}

export default Email;